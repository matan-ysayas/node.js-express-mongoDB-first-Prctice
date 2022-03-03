import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { getAllEmployees } from './service/employee-service'
function App() {
  const [count, setCount] = useState(0)

  const getEmployees=()=>{
    getAllEmployees()
    .then(employees=>employees&&console.log("then:"+employees))
    .catch(err=>console.log("error"+err))
  }
  return (
    <div className="App">
      <header className="App-header">
  <button onClick={getEmployees}>get</button>
      </header>
    </div>
  )
}

export default App
