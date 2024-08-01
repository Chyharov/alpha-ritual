import freshFlowersWreathDesktopHeroPicture from '../../images/SectionFreshFlowersWreathDesktop/freshFlowersWreathDesktopHeroPicture.jpg';
import freshFlowersWreathDesktopblur from '../../images/SectionFreshFlowersWreathDesktop/freshFlowersWreathDesktopblur.png';
import freshFlowersWreathDesktopblurSecond from '../../images/SectionFreshFlowersWreathDesktop/freshFlowersWreathDesktopblurSecond.png';
import s from './SectionFreshFlowersWreathDesktop.module.scss';

const SectionFreshFlowersWreathDesktop = () => {
  return (
    <section className={s.sectionFreshFlowersWreathDesktop}>
      <div className="container">
        <div className={s.freshFlowersWreathDesktopContainer}>
          <img
            className={s.freshFlowersWreathDesktopblurSecond}
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

            <ul>
              <li>вінок із живих квітів</li>
              <li>монограма</li>
              <li>надгробна композиція</li>
              <li>траурний букет</li>
              <li>квітковий кошик</li>
            </ul>

            <p>
              Незважаючи на відсутність будь-яких суворих правил, існують
              специфічні культурні традиції та символізм, який вкладають у
              траурну квіткову композицію.
            </p>
          </div>
        </div>

        <h2>Форма, склад та кольорова гама</h2>

        <p>
          Сам вінок на похованні може бути будь-якої форми, найбільш традиційні
          три з них.
        </p>

        <ul>
          <li>
            Круглий – найдавніший символ нескінченності буття та відродження. Це
            сонце як джерело вічного життя. Круглі вінки можуть бути складені
            кільцем або із суцільним заповненням живими квітами.
          </li>
          <li>
            Серце – найвідоміший символ кохання, який виражає щирі почуття до
            померлого та їх нетлінність навіть після смерті.
          </li>
          <li>
            Крапля – традиційний у нашій культурі жалобний вінок. Каплеподібна
            форма символізує скорботу і смуток за вчасною втратою дорогої
            людини. Така форма за іншою версією символізує полум’я, що очищає,
            спрямоване вгору на небеса.
          </li>
        </ul>

        <p>
          Традиційно червоними живими квітами (цвяхами та трояндами) прикрашають
          жалобні вінки на похованнях чоловіків та людей з тяжкою долею.
          Фіолетові або білі троянди та лілії використовують для поховальних
          квіткових композицій для покійних молодих дівчат та дітей як символ
          духовної чистоти. Гілки сосни, ялиці та туї – символ любові до
          покійного та скорботи за втратою. У православній традиції
          використовують і гілки верби як символізм переходу душі в Царство
          Небесне.
        </p>

        <p>
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
        <img
          className={s.freshFlowersWreathDesktopblurSecond}
          src={freshFlowersWreathDesktopblurSecond}
          alt="freshFlowersWreathDesktopblurSecond"
        />
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathDesktop;
