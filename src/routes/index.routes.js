"use strict";
import urlRouter from "./url/url.routes.js";

function routes(app) {
    app.use("/", urlRouter);
}

export default routes;
