const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(port);
console.log(`Running at port ${ port }`);