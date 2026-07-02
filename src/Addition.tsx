
type AdditionProps = {
    num1: number,
    num2:number
}

function Addition({num1,num2}: AdditionProps) {
  return (
    <>
      <h2>Number 1 : {num1} </h2>
      <h2>Number 2 : {num2} </h2>
      <h2>Addition : {num1 + num2} </h2>
      <hr />
    </>
  )
}

export default Addition
