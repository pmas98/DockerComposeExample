const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
