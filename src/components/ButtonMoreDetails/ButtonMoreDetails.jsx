import s from './ButtonMoreDetails.module.scss';

const ButtonMoreDetails = ({ buttonDescription, onClick, style }) => {
  
  return (
      <button type="button" className={s.buttonMoreDetails} style={style} onClick={onClick}>
          {buttonDescription}
      </button>
  );
};

export default ButtonMoreDetails;
