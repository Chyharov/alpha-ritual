import s from './ButtonMoreDetails.module.scss';

const ButtonMoreDetails = ({ buttonDescription, onClick }) => {
  
  return (
      <button type="button" className={s.buttonMoreDetails} onClick={onClick}>
          {buttonDescription}
      </button>
  );
};

export default ButtonMoreDetails;
