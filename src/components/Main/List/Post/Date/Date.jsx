import style from './Date.module.css';
import formatDate from '../../../../../utils/formatDate/formatDate';
import PropTypes from 'prop-types';

const Date = ({date}) => {
  console.log(style);
  return (
    <>
      <time className={style.date} dateTime={date}>
        {formatDate(date)}
      </time>
    </>
  );
};

Date.propTypes = {
  date: PropTypes.string,
};

export default Date;
