//cod_cat: maximo 5 caracteres, solo números, y es un campo obligatorio, 
//nombre: obligatorio, máximo 50 caracteres, mínimo 3 caracteres, 
//estado: solo acepta valores True o False y es un campo obligatorio

var categoriaModel ={}

categoriaModel.validaParams = function(post, callback) {
    console.log("categoriaModel post.cod_cat ",post.estado.toString())
    if(!post.cod_cat || post.cod_cat == '' || Number(post.cod_cat) == 0){
        return callback({state: false, mensaje: 'El código de categoría no puede ser nulo o vacío'})
    }
    else if(post.cod_cat.length>5 || post.cod_cat.length<3){
        return callback({state: false, mensaje: 'El código de categoría debe tener entre 3 y 5 caracteres'})
    }else if(isNaN(post.cod_cat)){
        return callback({state: false, mensaje: 'El código de categoría debe ser un número'});
    }

    if(!post.nombre || post.nombre == ''){
        return callback({state: false, mensaje: 'El nombre de categoría es obligatorio'})
    }
    else if(post.nombre.length>50 || post.nombre.length<3){
        return callback({state: false, mensaje: 'El nombre de categoría debe tener entre 3 y 50 caracteres'})
    }

    if(!post.estado || post.estado == ''){
        return callback({state: false, mensaje: 'El estado de la categoría es obligatorio'})
    }
    else if(post.estado.toString()!='true' && post.estado.toString()!='false'){
        return callback({state: false, mensaje: 'El estado de la categoría solo puede ser true o false'})
    }


    return callback({state: true});

}

categoriaModel.existeCategoria = function(post, callback) {
    var existe = categorias.findIndex((item) => item.cod_cat == post.cod_cat || item.nombre == post.nombre)
    if(existe== -1){
        return callback({state: false})
    }else{
        return callback({state: true})
    }

}

module.exports.categorias = categoriaModel