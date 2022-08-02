import style from './Del.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as DelEl} from '../img/delete.svg';

const Del = () => {
  console.log(style);
  return (
    <>
      <button className={style.delete}>
        <DelEl
          width={24}
          color='var(--grey66)'
        />
      </button>
    </>
  );
};

Del.propTypes = {
  svg: PropTypes.object,
};

export default Del;
