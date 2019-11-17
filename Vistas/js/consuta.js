import { libro } from "./libro.js";
document.getElementById("btn-mostrar").addEventListener('click', consulta);

let listaLibros;
let arrelgoLibros = new Array;

function consulta(e) {
    e.preventDefault();

    arrelgoLibros = JSON.parse(localStorage.getItem('listaDeLibros'));
    localStorage.setItem('listaDeLibros', JSON.stringify(arrelgoLibros));

    listaLibros = "<tr><td>Clave libro</td><td>Titulo</td><td>Edicion</td><td>Autores</td><td>Editoriales</td><td>idioma</td><td>Foto de portada</td><td>Fecha de adquisicion</td><td>Costo</td><td>Cantidad adquirida</td><td>estatus</td><td>Descripcion</td><td>total</td></tr>";

    for (let x = 0; x < arrelgoLibros.length; x++) {
        listaLibros += "<tr>";
        let miLibro = arrelgoLibros[x];
        listaLibros += "<td>" + miLibro.id + "</td><td>" + miLibro.titulo + "</td><td>" + miLibro.Edicion + "</td><td>" + miLibro.NombreAutor + "</td><td>" + miLibro.Editorial + "</td><td>" + miLibro.Idioma + "</td><td> <img class='img-tamaño' src='./Vistas/img/" + miLibro.foto + "'/> </td><td>" + miLibro.FechaAdquisicion + "</td><td>" + miLibro.Costo + "</td><td>" + miLibro.CantidadAdquirida + "</td><td>" + miLibro.Estatus + "</td><td>" + miLibro.Descripcion + "</td><td>" + miLibro.precio + "</td></tr>";
    }

    document.getElementById("tablaLibros").innerHTML = listaLibros;

}