//criar a rota api de login

import { autenticaUsuario } from "@/controllers/UsuarioController";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";

export async function POST(req: Request){
    try {
        const{username, password} = await req.json();
        // validar os dados 
        if(!username || !password){
            return NextResponse.json({success:false, error: "Usuário e Senha são Obrigatórios"});
        }
        // método de autenticação
        const usuario = await autenticaUsuario(username, password);
        if(!usuario){
            return NextResponse.json({success:false, error: "Usuário ou Senha inválidos"});
        }
        // criar o Token JWT
        const token = jwt.sign(
            {id: usuario._id, username: usuario.username, tipo: usuario.tipo},
            JWT_SECRET,
            { expiresIn: "1h"}
        );
        //retornar o token
        return NextResponse.json({
            success: true, 
            token, 
            usuario: {
                id: usuario.id, 
                username: usuario.username, 
                tipo: usuario.tipo
            }});
    } catch (error) {
        return NextResponse.json({success:false, error: error}); 
    }
}
