const express = require("express");
const consign = require("consign");

const app = express();

consign()
    .include("models")
    .then( "libs/midlewares.js" )
    .then( "routes" )
    .then( "libs/boot.js" )
    .into(app);


