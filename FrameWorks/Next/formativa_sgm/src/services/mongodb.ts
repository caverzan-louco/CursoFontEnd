import mongoose, { Mongoose } from "mongoose";

// Componente responsável por estabelecer a conexão com o MongoDB
const MONGO_URI = process.env.DATABASE_URL as string;

// Verifica se a variável de ambiente foi definida
if (!MONGO_URI) {
  throw new Error("Crie o arquivo .env.local com a variável DATABASE_URL");
}

// Define o tipo para o cache global
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Usa o cache global para evitar múltiplas conexões
declare global {
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

// Função de conexão com o MongoDB
async function connectMongo(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const options = { bufferCommands: false };
    cached.promise = mongoose.connect(MONGO_URI, options).then((mongooseInstance) => {
      console.log("✅ Conectado ao MongoDB");
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

global.mongoose = cached;

export default connectMongo;
