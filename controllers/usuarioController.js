const UsuarioService = require("../services/usuarioServices");
class UsuarioController {
    static async listarUsuarios(req, res,) {
    try {
        let lista = await UsuarioService.listarUsuarios();
        res.json(lista);
    } catch (e) {
        res.json({error:"error en la peticion" })
    }
}

    static async crearUsuario(req, res,) {
        try {
            let {nombre,correo,contrasena}=req.body
        let usuario = await UsuarioService.crearUsuario(nombre,correo,contrasena);
        res.json(usuario);

        } catch (e) {
            res.json({error:"error en la peticion" })
        }
    }
    

    static async eliminarUsuario(req, res) {
        try {
            res.json(await UsuarioService.eliminarUsuario(req.params.id));
            res.json(true);
        } catch {
            res.json({ error: "Error en la petición" });
        }
    }

    static async actualizarUsuario(req, res) {
        try {
            res.json(await UsuarioService.actualizarUsuario(req.params.id, req.body));
        } catch {
            res.json({ error: "Error en la petición" });
        }
    }

    static async buscarUsuario(req, res) {
        try {
            res.json(await UsuarioService.buscarUsuario(req.params.correo));
        } catch {
            res.json({ error: "Error en la petición" });
        }
    }

}



module.exports = UsuarioController;