"use strict";
import express from "express";
const router = express.Router();
import UrlController from "../../controllers/url.controller.js";

router.get("/:shortUrl", UrlController.getUrl);

router.post("/", UrlController.setUrls);

export default router;
