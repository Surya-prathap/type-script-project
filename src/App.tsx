
import Addition from './Addition'
import Blog from './Blog'
import Child from './Child'
import EmployeDetails from './EmployeDetails'
import EmployeeCardArray from './EmployeeCardArray'

function App() {

  const employee = {
    id:1,name:"surya",salary:30000,department:"Dev"
  }

  const employeeArray = [
    {id:1,name:"surya",salary:30000,department:"Dev"},
    {id:2,name:"somu",salary:25000,department:"Testing"},
    {id:3,name:"prathap",salary:35000,department:"HR"},
    {id:4,name:"raju",salary:40000,department:"Business"}
  ]

  const posts = [
    {title: "title1", body: "body1"},
    {title: "title2", body: "body2"},
    {title: "title3", body: "body3"},
    {title: "title4", body: "body4"}
  ]

  return (
    <>
      <Child name = "Surya" age = {22}/>
      <Addition num1 = {10} num2 = {20}/>
      <EmployeDetails emp = {employee}/>
      <EmployeeCardArray employeeArray = {employeeArray} />
      <Blog posts = {posts} />
    </>
  )
}

export default App
