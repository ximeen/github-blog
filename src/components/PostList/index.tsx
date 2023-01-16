import { PostListContainer, PostListItem } from "./style";
import { formatDistanceToNow } from "date-fns"
import removeMarkdown from "remove-markdown";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";

interface PostsListProps {
  posts: {
    title: string;
    number: number;
    created_at: string;
    body: string;
  }[];
}

export function PostList({ posts = [] }: PostsListProps) {
  const formattedPost = posts.map(({ title, body, created_at, number }) => {
    return {
      title,
      number,
      created_at: formatDistanceToNow(new Date(created_at), { addSuffix: true, locale: ptBR }),
      body: removeMarkdown(body)
    }
  })

  return (
    <PostListContainer>
      {formattedPost.map((post) => (
        <Link key={post.number} href={`/posts/${post.number}`}>
          <PostListItem >
            <header>
              <h3>{post.title}</h3>
              <span>{post.created_at}</span>
            </header>
            <p>{post.body}</p>
          </PostListItem>
        </Link>
      ))
      }



    </PostListContainer>
  )
}