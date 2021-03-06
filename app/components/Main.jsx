import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from 'SearchForm';
import DataLayout from 'DataLayout';
import ErrorPage from 'ErrorPage';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center title">Weather App</h1>
        <SearchForm />
        {/*if there is weather data and there's no error show the data layout*/}
        {this.props.data.get('weatherData').size > 0 && !this.props.data.get('error')  &&
          <DataLayout {...this.props} />
        }
        {/*if there is an error show the error page*/}
        {this.props.data.get('error')  &&
          <ErrorPage />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.weatherData,
  };
};

export default connect(mapStateToProps)(Main);