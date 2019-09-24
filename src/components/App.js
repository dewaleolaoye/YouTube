import React from 'react';
import dotenv from 'dotenv';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';

class App extends React.Component {
  onTermSubmit = term => {
    Youtube.get('/search', {
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
