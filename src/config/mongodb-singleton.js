import mongoose from "mongoose";
import config from "./config.js";

export default class MongoDBSingleton {
  static #instance;

  constructor() {
    this.#connectMongoDB();
  }

  #connectMongoDB = async () => {
    try {
      console.log("Conectado a la DB.");
      return await mongoose.connect(config.mongoUrl);
    } catch (error) {
      console.log("No se pudo conectar la DB. ", error);
      console.log(error.message);
      process.exit();
    }
  };

  static async getInstance() {
    if (this.#instance) {
      return this.#instance;
    }

    this.#instance = await this.#connectMongoDB();
  }
}
