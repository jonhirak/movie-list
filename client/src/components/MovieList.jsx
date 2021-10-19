import React from 'react';
import ReactDOM from 'react-dom';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return
      (<ul id='movieList'>
        {this.state.movies.map(item =>
          <li key={item.title}>
            <div className='movieName' name='movieName'>{item.title}</div>
            {item.watched === true ?
              <button id='watched' name='Not Watched' onClick={this.handleMovieWatchedClick.bind(this, item)}>Not Watched</button>:
              <button id='watched' name='watched' onClick={this.handleMovieWatchedClick.bind(this, item)}>Watched</button>
            }
            <div className='description' name='description' >hello</div>
          </li>
        )}
      </ul>)
  }
}