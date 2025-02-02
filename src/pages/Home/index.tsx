import "./style.scss"
import { Card } from "../../components/Card"
import { useState } from "react"

function Home() {
  const [studentName, setStudentName] = useState("")

  return (
    <div className="container">
      <h1>{studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite seu nome.."
        onChange={e => setStudentName(e.target.value)} 
      />
      <button>Adicionar</button>

      <Card name="Faisca" time="10:55:12" />
      <Card name="Everton" time="12:52:14" />
    </div>
  )
}

export default Home
