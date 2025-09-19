//baser o meu modelo no Schema da Coleção

import mongoose from "mongoose";

export interface IordemDeServico extends mongoose.Document {
    titulo:string;
    status: "aberto" | "em_andamento" | "concluida";
    tipo_de_manutencao: string;}

const TarefaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O Título é obrigaório"],
        trim: true,
        maxlength: [100, "O título < 100 char"]
    },
    status: {
        type: String,
        enum: ['aberto', 'em_andamento', 'concluida'],
        default: 'aberto', // toda ordem criada começa como aberta
    },
    tipo_de_manutencao: {
        type: String,
        required: [true, "O Título é obrigaório"],
    }
});

export default mongoose.models.Tarefa || mongoose.model("Tarefa", TarefaSchema);
// ai esporta o modelo como tarefa caso não exista uma tarefa no banco, 
// casa já exista uma tarefa. 
