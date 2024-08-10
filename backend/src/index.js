"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = require("./app.js");
var connection_js_1 = require("./db/connection.js");
var PORT = process.env.PORT || 3004;
(0, connection_js_1.connectToDatabase)().then(function () {
    // app.get("/hello",(req,res,next)=>{
    //     return res.send("HEYYY");
    // })
    app_js_1.default.listen(3008, function () { return console.log("Server open and conected to database 👍"); });
}).catch(function (err) { return console.log(err); });
