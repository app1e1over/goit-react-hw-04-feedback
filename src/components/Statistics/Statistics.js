import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Statistics extends Component {
  render() {
  const{good, bad, neutral, total, positivePercentage}=this.props;
    return (
      <>
        <div>good: {good}</div>
        <div>neutral: {neutral}</div>
        <div>bad: {bad}</div>
        <div>total: {total}</div>
        <div>Percentage of good reviews:{positivePercentage}%</div>
      </>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
