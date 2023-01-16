import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query"

import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { PostList } from "../components/PostList";
import { UserCard } from "../components/UserCard";
import { InputContainer, InputHeader } from "../styles/pages/home.styles";
import useDebounce from "../hooks/useDebounce";

const GITHUB_USERNAME = "ximeen"
const GITHUB_REPOSITORY = "ximeen/github-blog"
interface UserProps {
  name: string,
  company: string,
  bio: string,
  followers: number,
  url: string,
  avatar_url: string,
  login: string,
}

interface HomeProps {
  user: UserProps;
}

export default function Home({ user }: HomeProps) {

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)
  const { data } = useQuery(['post', debouncedSearch], () => fetchPosts(debouncedSearch))

  async function fetchPosts(q: string) {
    const { data } = await axios.get('https://api.github.com/search/issues', {
      params: {
        q: `repo:${GITHUB_REPOSITORY} ${q}`,
      }
    })
    return data
  }

  return (
    <>
      <Head>
        <title>Github blog</title>
      </Head>
      <Layout>
        <UserCard user={user} />
        <InputContainer>
          <InputHeader>
            <h3>Publicações</h3>
            <span>{data?.total_count} Publicações</span>
          </InputHeader>
          <input type="text" placeholder="Buscar conteúdo" value={search} onChange={(e) => setSearch(e.target.value)} />
        </InputContainer>
        <PostList posts={data?.items} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`)

  const user = {
    name: data.name,
    company: data.company,
    bio: data.bio,
    followers: data.followers,
    url: data.html_url,
    avatar_url: data.avatar_url,
    login: data.login,
  }

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 3, // 3 hours
  };
}