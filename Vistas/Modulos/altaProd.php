

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
    Alta Producto
    </section>
    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">Productos</h3>
        </div>
        <div class="box-body">
        <div>
      <form  id="frmProd">    
          <label for="id">Clave libro</label>
          <input type="text" id="txtid" class="form-control"> <br>
          <label for="nombre">Titulo</label>
          <input type="text" id="txtTitulo" class="form-control"> <br>


          <label for="id">Edicion </label>
          <input type="text" id="txtEdicion" class="form-control"> <br>

          <label for="id">Autores </label>
          <input type="text" id="txtAutor" class="form-control"> <br>
    

         <label >Editoriales</label>
           <select  id="slcEditorial" class="form-control">
            <option>Porrúa</option>
            <option>Trillas</option>
            <option>Santillana</option>
            <option>Planeta</option>
           <option>RA-MA</option>
           <option>Mc-Graw-Hill</option>

          </select> <br>   
    

          <label for="id">Idioma</label>
          <select  id="slcIdioma" class="form-control">
            <option> Ingles</option>          
            <option> Español</option>
            <option> Aleman</option>
         </select><br>

        <label >Foto de portada</label>
        <label id="lblImg"></label>

        <input type="file" name="btnImg" id="btnImg1"  class="form-control-file" >
        <div id="nombreImagen" >
        
        
        </div>
        
       <label >Fecha de adquisicion</label>
        <input type="date" id="idFecha" class="form-control" ><br>
        
        <label >Costo</label>
        <input type="text" id="txtCosto" class="form-control" ><br>       
        

        <label >Cantidad adquirida</label>
        <input type="text" id="txtCantidad" class="form-control" ><br>

        <label for="id">estatus</label>
          <select  id="slcStatus" class="form-control">
            <option> Vigente </option>          
            <option> Descontinuado</option>           
        </select><br>

        <label >Descripcion</label>
        <input type="text" id="txtDescripcion" class="form-control" ><br>

       
        <input type="submit" name="Agregar" id="btn-AgregarProducto" class="btn btn-success" value="Agregar">

 

    <script src="vistas/js/inicio.js" type="module"></script>
    <script src="vistas/js/funcionesProd.js" type="module"></script>

  </form>

</div>
          
        </div>
      </div>
      <!-- -->

     
      <!-- /.box -->
    </section>
    <!-- /.content -->
  </div>
 

