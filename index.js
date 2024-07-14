const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to Mongo");
}
main();
const app = express();
const port = 5000;
app.use(cors(
  {
    origin: ["https://newsapp-iota-fawn.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
