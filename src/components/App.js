import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../api/YouTube';

class App extends React.Component {
  onTermSubmit = term => {
    YouTube.get('/search', {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
