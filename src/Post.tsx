import PostBody from "./PostBody"
import PostTitle from "./PostTitle"


type PostProps = {
    title: string,
    body: string
}

function Post({title,body}: PostProps) {
  return (
    <>
      <PostTitle title = {title} />
      <PostBody body = {body} />
    </>
  )
}

export default Post
