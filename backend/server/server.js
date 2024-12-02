const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

