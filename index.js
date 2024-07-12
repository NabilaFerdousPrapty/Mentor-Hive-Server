const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());


// Middleware
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Mentor Finder API is running...')
    }
)
app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});