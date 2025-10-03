//Rotas que Precisam do ID ( PATCH ou PUT. DELETE, GET(one))

import { deleteEquipamento, getEquipamentoById, updateEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id:string;
}

//PATCH
export async function PATCH(req: NextRequest, {params}:{params:Promise<Parametro>}){
    try {
        const {id} = await params;
        const data = await req.json();
        const EquipamentoAtualizado = await updateEquipamento(id, data);
        if(!EquipamentoAtualizado){
            return NextResponse.json({success:false, error: "Not Found"});
        }
        return NextResponse.json({success:true, data:EquipamentoAtualizado});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

//GET(one)
export async function GET (req: NextRequest, {params}:{params:Promise<Parametro>}){
    try {
        const {id} = await params;
        const data = await getEquipamentoById(id);
        if(!data){
            return NextResponse.json({success:false, error: "Not Found"});
        }
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

//DELETE
export async function DELETE(req: NextRequest, {params}:{params:Promise<Parametro>}) {
    try {
        const {id} = await params;
        await deleteEquipamento(id);
        return NextResponse.json({success: true, data:{}});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}
