import React, { Component } from 'react';
import moment from "moment";

class DataLayout extends Component {
  render() {
    let cityName = this.props.data.getIn(['weatherData', 'city', 'name']),
        previousDay = '',
        array = [],
        helperArray = [],
        data = this.props.data.getIn(['weatherData', 'list']).map((item, index) => {
          // As a first step here instead of splitting the date and do something like the below I will use moment js
          // let day = item.get('dt_txt').split(' ')[0].split('-')[2]; -> this would give me the day of the month i.e '22'
          // let day = ;
          let day = moment.unix(item.get('dt')).format('dddd');
          // add a td with the name of day if the day is diff than the previous one
          if (day !== previousDay) {
            previousDay = day;
            // take all the tds wrap them with a tr and push them to the final array that we will render
            // the simple if below is not to make this action at the iteration
            if (previousDay.length > 0) {
              array.push(<tr key={index}>{helperArray}</tr>);
              helperArray = [];
            }
            helperArray.push(
              <td key={item.get('dt')}>
                {day}
              </td>
            )
          }
          // in each iteration we should push the temperature no matter what
          helperArray.push(
            <td key={index}>
              {item.getIn(['main', 'temp'])}
            </td>
          )
        });
    return (
      <div>
        <div className="grid-container">
          <h2 className="text-center">Weather for {cityName}</h2>
          <table>
            <tbody>
              { array }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DataLayout;