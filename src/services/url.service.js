"use strict";
import { genatorChar } from "../helpers/genator.js";
import urlModel from "../model/url.model.js";

class UrlService {
    static async getURL(shortUrl) {
        const targetUrl = await urlModel
            .findOneAndUpdate(
                {
                    "url.shortUrl": shortUrl,
                },
                {
                    $inc: {
                        countClick: 1,
                    },
                }
            )
            .lean();

        const targetLongUrl = targetUrl?.url?.longUrl;
        return targetLongUrl;
    }
    static async setUrlshort(url) {
        //
        const longUrl = url.longUrl;
        // eslint-disable-next-line no-unused-vars
        const shortUrl = url?.shortUrl;

        const basicUrl = await urlModel.create({
            "url.longUrl": longUrl,
            "url.shortUrl":
                "https://url-fi2d.onrender.com/" + shortUrl ||
                "https://url-fi2d.onrender.com/" + genatorChar(),
        });

        return basicUrl;
    }
}

export default UrlService;
