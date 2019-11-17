export class libro {

    constructor(id, titu, edicion, nomAutor, editorial, idioma, Foto, fechaAd, costo, cantiAndquirida, status, descripcion) {
        this.id = id;
        this.titulo = titu;
        this.Edicion = edicion;
        this.NombreAutor = nomAutor;
        this.Editorial = editorial;
        this.Idioma = idioma;
        this.foto = Foto;
        this.FechaAdquisicion = fechaAd;
        this.Costo = costo;
        this.CantidadAdquirida = cantiAndquirida;
        this.Estatus = status;
        this.Descripcion = descripcion;
        this.precio = 0;
        this.calcularPrecio();
    }
    calcularPrecio() {
        let resultado = 0;

        this.precio = this.CantidadAdquirida * this.Costo;

        if (this.Editorial == 'Planeta') {
            resultado = this.precio - (this.precio * .04);
            this.precio = resultado;
        } else if (this.Editorial == 'Mc-Graw-Hill') {
            resultado = this.precio - (this.precio * .06);
            this.precio = resultado;
        }
        // resultado = this.precio * this.cantiAndquirida * this.costo;

    }

}