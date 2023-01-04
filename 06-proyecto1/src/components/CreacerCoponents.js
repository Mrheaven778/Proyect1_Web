import React, { useState } from 'react'
import { SafeInStorage } from '../helpers/SafeInStorage';

const CreacerCoponents = ({ setListadoState }) => {
    const title = "Añadir pelicula";
    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    });
    const getDataForm = (e) => {
        e.preventDefault();
        // let target = e.target;
        // Conseguir datos del formulario
        let title = e.target.title.value;
        let description = e.target.description.value;
        // Crear un obj de la pelicula 
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }
        //guardar estado
        setMovieState(movie);

        //actualizar el estado del lisatado
        setListadoState(item => {
            return [...item, movie]
        });

        // Guardar en el almacenamiento local
        SafeInStorage('movie', movie);


    }


    return (
        <div>
            <div className="add">
                <h3 className="title">{title}</h3>
                {(movieState.title !== '' && movieState.description !== '') &&
                    <strong id='addmovie'>
                        {(movieState.title && movieState.description) && "Has creado la pelicula: " + movieState.title}
                    </strong>
                }
                <form onSubmit={getDataForm}>
                    <input type="text" id="title" name='title' placeholder="Titulo" />
                    <textarea id="description" name='description' placeholder="Descripción"></textarea>
                    <input type="submit" id="save" name='save' value="Guardar" />
                </form>
            </div>
        </div>
    );
}

export default CreacerCoponents
