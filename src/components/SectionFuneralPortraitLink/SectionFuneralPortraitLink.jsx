import { Link } from 'react-router-dom';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from '../SectionFuneralPortraitLink/SectionFuneralPortraitLink.module.scss';


const SectionFuneralPortraitLink = () => {
  const buttonDescription = 'Детальніше';

  return (
    <section className={s.sectionFuneralPortraitLink}>
      <div className={'container ' + s.funeralPortrait__container}>

        <h2 className="title" style={{ marginBottom: '16px', paddingTop: '430px', textAlign: 'center' }}>Портрет на поховання</h2>

        <p className="description" style={{ marginBottom: '24px' }}>У канонах православної віри, як і в інших світових релігіях, немає жодної згадки про необхідність наявності на поховальній церемонії прижиттєвого портрета покійного. Немає і обов’язкового перев’язування портрета чорною траурною стрічкою. Це виключно світська традиція, яка має глибоке значення.</p>

        <Link className={s.ritualServices__link} to="/funeralportrait" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ButtonMoreDetails  buttonDescription={buttonDescription} />
        </Link>
       
      </div>
    </section>
  );
};

export default SectionFuneralPortraitLink;
