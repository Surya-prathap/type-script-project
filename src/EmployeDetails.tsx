
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
      <h2>Employee Name: {emp.name}</h2>
      <h2>Employee Id: {emp.id}</h2>
      <h2>Salary: {emp.salary}</h2>
      <h2>Department: {emp.department}</h2>
      <hr />
    </>
  )
}

export default EmployeDetails
