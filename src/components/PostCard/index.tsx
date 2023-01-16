/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaComment, FaChevronLeft } from "react-icons/fa"

import * as S from "./styles";


interface UserCardProps {
  username: string;
  title: string;
  url: string;
  numberOfcomments: number;
  date: string
}

export function PostCard({ username, date, numberOfcomments, title, url }: UserCardProps) {

  return (

    <S.PostCardContainer>
      <S.PostCardContent>
        <S.PostHeaderLink>
          <Link href="/">
            <FaChevronLeft color="#3294F8" size="12px" />
            Voltar
          </Link>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Ver no gitHub
            <FaExternalLinkAlt size={12} />
          </Link>

        </S.PostHeaderLink>
        <h2>{title}</h2>

        <S.UserCardInformation>
          <span>
            <FaGithub size={18} />
            {username}
          </span>
          <span>
            <FaCalendar size={18} />
            {date}
          </span>
          <span>
            <FaComment size={18} />
            {numberOfcomments} Comentarios
          </span>
        </S.UserCardInformation>

      </S.PostCardContent>
    </S.PostCardContainer>

  )
}