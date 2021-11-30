const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/tetris", (req, res) => {
  res.status(200).send('Success')
})

app.post("/tetris", (req,res) => {
    console.log(req.body);
    res.status(200).send('post was hit');
  })

app.listen (4004, () => {
    console.log(`we are running on 4004`);
  })