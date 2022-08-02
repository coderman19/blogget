import style from './Author.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

const Author = ({author}) => {
  console.log(style);
  return (
    <>
      <Text
        As='a'
        size={18}
        tsize={24}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
    </>
  );
};

Author.propTypes = {
  author: PropTypes.string,
};

export default Author;
