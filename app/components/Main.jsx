import React, { Component } from 'react';

import SearchForm from 'SearchForm';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center title">Weather App</h1>
        <SearchForm />
      </div>
    );
  }
}

export default Main;