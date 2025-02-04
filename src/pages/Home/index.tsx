import "./style.scss"
import { Card } from "../../components/Card"
import { useState, useEffect } from "react"

function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({
    name: '',
    avatar: ''
  });

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/everton19");
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();
  }, [])

  return (
    <div className="container">
      
      <header>
          <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar}/>
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
