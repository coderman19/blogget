import style from './List.module.css';
import Post from './Post';

// eslint-disable-next-line arrow-body-style
export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2022-07-26T09:45:00.000Z',
  };
  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
