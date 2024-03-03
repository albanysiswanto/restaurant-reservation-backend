// app.js
const express = require('express');
const bodyParser = require('body-parser');
const Table = require('./tableModel');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/tables', (req, res) => {
  Table.getAllTables((err, tables) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(tables);
    }
  });
});

app.post('/reserve', (req, res) => {
  const { tableId, customerName } = req.body;
  Table.reserveTable(tableId, customerName, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Meja berhasil dipesan' });
    }
  });
});

app.post('/release', (req, res) => {
  const { tableId } = req.body;
  Table.releaseTable(tableId, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Meja berhasil dikosongkan' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
