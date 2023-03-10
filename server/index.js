const { response } = require('express');
const express = require('express');
const app = express();
const port = 3001;

const vaccination_model = require('./vaccination_model');

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/data', (req, res) => {
    vaccination_model.getData()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.post('/vote', (req, res) => {
    vaccination_model.insertData(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
})

// route to get counts of vaccinated and unvaccinated people in the database against age
app.get('/counts', (req, res) => {
  const par = req.query.is_vaccinated;
    vaccination_model.getCounts(par)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
  });
})



// route to get counts of vaccinated and unvaccinated people in the database against age and gender
app.get('/results', (req, res) => {
    vaccination_model.getGenderwiseCounts()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
  });
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
