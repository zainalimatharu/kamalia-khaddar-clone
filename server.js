const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect db
connectDB();

// init middleware
app.use(express.json({ extended: false }));



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
