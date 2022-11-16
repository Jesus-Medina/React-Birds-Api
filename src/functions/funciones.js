import { Card } from "react-bootstrap";

const baseUrl = 'https://aves.ninjas.cl/api/birds'

const consultarInformacion = async (estado) => {
  const response = await fetch(baseUrl)
  const data = await response.json()
  console.log(data)
  estado(data)
}

const filtrarInformacion = (listaUsuarios, busqueda) => {
  return busqueda !== "" ? listaUsuarios.filter((usuario) => usuario.name.spanish.toLowerCase().includes(busqueda.toLowerCase())) : listaUsuarios
}

const cargarCards = (cardsFiltradas) => {
  return (
    cardsFiltradas === null 
      ? //true
        <img 
          src="https://web.archive.org/web/20091026205842/http://www.geocities.com/bathgatebirdsofprey/Flight.gif" alt="Foto de ave volando de izquierda a derecha" 
        /> 

      : //false
        cardsFiltradas.map((user, index) => {
          return (
            index < 5 && (
              <Card key={user.uid} variant="dark" bg="dark" className="bird-card">
                <Card.Img variant="top" src={user.images.main} />
                <Card.Body className="birds-card-body">
                  <Card.Title>{user.name.spanish}</Card.Title>
                  <hr/>
                  <Card.Subtitle className="mb-2 text-muted">{user.name.latin}</Card.Subtitle>
                </Card.Body>
              </Card>
            )
          )
        })
      )
}

export {
  consultarInformacion,
  filtrarInformacion,
  cargarCards
}