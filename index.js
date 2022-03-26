const express = require("express");
const app = express();
const port = 4000;

app.get("/app", (req, res) => res.send("Hello word!"));

app.listen(port, () => console.log(`Example port ${port}`));
