const express = require('express');
const models = require('./models.js');

module.exports.get = {
  allMovies: (res) => {
    models.get.allMovies(res, (err, movies) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        res.status(200).send(movies);
      }
    })
  },

  // movie: (req, res) => {

  // }
}

module.exports.post = (req, res) => {
  models.post(req, res, (err) => {
    if (err) {
      throw err;
    } else {
      res.status(201).send('Post successful!');
    }
  })
}

module.exports.patch = (req, res) => {
  models.patch(req, (err) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send('Movie successfully updated');
    }
  })
}