import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData, setFetching } from 'weatherActions';

class SearchForm extends Component {
  handleForm = (e) => {
    e.preventDefault();
    this.props.setFetching(true);
    this.props.getData(this.refs.city.value)
      .then(resp => {
        this.props.setFetching(false);
        console.log(this.props.weatherData.toJS());
      })
      .catch(err => {
        console.log(err);
        this.props.setFetching(false);
      });
  }

  render() {
    return (
      <div className="grid-container">
        <form onSubmit={this.handleForm}>
          <div className="grid-x grid-margin-x">
            <div className="small-12 medium-8 large-4 large-offset-4 cell">
              <input type="text" placeholder="Name of city" ref="city" defaultValue="London" disabled={this.props.weatherData.get('fetching')}/>
            </div>
            <div className="small-12 medium-4 large-4 large-offset-4 cell">
              <button type="submit" className="button expanded" disabled={this.props.weatherData.get('fetching')}>Search</button>
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
      return dispatch(getData(city));
    },
    setFetching: (payload) => {
      dispatch(setFetching(payload));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);