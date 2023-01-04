export const SafeInStorage = (key, element) => {
    // Conseguir los elementos 
    let items = JSON.parse(localStorage.getItem(key));
    // comprobamos si es arry
    if (Array.isArray(items)) {
        // Añadir dentro del array un elemento nuevo
        items.push(element);
    } else {
        //Crear el array con la nueva peli
        items = [element];
    }
    // guaradmos en el almacenamiento local 
    localStorage.setItem(key, JSON.stringify(items));
    // devolver obj 
    return element;
}