const express = require("express");
const userRouter = require('./user_routing')
const app = express();
app.use("/", userRouter)
app.listen(() => {
    console.log("running at https://localhost:" + 5000);
})