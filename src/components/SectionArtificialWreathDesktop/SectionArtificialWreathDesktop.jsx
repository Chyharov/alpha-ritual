import artificialWreathsImageDescription from '../../images/artificialWreaths/artificialWreathsImageDescription.png';
import s from './SectionArtificialWreathDesktop.module.scss';

const SectionArtificialWreathDesktop = () => {
  return (
    <section className={s.sectionArtificialWreaths}>
      <div className="container">
        <div className={s.artificialWreathsDesktopContainer}>
          <img
            className={s.artificialWreathsImageDescription}
            src={artificialWreathsImageDescription}
            alt="artificialWreathsImageDescription"
          />

          <div className={s.artificialWreathsImageDescriptionContainer}>
            <h2 className='title' style={{marginBottom: '40px'}}>Як вибрати ритуальний вінок зі штучних квітів</h2>

            <p className='description' style={{marginLeft: '96px'}}>
              Особливо суворих флористичних правил і релігійних канонів у
              християнстві щодо створення жалобних букетів, квіткових кошиків та
              вінків немає. Є лише традиції і символізм, що склався в культурі
              народів світу. Живі чи штучні квіти символізують вічне кохання, а
              вінки ще з язичницьких часів одягали на голови померлих, як символ
              переходу у більш досконалий світ на небесах. Ця традиція перейшла
              і в християнський світ, де квітами ми святкуємо перехід душі
              померлої близької людини до Царства Небесного.
            </p>

            <p className='description' style={{marginLeft: '96px'}}>
              Штучні квіткові композиції на похованні можуть бути не лише у
              вигляді вінка, а й як ідеально злагоджена траурна ікебана у
              кошику, у формі монограми або як надгробний букет. Такі поховальні
              композиції зі штучних квітів хоч і не регламентуються суворими
              правилами, але складаються відповідно до культурних традицій, що
              склалися.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionArtificialWreathDesktop;
