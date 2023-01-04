import React, { useState } from 'react'

export const BuscadorComponents = ({ listadoState, setListadoState }) => {
    const [busqueda, setBusqueda] = useState('');
    const[noEncontrado,setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        setBusqueda(e.target.value);
        let pelies_encontradas = listadoState.filter(movie => {
            return movie.title.toLowerCase().includes(busqueda.toLowerCase());
        });
        if (busqueda.length <= 1 || pelies_encontradas <=0) {
            pelies_encontradas = JSON.parse(localStorage.getItem("movie"));
            setNoEncontrado(true);
        }else{
            setNoEncontrado(false);
        }
        setListadoState(pelies_encontradas);
    }
    return (
        <div>
            <div className="search">
                <h3 className="title">Buscador : {busqueda}</h3>
                {(noEncontrado === true && busqueda.length > 1) &&(
                <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
                )}
                <form>
                    <input type="text" id="search_field" name='busqueda' autoCapitalize='off' value={busqueda} onChange={buscarPeli} />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </div>
    );
}
