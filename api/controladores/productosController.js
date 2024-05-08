productoModel = require('../modelos/producto').productos;
var productosController = {}

productosController.getProductos = function(res){
    res.json({ resultado: productos });
}

productosController.saveProducto = function(req,res){

    const producto = {'cod_cat':req.body.cod_cat,'cod_producto':req.body.cod_producto,'nombre':req.body.nombre};


    productoModel.existeProducto(producto, function(resultado){
        if(resultado.state){
            res.json({ mensaje: 'El producto ya existe, no se puede volver a registrar' });
            return false;
        } else {
            productoModel.validaParams(producto, function(result){
                if(!result.state) {
                    res.json({ mensaje:result.mensaje });
                    return false;
                }else{
                    productos.push(producto);
                    res.json({ mensaje:"El producto fue registrado" });
                    return false;
                }
                
            });
        }
    });


}


module.exports.productos = productosController;