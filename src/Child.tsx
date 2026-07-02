
type ChildProps = {
    name?:string,
    age?:number
}

function Child({name,age}: ChildProps) {
  return (
    <>
      <h2>Student Name: {name} </h2>
      <h3>Age: {age} </h3>
    </>
  )
}

export default Child
