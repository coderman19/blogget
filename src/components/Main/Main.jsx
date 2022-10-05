import {React} from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

export const Main = () => {
  console.log(Main);
  <main className={style.main}>
    <Layout>
      <Tabs />
      <List />
    </Layout>
  </main>;
};


