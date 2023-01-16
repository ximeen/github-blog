/* eslint-disable @next/next/no-img-element */

import { FaBuilding, FaGithub, FaExternalLinkAlt, FaUserFriends } from "react-icons/fa"

import { Layout } from "../Layout";
import * as S from "./styles";

interface UserProps {
  name: string,
  company: string,
  bio: string,
  followers: number,
  url: string,
  avatar_url: string,
  login: string,
}

interface UserCardProps {
  user: UserProps;
}

export function UserCard({ user }: UserCardProps) {

  return (
    <Layout>
      <S.UserCardContainer>
        <img src={user.avatar_url} alt={user.name} />
        <S.UserCardContent>
          <S.UserCardNameContainer>

            <h2>{user.name}</h2>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              Github
              <FaExternalLinkAlt size={12} />
            </a>

          </S.UserCardNameContainer>

          <p>{user.bio}</p>

          <S.UserCardInformation>
            <span>
              <FaGithub size={18} />
              {user.login}
            </span>
            <span>
              <FaBuilding size={18} />
              {user.company}
            </span>
            <span>
              <FaUserFriends size={18} />
              {user.followers} Seguidores
            </span>
          </S.UserCardInformation>

        </S.UserCardContent>
      </S.UserCardContainer>
    </Layout>
  )
}