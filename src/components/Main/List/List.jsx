
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title-1',
      author: 'Nickname-1',
      ups: 678,
      date: '2022-07-26T09:45:00.000Z',
      id: '123'
    },
    {
      thumbnail: '',
      title: 'Title-2',
      author: 'Nickname-2',
      ups: 73,
      date: '2022-08-26T08:40:00.000Z',
      id: '56'
    },
    {
      thumbnail: '',
      title: 'Title-3',
      author: 'Nickname-3',
      ups: 190,
      date: '2022-09-10T12:05:00.000Z',
      id: '333'
    }, {
      thumbnail: '',
      title: 'Title-4',
      author: 'Nickname-4',
      ups: 82,
      date: '2022-09-28T14:15:00.000Z',
      id: '489'
    },
  ];
  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
