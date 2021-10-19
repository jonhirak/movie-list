import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

var MovieDescription = (props) => {

  var handleMovieWatchedClick = (props) => {

    if (props.filtered.length === 0) {
      var movies = props.movies;

      for (var i = 0; i < movies.length; i ++) {
        var item = movies[i];
        if (item.title === props.movie.title) {
          item.watched === true ? item.watched = false: item.watched = true;

          $.ajax({
            method: 'PATCH',
            url: '/api/movies',
            success: data => {
              this.getAllMovies(data);
            },
            error: () => console.log('Error')
          });

          props.setState({
            movies: movies
          })
        }
      }
    } else {

      var movies = props.filtered;

      for (var i = 0; i < movies.length; i ++) {
        var item = movies[i];
        if (item.title === props.movie.title) {
          item.watched === true ? item.watched = false: item.watched = true;
          props.setState({
            movies: props.filtered
          })
        }
      }
    }
    console.log('STATE: ' + JSON.stringify(props.state))
  }

  var populateDescription = (props) => {
    var description = props.dummyData;

    var result = [];
    for (var key in description) {
      result.push(<div>{key}: {description[key]}</div>)
    }

    // result.push(<div>Watched: <button className='watched' onClick={handleMovieWatchedClick(props)}>watched</button></div>)

    // console.log(result)

    return result;
  }

  return (
    <div>
      {populateDescription(props)}
      <div>
        Watched: {props.movie.watched ? 'Yes': 'No'}
        <input type='checkbox' onClick={handleMovieWatchedClick.bind(null, props)}/>
      </div>
    </div>)
}

export default MovieDescription;