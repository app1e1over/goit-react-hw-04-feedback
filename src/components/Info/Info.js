import React from 'react';
import PropTypes from 'prop-types';

Info.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

function Info({ good, bad, neutral }) {
    let total=good+neutral+bad;
    if(total>0){
  return (
    <>
    <h2>Statistics</h2>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>total: {total}</div>
      <div>Percentage of good reviews:{Math.round(good/total*100)}%</div>
    </>
  );}else{
    return (<div>No feedback given</div>)
  }
}

export default Info;
