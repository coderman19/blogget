import style from './Title.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';
console.log(Text);

const Title = ({title}) => {
  console.log(style);
  return (
    <>
      <Text
        As='a'
        size={22}
        tsize={14}
        color='orange'
        className={style.linkPost}
        href='#post'>
        {title}
      </Text>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
