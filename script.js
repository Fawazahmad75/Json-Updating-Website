const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const id = req.body.id;
  const firstName = req.body.firstName;
  const Age = req.body.Age;

  const jsonData = {
    id: id,
    firstName: firstName,
    Age: Age
  };

  const jsonString = JSON.stringify(jsonData, null, 2);

  fs.writeFile('./data.json', jsonString, 'utf8', (err) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error occurred while writing to file');
    } else {
      console.log('Data written to file');
      res.send('Data written to file');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

  const jsonData = {
    name: name,
    age: age
  };

  const jsonString = JSON.stringify(jsonData, null, 2);

  fs.writeFile('./data.json', jsonString, 'utf8', (err) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error occurred while writing to file');
    } else {
      console.log('Data written to file');
      res.send('Data written to file');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});