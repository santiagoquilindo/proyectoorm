const { Usuario } = require("../models");

class UsuarioService {
    static async listarUsuarios() {
        try {
            return await Usuario.findALL();
        } catch {
            console.log("error en el servidor")
        }

    }
    static async crearUsuario(nombre, correo, contrasena) {
        try {
            return await Usuario.create({ nombre, Usuario, contrasena })
        } catch (e) {
            console.log("error en el servidor al guardar");
        }
    }
    static async buscarUsuario(){
        
        try{
            return await Usuario.findOne({wwere:{correo}})

        }catch (e){
            console.log("error en el servicio buscar")
        }

    }
    static async eliminarUsuario(id){
        try{
            let resultadoB =await Usuario.destroy({where: {id}});
            return "eliminado correctamente";
            

        }catch (e){
            console.log("error en en el servicio al eliminar")

        }

    }
    static async actualizarUsuario(id,datos) {
        try {
            return await Usuario.update(datos, { where: { id } });
        } catch (e) {
            console.log("error en el servicio al actualizar");
        }

    }
}
module.exports = UsuarioService