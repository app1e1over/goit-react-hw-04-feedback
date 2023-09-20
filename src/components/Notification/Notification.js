import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Notification = props => {
  return <div>{props.message}</div>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
