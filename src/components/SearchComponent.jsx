import "../stylesheets/SearchComponent.css"

function SearchComponent({ inputBusqueda, setInputBusqueda }) {
  return (
    <div className="search-container">
      <input
        className="shadow-lg"
        type="text"
        placeholder="Buscar aves de Chile"
        value={inputBusqueda}
        onChange={(e) => setInputBusqueda(e.target.value)}
      />

      <img className="search-icon" src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" alt="search icon" />
    </div>
  )
}

export default SearchComponent;
