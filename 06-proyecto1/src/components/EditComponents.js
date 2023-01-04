import React from 'react'

const EditComponents = ({ movie, getMovie, setEdit, setListadoState }) => {
    let title_component = "Editar Pelicula";
    const safeEdit = (e, id) => {
        e.preventDefault();
        // datos del form
        let target = e.target;
        // el id de la pelicula a actualizar 
        const movie_safe = getMovie();
        const index = movie_safe.findIndex(movie => movie.id === id);
        //crear el obj con el indice 
        let movie = {
            id,
            title: target.title.value,
            description: target.description.value
        };
        // actualizar el elemenoto con ese indice 
        movie_safe[index] = movie;

        // Guarda en el local Sotrage
        localStorage.setItem("movie",JSON.stringify(movie_safe));
        // actualizar el estado
        setListadoState(movie_safe);
        setEdit(0);
    }
    return (
        <div className='edit_form'>
            <h3 className='title'>{title_component}: {movie.title}</h3>
            <form action=""
                onSubmit={e => safeEdit(e, movie.id)}>
                <input type="text" name='title' className='title_edit' defaultValue={movie.title} />
                <textarea name="description" defaultValue={movie.description} className='description_edit' id="" cols="30" rows="10"></textarea>
                <input type="submit" className='edit' value="Actualizar" />
            </form>
        </div>
    )
}

export default EditComponents
