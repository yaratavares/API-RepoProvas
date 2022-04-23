import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./router/index.routes.js";

const app = express();
app.use(cors());
app.use(json());
app.use(router);

export default app;
