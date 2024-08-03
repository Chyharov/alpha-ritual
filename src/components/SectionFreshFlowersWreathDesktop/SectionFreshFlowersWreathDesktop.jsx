import freshFlowersWreathDesktopHeroPicture from '../../images/SectionFreshFlowersWreathDesktop/freshFlowersWreathDesktopHeroPicture.jpg';
import freshFlowersWreathDesktopblur from '../../images/SectionFreshFlowersWreathDesktop/freshFlowersWreathDesktopblurSecond.png';
import s from './SectionFreshFlowersWreathDesktop.module.scss';

const SectionFreshFlowersWreathDesktop = () => {
  return (
    <section className={s.sectionFreshFlowersWreathDesktop}>
      <div className="container">
        <div className={s.freshFlowersWreathDesktopContainer}>
          <img
            className={s.freshFlowersWreathDesktopHeroPicture}
            src={freshFlowersWreathDesktopHeroPicture}
            alt="freshFlowersWreathDesktopHeroPicture"
          />

          <div className={s.freshFlowersWreathDesktopContainerDescription}>
            <h2 className='title' style={{marginBottom: '40px'}}>Вінки, квіткові кошики та траурні букети</h2>

            <p className='description' style={{marginBottom: '20px'}}>
              Вибір квіткової композиції, її форма, склад та колірна гама не
              регламентуються жодними жорсткими правилами та релігійними
              канонами, принаймні у християнстві. Це виключно особиста справа
              кожного та його спосіб висловити свою скорботу щодо втрати,
              безмежну любов і повагу до покійного.
            </p>

            <p className='description' style={{marginBottom: '40px'}}>
              Поховальна квіткова композиція може бути у будь-якому вигляді:
            </p>

            <ul className={s.freshFlowersWreathList}>
              <li className={s.freshFlowersWreathList__item}><p className={s.freshFlowersWreathList__itemDescription}>вінок із живих квітів</p></li>
              <li className={s.freshFlowersWreathList__item}><p className={s.freshFlowersWreathList__itemDescription}>монограма</p></li>
              <li className={s.freshFlowersWreathList__item}><p className={s.freshFlowersWreathList__itemDescription}>надгробна композиція</p></li>
            </ul>

            <ul className={s.freshFlowersWreathListSecond} >
              <li className={s.freshFlowersWreathList__item}><p className={s.freshFlowersWreathList__itemDescription}>траурний букет</p></li>
              <li className={s.freshFlowersWreathList__item}><p className={s.freshFlowersWreathList__itemDescription}>квітковий кошик</p></li>
            </ul>

            <p className='description'>
              Незважаючи на відсутність будь-яких суворих правил, існують
              специфічні культурні традиції та символізм, який вкладають у
              траурну квіткову композицію.
            </p>
          </div>
        </div>

        <h2 className='title' style={{marginBottom: '40px'}}>Форма, склад та кольорова гама</h2>

        <p className='description' style={{marginBottom: '40px'}}>
          Сам вінок на похованні може бути будь-якої форми, найбільш традиційні
          три з них.
        </p>

        <ul className={s.freshFlowersWreathListThird}>
          <li className={s.freshFlowersWreathListThird__item}><p className='secondaryDescription' style={{padding: '8px'}}>
            Круглий – найдавніший символ нескінченності буття та відродження. Це
            сонце як джерело вічного життя. Круглі вінки можуть бути складені
            кільцем або із суцільним заповненням живими квітами.
          </p>
          </li>
          <li className={s.freshFlowersWreathListThird__item}><p className='secondaryDescription' style={{padding: '8px'}}>
            Серце – найвідоміший символ кохання, який виражає щирі почуття до
            померлого та їх нетлінність навіть після смерті.
          </p>
          </li>
          <li className={s.freshFlowersWreathListThird__item}><p className='secondaryDescription' style={{padding: '8px'}}>
            Крапля – традиційний у нашій культурі жалобний вінок. Каплеподібна
            форма символізує скорботу і смуток за вчасною втратою дорогої
            людини. Така форма за іншою версією символізує полум’я, що очищає,
            спрямоване вгору на небеса.
          </p>
          </li>
        </ul>

        <p className='description' style={{marginBottom: '10px'}}>
          Традиційно червоними живими квітами (цвяхами та трояндами) прикрашають
          жалобні вінки на похованнях чоловіків та людей з тяжкою долею.
          Фіолетові або білі троянди та лілії використовують для поховальних
          квіткових композицій для покійних молодих дівчат та дітей як символ
          духовної чистоти. Гілки сосни, ялиці та туї – символ любові до
          покійного та скорботи за втратою. У православній традиції
          використовують і гілки верби як символізм переходу душі в Царство
          Небесне.
        </p>

        <p className='description' style={{marginBottom: '80px'}}>
          Вінки та букети не можна перевантажувати надто жалобними темними та
          темно-червоними живими квітами. Це посилить і без того важке емоційне
          тло на похованні. Самі ж композиції складають не більше п’яти видів
          квіток і рослинних елементів.
        </p>

        <img
          className={s.freshFlowersWreathDesktopblur}
          src={freshFlowersWreathDesktopblur}
          alt="freshFlowersWreathDesktopblur"
        />
        <div className='outline'></div>
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathDesktop;
