import axios from "axios";

import Head from "next/head";
import { Header } from "../components/Header";
import { UserCard } from "../components/UserCard";

const GITHUB_USERNAME = "ximeen"

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
  return (
    <>
      <Head>
        <title>Github blog</title>
      </Head>
      <Header />
      <UserCard user={user} />
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
      user
    },
    revalidade: 60 * 60 * 3 // 3 horas
  }
}