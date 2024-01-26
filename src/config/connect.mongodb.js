"use strict";
import mongoose from "mongoose";
import os from "os";
import process from "process";

const overLoadServer = () => {
    setInterval(() => {
        // * const numConnect
        const numConnect = mongoose.connections.length;
        // * num core
        const numCore = os.cpus().length;
        // * max core
        const maxCore = numCore * 5;
        // * memory Usage
        const memoryUsage = process.memoryUsage().rss;
        console.log(
            `Memory Usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`
        );
        if (numConnect > maxCore) {
            console.log(`Server OverLoad !!!`);
        }
    }, 5000);
};

export { overLoadServer };
