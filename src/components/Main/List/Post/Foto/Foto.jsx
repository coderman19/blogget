import style from './Foto.module.css';
import PropTypes from 'prop-types';

const Foto = ({notphoto, title}) => {
  console.log(style);
  return (
    <>
      <img className={style.img} src={notphoto} alt={title} />
    </>
  );
};


Foto.propTypes = {
  notphoto: PropTypes.object,
  title: PropTypes.string,
};

export default Foto;
