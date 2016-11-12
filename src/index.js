import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});


app.get('/task2A', (req, res) => {
  const sum = (+ req.query.a || 0) + (+req.query.b || 0)
  res.send(sum.toString())
});

app.get('/task2B', (req, res) => {
  var fullname = req.query.fullname
  if (fullname) {
    fullname = fullname.split(' ')
    var counter = fullname.length,
        result = '';
    if (counter > 3) {
      res.send('Invalid fullname')
    }

    var family = fullname[counter-1],
        name = '',
        surname = '';
    if (counter == 3) {
      name = fullname[0]
      surname = fullname[1]
    } else if (counter == 2) {
      name = fullname[0]
    }

    result = family
    if (name) {
      result = result + ' ' + name[0] + '.'
    }
    if (surname) {
      result = result + ' ' + surname[0] + '.'
    }


    res.send(result)
  } else {
    res.send('Invalid fullname')
  }

});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
