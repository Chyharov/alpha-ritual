import s from '../Blur/Blur.module.scss';

const Blur = ({ style }) => {
  return (
    <div className={s.blur} style={style}/>
  );
};

export default Blur;
