//baser o meu modelo no Schema da Coleção

import mongoose from "mongoose";

export interface IEquipamento extends mongoose.Document {
    nome: string;
    modelo: string;
    data_de_aquisicao: Date;
}
const EquipamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório"],
        trim: true,
        maxlength: [100, "O nome deve ter menos de 100 caracteres"]
    },
    modelo: {
        type: String,
        required: [true, "O modelo é obrigatorio"],
        trim: true,
    },
    data_de_aquisicao: {
        type: Date,
        required: [true, "A data de aquisição é obrigatória"],
    },
});

export default mongoose.models.Equipamento || mongoose.model("Equipamento", EquipamentoSchema);
// Exporta o modelo como Usuario, caso não exista, cria um novo.
