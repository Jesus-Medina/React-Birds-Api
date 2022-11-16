import './App.css';
import { useState, useEffect } from "react"
import { consultarInformacion, filtrarInformacion, cargarCards } from "./functions/funciones"
import SearchComponent from "./components/SearchComponent";
import CardComponent from "./components/CardComponent";
import PlayMuteComponent from "./components/PlayMuteComponent";
import Audio from "./sounds/sonidoAmbiente.mp3"

function App() {

  const [listaUsuarios, setListaUsuarios] = useState(null)
  const [inputBusqueda, setInputBusqueda] = useState("")

  useEffect(() => {
    consultarInformacion(setListaUsuarios)
  }, [])

  const cardsFiltradas = filtrarInformacion(listaUsuarios, inputBusqueda)

  return (
    <div className="App">
      <SearchComponent inputBusqueda={inputBusqueda} setInputBusqueda={setInputBusqueda} />
      <CardComponent cargarCards={cargarCards(cardsFiltradas)} />
      <PlayMuteComponent />
      <audio id="player" autoPlay loop src={Audio} ></audio>
    </div>
  );
}

export default App;
