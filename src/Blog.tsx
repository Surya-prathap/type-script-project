import Post from "./Post"

type Post = {
  title: string,
  body: string
}

type BlogProps = {
  posts: Post[]
}


function Blog({posts}: BlogProps) {
  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post title={post.title} body={post.body}/>
      ))}
    </>
  )
}

export default Blog
