const connection = require('./db.js');

module.exports.get = {
  allMovies: (res, callback) => {
    connection.connect()

    connection.query('SELECT * from movies', function (err, movies) {
      if (err) {
        callback(err)
      } else {
        callback(null, movies);
      }
    })
    // connection.end()
  },

  // movie: (req, res) => {
  //   connection.connect();

  //   var id = req.parameters.id;
  //   connection.query(`SELECT ${id} from movies`, function (err, movie) {
  //     if (err) {
  //        callback(err);
  //     } else {
  //       callback(null, movies);
  //     }
  //   })
  //   // connection.end()
  // }
}

module.exports.post = (req, res, callback) => {
  connection.connect();

  // console.log('TEST!!!' + JSON.stringify(req.params))
  var params = req.params;

  connection.query(`INSERT INTO movies (movieId, title, watched, showDetails) VALUES(null, '${params.title}', ${params.watched}, ${params.show})`, (err) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  })
  // connection.end()
}

module.exports.patch = (req, callback) => {
  connection.connect();

  var params = req.params;

  var watched;

  req.params.watched === true ? watched = false: wacthed = true;

  console.log('WATCHED??: ' + watched)

  connection.query(`UPDATE movies SET watched = ${watched} WHERE movieId = ${req.params.id}`, (err) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  })
  // connection.end();
}