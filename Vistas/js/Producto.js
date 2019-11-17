export class Producto{

    constructor(id, nom,  marc,cos,orig,Foto,fechaAd)
    {
        this.id=id;
        this.nombre=nom;       
        this.marca=marc;
        this.costo=cos;
        this.origen=orig;        
        this.foto=Foto;
        this.FechaAdquisicion=fechaAd;
        this.precio=0;
        this.calcularPrecio();

    }
    calcularPrecio(){
        this.precio=Number(this.costo)+(Number(this.costo)*.15);
    }
}