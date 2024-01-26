"use strict";

const genatorChar = () => {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < 5; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
};

export { genatorChar };
