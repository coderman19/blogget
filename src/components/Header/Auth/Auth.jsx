/* eslint-disable max-len */
import React from 'react';
import style from './Auth.module.css';
// import login from './img/login.svg';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => (
  // {auth ? auth : false}
  <button className={style.button}>
    <LoginIcon width={40}/>
  </button>
);

console.log(typeof LoginIcon);

Auth.propTypes = {
  auth: PropTypes.string,
  LoginIcon: PropTypes.object,
};
