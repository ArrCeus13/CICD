const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200), send("Arriza Fajar Zhafar Yasar");
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => console.log(`App listening on port ${port}`));
}
