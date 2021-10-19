import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

var Form = (props) => {

  var searchHandler = (props) => {
    var input = document.getElementById('search-box').value.toLowerCase();
    var movies = props.movies;
    var moviesMatch = [];

    if (input) {
      for (var i = 0; i < movies.length; i ++) {
        var movie = movies[i];
        var added = false;
        for (var j = 0; j < movie.title.length; j ++) {
          var title = movie.title.toLowerCase();
          var index = 0;
          while (title[j] !== undefined && title[j] === input[index]) {
            if (index === input.length -1 && added === false) {
              moviesMatch.push(movie);
              added = true;
              break;
            }
            j++;
            index++;
          }
        }
      }

      if (moviesMatch.length > 0) {
        // moviesMatch.forEach(item => {
        //   props.filtered.push(item)
        // })
        for (var i = 0; i < moviesMatch.length; i ++) {
          var item = moviesMatch[i];
        }

        // console.log(JSON.stringify(props.filtered))

        props.setState({
          movies: moviesMatch
        })
      } else {
        // alert('No match found. Please try a different search !)
        var noMatch = [{title: 'No match found. Please try a different search!'}];

        props.setState({
          movies: noMatch
        });
      }
    } else {
      props.setState({
        movies: movies
      })
    }
  }

  var addHandler = (props) => {
    var title = document.getElementById('add-box').value;

    var movie = {title, watched: false, show: false};

    var url = `/api/movies/${movie.title}/${movie.watched}/${movie.show}`

    $.ajax({
      type: "POST",
      url: url,
      success: console.log('Post successful!'),
    });

    props.movies.push(movie);

    props.setState({
      movies: props.movies
    })

    document.getElementById('add-box').value = '';
  }

  var watchedListHandler = (props) => {
    //Displays list of all watched movies.

    if (props.state.filteredByWatched) {
      props.setState({
        movies: props.movies,
        filteredByWatched: false
      })
    } else {
      var movies = props.movies;

      var watchedList = [];


      for (var i = 0; i < movies.length; i ++) {
        var movie = movies[i];
        if (movie.watched === true) {
          watchedList.push(movie);
        }
      }

      props.setState({
        movies: watchedList,
        filteredByWatched: true
      })
    }
  }

  var toWatchListHandler = (props) => {
    //Displays list of movies to watch.
    if (props.state.filteredByToWatch) {
      props.setState({
        movies: props.movies,
        filteredByToWatch: false
      })
    } else {
      var movies = props.movies;

      var toWatchList = [];

      for (var i = 0; i < movies.length; i ++) {
        var movie = movies[i];
        if (movie.watched === false) {
          toWatchList.push(movie);
        }
      }

      props.setState({
        movies: toWatchList,
        filteredByToWatch: true
      })
    }
  }

  return (
    <div id='form'>
      <div>
        <input id='add-box' type='text' placeholder='Add movie title here'></input>
        <button id='add-button' name='add' onClick={addHandler.bind(null, props)}>Add</button>
      </div>
      <div>
        <div>
          <button id='watched' name='watched' onClick={watchedListHandler.bind(null, props)}>Watched</button>
          <button id='to_watch' name='watched' onClick={toWatchListHandler.bind(null, props)}>To Watch</button>
        </div>
        <input id='search-box' type='text' placeholder='Search...'></input>
        <button id='search-button' name='search' onClick={searchHandler.bind(null, props)}>Go!</button>
      </div>
    </div>
  )
}

export default Form;