import style from './Title.module.css';
import PropTypes from 'prop-types';

const Title = ({title}) => {
  console.log(style);
  return (
    <>
      <a className={style.linkPost} href='#post'>
        {title}
      </a>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
