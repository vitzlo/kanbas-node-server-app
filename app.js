import express from 'express';
import session from "express-session";

import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const FRONTEND_URL = "http://localhost:3000"
// const FRONTEND_URL = "https://radiant-kulfi-63b9ed.netlify.app/"
// const FRONTEND_URL = "https://kanbas-node-server-app-a6-m3tp.onrender.com" // ?????

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/kanbas"
// const CONNECTION_STRING = "mongodb+srv://victor:supersecretpassword@kanbas-cluster.0u5ww1q.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
    origin: FRONTEND_URL,
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (true) { // true ==> NOT DEVELOPMENT
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);