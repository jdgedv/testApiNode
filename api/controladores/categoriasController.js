categoriasModel = require('../modelos/categoria').categorias;

var categoriasController = {}

categoriasController.getCategorias = function(res){
    res.json({ resultado: categorias });
}

categoriasController.saveCategoria = function(req,res){

    const categoria = {'cod_cat':req.body.cod_cat,'nombre':req.body.nombre,'estado':req.body.estado};


    categoriasModel.existeCategoria(categoria, function(resultado){

            categoriasModel.validaParams(categoria, function(result){
                if(!result.state) {
                    res.json({ mensaje:result.mensaje });
                    return false;
                }else{
                    if(resultado.state){
                        res.json({ mensaje: 'La categoria ya existe, no se puede volver a registrar' });
                        return false;
                    }
                    categorias.push(categoria);
                    res.json({ mensaje:"La categoría fue registrada" });
                    return false;
                }
                
            });

    });

    

    
    
    

}


module.exports.categorias = categoriasController;