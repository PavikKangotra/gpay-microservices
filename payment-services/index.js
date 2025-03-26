require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", paymentRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Payment Service Connected to DB"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));
