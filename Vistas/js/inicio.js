import { libro } from "./libro.js";
import { Usuarios } from "./Usuarios.js";
import { carrito } from "./carrito.js";

let arreglosLibros = new Array();
let listaLibros = new Array();


var miLibro_1 = new libro("1", "El principito", "2", "ANTOINE DE SAINT-EXUPERY", "porrua", "español", "principito.jpg", "2019-08-15", "50", "1", "vigente", "");
var miLibro_2 = new libro("2", "El sexto sol", "4", "J.L. Murra", "Porrua", "español", "sol.jpg", "2019-08-15", "50", "2", "vigente", "");
var miLibro_3 = new libro("2", "El sexto sol", "4", "J.L. Murra", "Porrua", "español", "sol.jpg", "2019-08-15", "50", "2", "vigente", "");

//console.log(miProd1);

arreglosLibros.push(miLibro_1);
arreglosLibros.push(miLibro_2);
arreglosLibros.push(miLibro_3);

console.log(arreglosLibros);
let listaProductos;


document.addEventListener('DOMContentLoaded', Mostrar);
document.querySelector('#lista').addEventListener('click', addCarrito);

function Mostrar(e) {
    e.preventDefault();
    crearListaUsuario();

    if (localStorage.getItem("listaDeLibros") == null) {
        guardarLocalStorage();
    }
    listaLibros = ObtenerListaLibrosLocalStorage();
    let stringlist = "";

    listaLibros.forEach(function(libro) {
        console.log(libro);

        stringlist += '<div class="col-lg-3">';
        stringlist += '<div class="card" style="width: 18rem;">';
        stringlist += '<img class="card-img-top"  width="100" height="120"  src="Vistas/img/' + libro.foto + '"alt="Card image cap">';
        stringlist += '<div class="card-body">';
        stringlist += '<h3 class="card-title">' + libro.titulo + '</h3>';
        stringlist += '<p class="card-text">' + libro.Costo + '</p>';
        stringlist += '<a href="#" class="addCar">Agrega al carrito</a>';
        stringlist += '</div></div></div></div>';
    });

    let controlLista = document.getElementById("lista");
    if (controlLista != null) {
        document.getElementById("lista").innerHTML = stringlist;
    }
    console.log(listaLibros);

}

function guardarLocalStorage() {
    localStorage.setItem('listaDeLibros', JSON.stringify(arreglosLibros));
}

function ObtenerListaLibrosLocalStorage() {
    let lista = new Array();
    lista = JSON.parse(localStorage.getItem('listaDeLibros'));
    return lista;
}


function addCarrito(e) {
    e.preventDefault();
    console.log("add car");
    //console.log("clases")
    if (e.target.classList.contains('addCar')) {
        const contenedor = e.target.parentElement;
        console.log("obtiene el contador padre del link seleccionado", contenedor);
        //  //obtiene la clave del producto 
        let cvePro = contenedor.querySelector('#txtIdProd').value;
        console.log("clave selected:", cvePro);
        //busca el producto seleccionado en la lista de productos alm,acenados
        //y recupera todop 
        buscarProd(cvePro)
        let miUsuarioLogueado = JSON.parse(sessionStorage.getItem('sesionUsu'));
        console.log("sesion", miUsuarioLogueado);
        let cveUsu = miUsuarioLogueado.id;
        let idCar = 1;
        let cant = 1

        let fechNow = new Date();
        let fe = fechNow.getDate() + "/" + (fechNow.getMonth() + 1) + "/" + fechNow.getFullYear();
        let miCarrito = new carrito(idCar, cveUsu, cant, fe, listaProdCar);
        let arreCarritos = new Array();

        arreCarritos.unshift(miCarrito);
        console.log(arreCarritos)
        localStorage.setItem('carritoUsu', JSON.stringify(miCarrito));

    }
}

let listaProdCar = new Array();

function buscarProd(cvePro) {
    let cadena = "";

    //obtiene todo la lista de prod 
    let lista2 = JSON.parse(localStorage.getItem('listaDeLibros'));

    //busca el producto que tiene la clave del producto 
    //y lo almacena en la lista de productos del carrito 
    lista2.forEach(function(libro) {
        if (cvePro == libro.id) {
            listaProdCar.unshift(libro);
            console.log("producto agregado", libro);

            swal({
                title: "Producto agregado al carrito!",
                text: " !GRACIAS POR SU COMPRA¡",
                icon: "sucess",
                button: "continuar"
            });
        }
    })

    localStorage.setItem('listaCarro', listaProdCar);
    localStorage.setItem('listaCar', JSON.stringify(listaProdCar));
}

// function mostrarObjetos() {

//     listaProductos = "<tr><td>Clave</td><td>Nombre</td><td>Costo</td><td>Marca</td><td>Fecha Adquisicion</td><td>Foto</td></tr>";
//     for (let x = 0; x < arreglosProductos.length; x++) {
//         listaProductos += "<tr>";
//         let miProdu = arreglosProductos[x];
//         listaProductos += "<td>" + miProdu.id + "</td><td>" + miProdu.nombre + "</td><td>" + miProdu.costo + "</td><td>" + miProdu.marca + "</td><td>" + miProdu.FechaAdquisicion + "</td><td>" + miProdu.foto + "</td>";
//     }
//     document.getElementById("lista").innerHTML = listaProductos;
// }

// let list = "";s

function crearListaUsuario() {
    let ArregloUsuarios = new Array();
    let miusu = new Usuarios("1", "Usuario1@gmail.com", "1234", "comp"),
        us2 = new Usuarios("2", "Usuario2@gmail.com", "12345", "adm"),
        us3 = new Usuarios("3", "Usuario3@gmail.com", "12346", "ger");

    ArregloUsuarios.push(miusu);
    ArregloUsuarios.push(us2);
    ArregloUsuarios.push(us3);
    if (localStorage.getItem('listaDeUsuario') == null) {
        localStorage.setItem('listaDeUsuario', JSON.stringify(ArregloUsuarios));
    }

}