 
document.querySelector('#btnLogin').addEventListener('click', crearSesion);



function crearSesion(e){
    e.preventDefault();
    let ban=false;

    let correo=document.querySelector('#emailUsuario').value;
    let pass=document.querySelector('#pass').value;
    console.log(correo);
    console.log(pass);
    let lista=JSON.parse(localStorage.getItem('listaDeUsuario'));
       
    lista.forEach(function(usu){
        if(usu.correo==correo && usu.pass==pass){ 
            console.log("usuario",usu);
            sessionStorage.setItem('sesionUsu',JSON.stringify(usu));
            ban=true;
            
        }
    })
    if(!ban){
        swal({
            title: "email o password!",
            text:" !INCORRECTOS¡",         
            button: "continuar"
        });
    }else{
        ban=false;
        swal({
            title: "Bienvenido!♥",
            text:" !HAS INICIADO SESION♣¡",         
            button: "continuar"
        });
        setTimeout(function(){
            window.location.href='index.php'
        },3000);
    }
}



