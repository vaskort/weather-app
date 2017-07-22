import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from 'weatherActions';

class SearchForm extends Component {
  handleForm = (e) => {
    e.preventDefault();
    this.props.getData('London');
  }

  render() {
    return (
      <div className="grid-container grid-container-padded">
        <form onSubmit={this.handleForm}>
          <div className="grid-x grid-margin-x">
            <div className="small-12 medium-8 large-4 large-offset-4 cell">
              <input type="text" placeholder="Name of city"/>
            </div>
            <div className="small-12 medium-4 large-4 large-offset-4 cell">
              <button type="submit" className="button expanded">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (city) => {
      dispatch(getData(city));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);