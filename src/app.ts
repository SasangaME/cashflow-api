import express from 'express';

const app = express();
const port = 3000;
const message = "Hello World";

app.get('/', (req, res) => {
    res.send(`${message}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});