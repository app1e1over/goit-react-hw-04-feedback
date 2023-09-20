import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const handleClick = e => {
    props.onLeaveFeedback(e.target.innerText);
  };

  const { options } = props;
  let buttons = options.map(but => (
    <button key={but} onClick={handleClick}>
      {but}
    </button>
  ));
  return <div>{buttons}</div>;
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};

export default FeedbackOptions;
