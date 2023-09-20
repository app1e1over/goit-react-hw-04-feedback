import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Statistics = (props) => {
  const { good, bad, neutral, total, positivePercentage } = props;
  return (
    <>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>total: {total}</div>
      <div>Percentage of good reviews:{positivePercentage}%</div>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
