const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());
// Endpoint to Get Data
app.get('/api/data', (req, res) => {
  fs.readFile('mydata.json', 'utf8', (err, jsonData) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      res.send(JSON.parse(jsonData));
    }
  });
});

// Endpoint to Update Data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  fs.writeFile('data.json', JSON.stringify(newData, null, 2), 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error saving data');
    } else {
      res.send('Data updated successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});