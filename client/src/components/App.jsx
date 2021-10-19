import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import MovieDescription from './MovieDescription.jsx'
import $ from "jquery";
const axios = require('axios');
// import MovieList from './MovieList.jsx';

//ADD GET REQUEST AND FINISH REFACTORING TO HAVE SEPARATE MOVIELIST.JSX
//INFO AT BOTTOM!!

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredByWatched: false,
      filteredByToWatch: false
    }

    this.movies = [];

    this.filtered = [];

    this.dummyMovieDetails = {
      Year: 1992,
      Runtime: '120 min',
      Metascore: 72,
      imdbRating: 88
    }

  }

  // handleMovieWatchedClick = (movie) => {
    //   var movies = this.movies;

    //   for (var i = 0; i < movies.length; i ++) {
      //     var item = movies[i];
      //     if (item.title === movie.title) {
        //       item.watched === true ? item.watched = false: item.watched = true;
        //       this.setState({
          //         movies: movies
          //       })
          //     }
          //   }
          //   // console.log('STATE: ' + JSON.stringify(this.state))
          // }

  componentDidMount() {

    // axios.get('/api/movies')
    //   .then(function (response) {
    //     // handle success
    //     console.log('THIS: ' + this);
    //     this.getAllMovies(response)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })

    $.ajax({
      method: 'GET',
      url: '/api/movies',
      success: data => {
        this.getAllMovies(data);
      },
      error: () => console.log('Error')
    });
  }

  handleDescriptionClick (movie) {
    console.log('CLICKED!')
    var movies = this.movies;

    for (var i = 0; i < movies.length; i ++) {
      var item = movies[i];
      if (item.title === movie.title) {
        item.showDetails === false ? item.showDetails = true: item.showDetails = false;

        if (this.filtered.length > 0) {
          this.setState({
            movies: this.filtered
          })
        } else {
          this.setState({
            movies: movies
          })
        }
      } else {
        item.showDetails = false;
      }
    }
    // console.log('STATE: ' + JSON.stringify(this.state))
  }

  getAllMovies (response) {
    response.forEach( movie => {
      if (movie.watched === 0) {
        movie.watched = false
      } else {
        movie.watched = true;
      }

      this.movies.push(movie);
    })

    console.log('MOVIES: ' + this.movies)

    this.setState({
      movies: this.movies
    })

    console.log(this.state)
  }


  render () {
    return (
      <div>
        <h1>Movie List</h1>
        <Form setState={this.setState.bind(this)} movies={this.movies}  state={this.state} filtered={this.filtered}/>
        <div id='movieList'>
          {this.state.movies.map(item =>
            <div className='movie' key={item.title}>
              <div className='movieName' onClick={this.handleDescriptionClick.bind(this, item)}>{item.title}</div>
              {/* {item.watched === true ?
                <button id='watched' name='Not Watched' onClick={this.handleMovieWatchedClick.bind(this, item)}>Not Watched</button>:
                <button id='watched' name='watched' onClick={this.handleMovieWatchedClick.bind(this, item)}>Watched</button>} */}
              {item.showDetails === true ?
                <MovieDescription className='movie-description' setState={this.setState.bind(this)} state={this.state} movies={this.movies} filtered={this.filtered} movie={item} />: <div></div>}
            </div>
          )}
        </div>
      </div>
    )
  }
};

// https://api.themoviedb.org/3/search/multi?api_key=054d13f85d42e7b887949479f6c27486&query=mission+impossible
// https://image.tmdb.org/t/p/w500/ + {poster_path}


// [
//   {title: 'Mean Girls', watched: false, show: false},
//   {title: 'Hackers', watched: false, show: false},
//   {title: 'The Grey', watched: false, show: false},
//   {title: 'Sunshine', watched: false, show: false},
//   {title: 'Ex Machina', watched: false, show: false}]

export default App;