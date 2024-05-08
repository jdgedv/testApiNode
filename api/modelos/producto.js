// cod_cat existente, 
// cod_producto: max 15, unico
// nombre: máxima es de 50 y mínima de 4

var productoModel = {}

productoModel.validaParams = function(post, callback) {
    console.log("productoModel post.cod_cat ",post.cod_cat)

    var existeCat = categorias.findIndex((item) => item.cod_cat == post.cod_cat)
    if(existeCat== -1){
        return callback({state: false, mensaje: 'La categoria ingresada no existe'})
    }else{
                  
        var existeCod_producto = productos.findIndex((item) => item.cod_producto == post.cod_producto)
        if(existeCod_producto != -1){
            return callback({state: false, mensaje: 'El código de producto debe ser único'});
        }

        if(post.cod_producto.length>15 || post.cod_producto.length<1){
            return callback({state: false, mensaje: 'El código de producto tiene un máximo de 15 caracteres'});
        }

        const regex = new RegExp(/^[a-zA-Z0-9 ]+$/);

        // Texto a validar
        const texto = post.cod_producto; // Aquí debes colocar el texto que deseas validar
console.log(texto);
        // Validar si el texto contiene solo números
        const esValido = regex.test(texto);

        if (!esValido) {
            return callback({state: false, mensaje: 'El código de producto solo puede contener letras y/o números.'});
        } 

        if(post.nombre.length>50 || post.nombre.length<4){
            return callback({state: false, mensaje: 'El nombre de producto debe tener entre 4 y 50 caracteres'})
        }

        return callback({state: true});

    }
    
}

productoModel.existeProducto = function(post, callback) {
    var existe = productos.findIndex((item) => item.nombre == post.nombre)
    if(existe== -1){
        return callback({state: false})
    }else{
        return callback({state: true})
    }

}

module.exports.productos = productoModel
