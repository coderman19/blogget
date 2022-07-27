import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';


import Date from './Date/Date';
import Rating from './Rating/Rating';
import Author from './Author/Author';
import Title from './Title/Title';
import Foto from './Foto/Foto';
import Del from './Del/Del';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(title, author, ups, date);
  return (
    <li className={style.post}>
      <Foto notphoto={notphoto}/>
      <div className={style.content}>
        <h2 className={style.title}>
          <Title title={title} />
        </h2>
        <Del />
        <Author author={author}/>
      </div>
      <Rating ups={ups} />
      <Date date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
  date: PropTypes.string,
};

