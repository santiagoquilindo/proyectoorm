const express = require('express');
const app = express();
const usuarioRouter = require('./router/usuarioRouter');

const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

app.use("/api", usuarioRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo`);

});

// santiago//
// version1//
