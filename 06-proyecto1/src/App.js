import { useState } from "react";
import { BuscadorComponents } from "./components/BuscadorComponents";
import CreacerCoponents from "./components/CreacerCoponents";
import { ListadoComponents } from "./components/ListadoComponents";
import { NavComponents } from "./components/NavComponents";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="App">
      <div className="layout">
        {/* <!--Cabecera--> */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>MisPelis</h1>
        </header>

        {/* <!--Barra de navegación--> */}
        <nav className="nav">
          <NavComponents />
        </nav>

        {/* <!--Contenido principal--> */}
        <section id="content" className="content">

          {/* <!--aqui van las peliculas--> */}
          <ListadoComponents listadoState={listadoState} setListadoState={setListadoState} />
        </section>

        {/* <!--Barra lateral--> */}
        <aside className="lateral">
          <BuscadorComponents listadoState={listadoState} setListadoState={setListadoState}/>
          <CreacerCoponents setListadoState={setListadoState} />
        </aside>

        {/* <!--Pie de página--> */}
        <footer className="footer">
          &copy; Sergio Abrodes <a href="https://github.com/Mrheaven778">My Github</a>
        </footer>

      </div>
    </div>
  );
}

export default App;
