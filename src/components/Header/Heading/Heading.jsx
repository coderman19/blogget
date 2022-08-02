import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text/Text';


export const Heading = (props) => (
  <Text
    As='h1'
    center
    size={22}
    tsize={24}
    className={style.heading}>{props.text}</Text>

);


Heading.propTypes = {
  text: PropTypes.string,
  auth: PropTypes.string,
};
