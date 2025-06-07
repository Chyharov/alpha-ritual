import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import s from './loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader__container} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <RotatingLines
        strokeColor="#5E4715"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
