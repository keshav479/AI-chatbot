"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appRouter = (0, express_1.Router)();
appRouter.use("/user");
exports.default = appRouter;
