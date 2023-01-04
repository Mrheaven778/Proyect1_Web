/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import EditComponents from './EditComponents';

export const ListadoComponents = ({ listadoState, setListadoState }) => {
    const [edit, setEdite] = useState(0);
    const getMovie = () => {
        let movie = JSON.parse(localStorage.getItem("movie"));
        setListadoState(movie);
        return movie;
    }
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const deleteMovie = (id) => {
        // peliculas almacenadas
        let movie_safe = getMovie();
        //filtramos para eliminar en la array 
        let new_array_movie = movie_safe.filter(movie => movie.id !== parseInt(id));
        // actualizar listado 
        setListadoState(new_array_movie);
        // actualizamos los datos
        localStorage.setItem('movie', JSON.stringify(new_array_movie));
        return new_array_movie;
    }
    return (
        <>
            {listadoState !== null ? listadoState.map(movie => {
                return (
                    <article key={movie.id} className="peli-item">
                        <h3 className="title">{movie.title}</h3>
                        <p className="description">{movie.description}</p>
                        <button className="edit" onClick={() => {
                            setEdite(movie.id)
                        }}>Editar</button>
                        <button className="delete" onClick={() => {
                            deleteMovie(movie.id) 
                        }}>Borrar</button>
                        {/* Form for edit */}
                        {edit == movie.id && (
                            <EditComponents movie={movie} getMovie={getMovie} setEdite={setEdite} setListadoState={setListadoState} />
                        )}
                    </article>
                );
            })
                : <strong id='nocontent'>No hay peliculas</strong>
            }
        </>
    );
}
