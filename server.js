const express = require("express");
const app = express();
const { connectDB } = require("./config/db");
const PORT = process.env.PORT || 5000;
const State = require("./models/cityModel");
const { Op } = require("sequelize");
const cors = require("cors");
const path = require("path");

connectDB();

const indexHtml = path.join(__dirname, "public", "index.html");
const staticFilesPath = path.join(__dirname, "public");

app.use(express.static(staticFilesPath));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(indexHtml);
});

app.get("/states/:index/:num", async (req, res) => {
  const num = +req.params.num;
  const index = +req.params.index;
  const states = await State.findAll({
    where: {
      id: {
        [Op.gt]: index,
      },
    },
    limit: num,
  });
  res.json(states);
});

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  await State.sync({ alter: true });
});
