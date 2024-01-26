"use strict";
import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    url: {
        longUrl: {
            type: String,
        },
        shortUrl: {
            type: String,
            uniqued: true,
            default: null,
        },
    },
    countClick: { type: Number, default: 0 },
});

export default model("URL_SHORT", urlSchema);
