import React from 'react';
import style from './Main.module.css';
import Layout from '../Layout';

export const Main = (props) => {
  return (
    <div className={style.main}>
      <Layout>
        <div>
          <h2>Some text</h2>
        </div>
      </Layout>
    </div>
  )
}
