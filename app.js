const express = require("express");
const routerUser = require("./Route/routing");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome');
});

app.use('/user', routerUser);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
