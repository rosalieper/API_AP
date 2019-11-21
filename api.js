const express = require("express");
const consign = require("consign");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.json({ status: "NTask API" }));

consign()
    .include("routes")
    .into(app);

app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));

