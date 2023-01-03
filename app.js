const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const myDataSource = require("./models/myDataSource");
app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(routes);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

//이니셜라이즈 넣기

const start = async () => {
  myDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been init");
    })
    .catch((err) => {
      console.log("Error occurred during Data Source initalizaion!", err);
      myDataSource.destroy();
    });
  try {
    app.listen(PORT, () => console.log(`서버시작합니다.`));
  } catch (err) {
    console.error(err);
  }
};

start();
