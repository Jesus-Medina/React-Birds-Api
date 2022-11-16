import "../stylesheets/CardComponent.css"

function CardComponent({ cargarCards }) {
  return (
    <div className="birds-container">
      { cargarCards }
    </div>
  )
}
export default CardComponent