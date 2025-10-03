import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUsuario extends Document {
  _id: string; // necessário para uso em views
  username: string;
  password?: string; // não será retornada
  tipo: "tecnico" | "gerente" | "admin";
  comparePassword(userPassword: string): Promise<boolean>;
}

// Schema do MongoDB
const UsuarioSchema: Schema<IUsuario> = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  tipo: { type: String, enum: ["tecnico", "gerente", "admin"], required: true },
});

// Middleware para criptografar senha
UsuarioSchema.pre<IUsuario>("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error("Erro desconhecido ao criptografar a senha."));
    }
  }
});

// Método para comparar senha
UsuarioSchema.methods.comparePassword = function (
  userPassword: string
): Promise<boolean> {
  return bcrypt.compare(userPassword, this.password ?? "");
};

// Exporta o modelo
const Usuario: Model<IUsuario> =
  mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;
