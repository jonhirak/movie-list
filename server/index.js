const express = require('express');
const app = express();
const controllers = require('./controllers.js');
const PORT = 3000 || process.env.PORT;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


app.get('/api/movies', function (req, res) {
  controllers.get.allMovies(res);
})

// app.get('/api/movies/:id', function (req, res) {
//   controllers.get.movie(req, res);
//   // res.send('GET request to the homepage')
// })

app.post('/api/movies/:title/:watched/:show', function (req, res) {
  controllers.post(req, res)
  // console.log('TEST!!!' + JSON.stringify(req.params))
})

app.patch('/api/movies/:id/:watched', function (req, res) {
  // console.log('TEST!!!')
  controllers.patch(req, res);
})