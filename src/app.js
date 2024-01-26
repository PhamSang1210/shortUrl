"use strict";
import express from "express";
const app = express();
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import instanceDatabase from "./database/init.mongodb.js";
import routes from "./routes/index.routes.js";
// import { overLoadServer } from "./config/connect.mongodb.js";

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// route
routes(app);
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Databae
instanceDatabase;
// overLoadServer();

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        msg: err.message || "Internal Server",
    });
});
export default app;
