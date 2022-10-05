
import React from 'react';
import {useState, useEffect} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: 'bearer ${token}',
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return (
    <button className={style.button}>
      {auth.name ? (
        <button className={style.btn}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Avatar ${auth.name}`}
          />
          <Text>{auth.name}</Text>
        </button>
    ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon className={style.svg} width={40}/>
      </Text>
    )}
    </button>
  );
};

Auth.propTypes = {
  auth: PropTypes.bool,
  token: PropTypes.string,
  LoginIcon: PropTypes.object,
};
