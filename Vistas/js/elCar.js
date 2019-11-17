//import { carrito } from "./carrito";

document.addEventListener('DOMContentLoaded', mostrar);

function mostrar(){
    let car=JSON.parse(localStorage.getItem('carritoUsu'));
    let datos=document.createElement('p');
    datos.innerText="clave:"+"  "+car.idcar+"  "+"fecha:"+" "+car.fechaCompra;
   let d= document.getElementById('datosCar');
   d.appendChild(datos);

   let lista=car.listaProductos;

   lista.forEach(function(a) {
       let renglon=document.createElement('tr');
       let tabla=document.getElementById("tablaPila");
       tabla.appendChild(renglon);
       let celda=document.createElement('td');
       let miSpan=document.createElement('span');
       miSpan.innerText=a.id;
       celda.appendChild(miSpan);
       renglon.appendChild(celda);
    //    
    let celda1=document.createElement('td');
       let miSpan1=document.createElement('span');
       miSpan1.innerText=a.nombre;
       celda1.appendChild(miSpan1);
       renglon.appendChild(celda1);
    //    
    let celda2=document.createElement('td');
       let miSpan2=document.createElement('span');
       miSpan2.innerText=a.marca;
       celda2.appendChild(miSpan2);
       renglon.appendChild(celda2);

       let celda3=document.createElement('td');
       let miSpan3=document.createElement('span');
       miSpan3.innerText=a.precio;
       celda3.appendChild(miSpan3);
       renglon.appendChild(celda3);
       
   });
}