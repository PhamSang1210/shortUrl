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
        console.log("🚀 ~ UrlService ~ setUrlshort ~ url:", url);
        //
        const longUrl = url.longUrl;
        // eslint-disable-next-line no-unused-vars
        const shortUrls = url?.shortUrl;
        console.log("🚀 ~ UrlService ~ setUrlshort ~ shortUrls:", shortUrls);

        const basicUrl = await urlModel.create({
            "url.longUrl": longUrl,
            "url.shortUrl": shortUrls
                ? " https://url-fi2d.onrender.com/" + shortUrls
                : "https://url-fi2d.onrender.com/" + genatorChar(),
        });

        return basicUrl;
    }
}

export default UrlService;
