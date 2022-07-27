import style from './Author.module.css';
import PropTypes from 'prop-types';

const Author = ({author}) => {
  console.log(style);
  return (
    <>
      <a className={style.linkAuthor} href='#author'>
        {author}
      </a>
    </>
  );
};

Author.propTypes = {
  author: PropTypes.string,
};

export default Author;
