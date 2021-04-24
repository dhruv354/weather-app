const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// const user_id = "admin";
// const password = "123456789";

/**********middlewares ***************************** */
app.use(cors());
app.use(express.json());

/**************request to servers *********** */
app.post("/signin", (req, res) => {
  const { user_id, password } = req.body;
  if (!user_id || !password) {
    res.status(401).json({ error: "please enter all the fields" });
  }
  if (user_id === "admin" && password === "123456789") {
    res.status(200).json({ success: "successfully signedin" });
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});

/***********listening on server ***************/

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server is running on port ${PORT}`);
});
