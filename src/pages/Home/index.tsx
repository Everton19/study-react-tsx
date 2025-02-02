import "./style.scss"
import { Card } from "../../components/Card"

function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite seu nome.." />
      <button>Adicionar</button>

      <Card name="Faisca" time="10:55:12" />
      <Card name="Everton" time="12:52:14" />
    </div>
  )
}

export default Home
