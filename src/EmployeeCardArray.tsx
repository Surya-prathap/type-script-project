
type Employee = {
    id: number,
    name: string,
    salary: number,
    department: string
}

type EmployeeProps = {
    employeeArray: Employee[]
}

function EmployeeCardArray({employeeArray}: EmployeeProps) {
  return (
    <>
      <h2>Employee Details</h2>
      {employeeArray.map((employee) => (
        <div>
            <p>Id : {employee.id} </p>
            <p>Name : {employee.name} </p>
            <p>Salary : {employee.salary} </p>
            <p>Department : {employee.department} </p>
            <hr />
        </div>
      ))}
    </>
  )
}

export default EmployeeCardArray
