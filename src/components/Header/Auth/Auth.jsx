
import React from 'react';
import {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';
import {tokenContext} from '../../../context/tokenContext';


export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [auth, clearAuth] = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <button className={style.btn}>
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
