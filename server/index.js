require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const { PORT, CONNECTION_STRING } = process.env;
const ctrl = require('./controller/controller')
app.use(express.json());

//massive accessibility
massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  app.listen(PORT, () => {
    console.log(`Grinding ${PORT}`);
  });
});

//endpoints
app.get('/api/houses')
app.post('/api/houses',ctrl.addToHouses)
app.delete('/api/houses/:id',ctrl.deleteHouses)
