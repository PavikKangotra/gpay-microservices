const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); 

const USER_SERVICE_URL = "http://localhost:8000/api/users"; 
const PAYMENT_SERVICE_URL = "http://localhost:3000/api/transactions"; 


app.get("/users", async (req, res) => {
  try {
    const { data } = await axios.get(USER_SERVICE_URL);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


app.get("/transactions", async (req, res) => {
  try {
    const { data } = await axios.get(PAYMENT_SERVICE_URL);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

app.listen(9000, () => console.log("Server running on http://localhost:9000"));
