"use strict";
import UrlService from "../services/url.service.js";

class UrlController {
    static async getUrl(req, res) {
        return res.redirect(await UrlService.getURL(req.params.shortUrl));
    }

    static async setUrls(req, res) {
        return res.status(200).json({
            newData: await UrlService.setUrlshort(req.body),
        });
    }
}

export default UrlController;
