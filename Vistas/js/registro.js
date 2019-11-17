 import { Usuarios } from "./Usuarios.js";

 document.querySelector('#btnCrearCuenta').addEventListener('click', crearCuenta);

 function crearCuenta(e) {
     e.preventDefault();
     let id = Math.floor(Math.random() * 100) + 1;
     let Correo = document.querySelector('#EmailUsuario').value;
     let Pass = document.querySelector('#PasswordLogin').value;
     console.log(Correo);
     console.log(Pass);
     //  let rol="cliente";        
     //  let correo=document.getElementById('EmailUsuario');
     // let pass=document.getElementById('PasswordLogin');

     let CrearUsu = new Usuarios(9, Correo, Pass, "cliente");
     let listaUsuarios = JSON.parse(localStorage.getItem('listaDeUsuario'));

     listaUsuarios.unshift(CrearUsu);
     localStorage.setItem('listaDeUsuario', JSON.stringify(listaUsuarios));
     swal("Bienvenido", "GRACIAS♥", "success");
     //  let lista=JSON.parse(localStorage.getItem('listaDeProductos'));

 }