
type Employee = {
  id:number,
  name:string,
  salary:number,
  department: string
}

type EmployeeProps = {
    emp: Employee
}

function EmployeDetails({emp}: EmployeeProps) {
  return (
    <>
      <h1>Employee Name: {emp.name}</h1>
      <h2>Employee Id: {emp.id}</h2>
      <h2>Salary: {emp.salary}</h2>
      <h3>Department: {emp.department}</h3>
    </>
  )
}

export default EmployeDetails
