import "./style.scss"
import { Card } from "../../components/Card"
import { useState } from "react"

function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      id: Math.random(),
      name: studentName,
      time: new Date().toLocaleTimeString(
        "pt-br",
        { hour: '2-digit', minute: '2-digit' }
      )
    }

    setStudents(prev => 
      [...prev, newStudent]
    );
  }

  return (
    <div className="container">
      
      <header>
          <h1>Lista de presença</h1>
        <div>
          <strong>Everton</strong>
          <img src="https://cdn.myanimelist.net/images/characters/15/559134.jpg"/>
        </div>
      </header>
      
      <input 
        type="text" 
        placeholder="Digite seu nome.."
        onChange={e => setStudentName(e.target.value)} 
      />
      <button onClick={handleAddStudent}>Adicionar</button>

      {
        students.map(x => 
          <Card
            key={x.id}
            name={x.name} 
            time={x.time} 
          />
        )
      }
    </div>
  )
}

export default Home
