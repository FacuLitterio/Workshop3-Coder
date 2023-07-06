import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./util.js";
//Cookies si aplica:
import cookieParser from "cookie-parser";
//Passport imports
import passport from "passport";
import config from "./config/config.js";
import initializePassport from "./config/passport.config.js";

//Routers a importar:
import { addLogger } from "./config/logger.js";
import MongoDBSingleton from "./config/mongodb-singleton.js";
import coursesRouter from "./routes/courses.router.js";
import jwtRouter from "./routes/jwt.router.js";
import studentRouter from "./routes/students.router.js";
import usersViewRouter from "./routes/users.view.router.js";
import viewsRouter from "./routes/views.router.js";

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Template engine
 */
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

//(Solo si usar Cookies): inicializar el cookie parser.
app.use(cookieParser("CoderS3cr3tC0d3"));
//Inicializar passport:
initializePassport();
app.use(passport.initialize());

//Declaración de Routers:
app.use("/", viewsRouter);
app.use("/api/students", addLogger, studentRouter);
app.use("/api/courses", addLogger, coursesRouter);
app.use("/users", addLogger, usersViewRouter);
app.use("/api/jwt", jwtRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
  console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

new MongoDBSingleton();
