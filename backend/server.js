const express = require("express");
const dbConnect = require("./database/index");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
const app = express();
app.use(express.json());
app.use(router);
dbConnect();
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Backend was running on PORT: ${PORT}`);
});
