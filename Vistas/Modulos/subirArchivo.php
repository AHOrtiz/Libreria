<?php
$dir ="fotos/";
$destino = $dir . basename($_FILES["btnImg1"]["name"]);
if(move_uploaded_file($_FILES["btnImg1"]["tmp_name"],$destino)){
    $jsonAnswer =array ('respPHP'=>'El archivo'. basename($_FILES["btnImg1"]["name"])."ha sido subido");
    echo json_encode($jsonAnswer);
}else {
    $jsonAnswer =array(respPHP => "Error No se pudo subir el archivo");
    echo json_encode($jsonAnswer);
}

?>