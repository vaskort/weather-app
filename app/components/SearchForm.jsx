import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div className="grid-container grid-container-padded">
        <form>
          <div className="grid-x grid-margin-x">
            <div className="small-12 medium-8 large-4 large-offset-4 cell">
              <input type="text" placeholder="Name of city"/>
            </div>
            <div className="small-12 medium-4 large-4 large-offset-4 cell">
              <button type="button" className="button expanded">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;