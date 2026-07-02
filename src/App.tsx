
import Blog from './Blog'
import Child from './Child'
import EmployeDetails from './EmployeDetails'

function App() {

  const employee = {
    id:1,name:"surya",salary:30000,department:"Dev"
  }

  return (
    <>
      <Child name = "Surya" age = {22}/>
      <EmployeDetails emp = {employee}/>
      <Blog />
    </>
  )
}

export default App
