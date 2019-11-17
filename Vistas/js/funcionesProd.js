import { libro } from "./libro.js";
let lisP = new Array();
let bandera = 0

document.getElementById("btn-AgregarProducto").addEventListener('click', AltaProd);
document.getElementById("btnImg1").addEventListener('change', subir);
document.getElementById("txtAutor").addEventListener('blur', validarAutor);
document.getElementById("txtAutor").addEventListener('focus', validarAutor2);

function subir(e) {
    let imagen = this.files[0];
    console.log("Archivos", this.files);
    console.log("Imagen ", imagen);
    console.log('imagen', imagen.type);
    if (imagen.type == "image/jpeg" || imagen.type == "image/png") {
        if (imagen.size <= 2000000) {

            var hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.id = 'txtImagenOculta';
            hiddenInput.value = imagen.name;
            document.getElementById('nombreImagen').appendChild(hiddenInput);
            bandera = 1;
        } else {
            const mensaje = document.createElement('p');
            mensaje.innerText = "El tamaño del archivo NO debe ser mayor de 2MB";
            mensaje.id = 'mensaje';
            mensaje.className = 'mensajeCorrecto';
            mensaje.style.color = '#ff0000';
            let formu = document.getElementById('frmProd');
            formu.insertBefore(mensaje, document.getElementById('lblImg'));
            setTimeout(function() {
                document.getElementById('mensaje').remove();
            }, 9000);
        }
    } else {
        const mensaje = document.createElement('p');
        mensaje.innerText = "El archivo debe ser formato JPG o PNG Seleccione otro archivo";
        mensaje.id = 'mensaje';
        mensaje.className = 'mensajeCorrecto';
        mensaje.style.color = '#ff0000';
        let formu = document.getElementById('frmProd');
        formu.insertBefore(mensaje, document.getElementById('lblImg'));
        setTimeout(function() {
            document.getElementById('mensaje').remove();
        }, 9000);
    }
    return bandera;
}

function SubirArchivo() {

    if (bandera == 1) {
        console.log("Sube el archivo");
        const miForm = document.getElementById('frmProd');
        const cajaImg = document.getElementById('btnImg1');
        const endPoint = "./Vistas/Modulos/subirArchivo.php";
        const miFormData = new FormData();
        console.log(cajaImg.files);
        miFormData.append("btnImg1", cajaImg.files[0]);

        fetch(endPoint, {
                method: "post",
                body: miFormData
            })
            .then(function(res) {
                return res.json()
            })
            .then(function(datos) {
                console.log(datos)
                const mensaje = document.createElement('p');
                mensaje.innerText = JSON.stringify(datos.respPHP);
                mensaje.id = 'mensaje';
                mensaje.className = 'mensajeCorrecto'

                miForm.insertBefore(mensaje, document.getElementById('nombre'));
                setTimeout(function() {

                    document.getElementById('mensaje').remove();
                }, 6000)
            })
            .catch(console.error);
    }
}

function AltaProd(e) {
    e.preventDefault();
    let id = document.getElementById('txtid').value;
    let titulo = document.getElementById('txtTitulo').value;
    let edi = document.getElementById('txtEdicion').value;
    let NombreAu = document.getElementById('txtAutor').value;
    let Editorial = document.getElementById('slcEditorial').value;
    let idioma = document.getElementById('slcIdioma').value;
    let fot = document.getElementById('txtImagenOculta').value;
    let fechaAdquisi = document.getElementById('idFecha').value;
    let costo = document.getElementById('txtCosto').value;
    let cantidadAdquirida = document.getElementById('txtCantidad').value;
    let estatus = document.getElementById('slcStatus').value;
    let descripcion = document.getElementById('txtDescripcion').value;


    if (bandera == 1) {
        let milibro = new libro(id, titulo, edi, NombreAu, Editorial, idioma, fot, fechaAdquisi, costo, cantidadAdquirida, estatus, descripcion);
        console.log(milibro);
        let listaLibros = JSON.parse(localStorage.getItem('listaDeLibros'));
        listaLibros.push(milibro);
        localStorage.setItem('listaDeLibros', JSON.stringify(listaLibros));
        console.log(listaLibros);
        console.log(milibro);
        SubirArchivo();
        swal({
            title: "Producto registrado!",
            text: "y archivo enviado",
            icon: "succes",
            button: "continuar"

        });

    } else {
        console.log("error en los datos");

    }

}