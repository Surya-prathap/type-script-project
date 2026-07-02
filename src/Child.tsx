
type ChildProps = {
    name?:string,
    age?:number
}

function Child({name = "Guest", age = 10}: ChildProps) {
  return (
    <>
      <h2>Student Name: {name} </h2>
      <h3>Age: {age} </h3>
      <hr />
    </>
  )
}

export default Child
