
type PostBodyProps = {
    body: string
}

function PostBody({body}: PostBodyProps) {
  return (
    <>
      <p>{body}</p>
      <hr />
    </>
  )
}

export default PostBody
