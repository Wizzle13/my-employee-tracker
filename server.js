const express = require('express');
const db = require('./db/connection');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// starts the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});