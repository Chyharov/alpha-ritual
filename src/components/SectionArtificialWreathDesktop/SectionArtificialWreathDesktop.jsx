import artificialWreathsImageDescription from 'images/artificialWreaths/artificialWreathsImageDescription.png';
import artificialWreathsImageListDescription from 'images/artificialWreaths/artificialWreathsImageListDescription.png';
import GalleryWithTitleAndButtonMoreDetails from 'components/GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import artificialWreathsblur from 'images/artificialWreaths/artificialWreathsblur.png';
import artificialWreathsblur2 from 'images/artificialWreaths/artificialWreathsblur2.png';
import s from './SectionArtificialWreathDesktop.module.scss';

const SectionArtificialWreathDesktop = ({array, buttonDescription, link, titleForGallery, titleForModalWindow }) => {
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
            <h2 className="title" style={{ marginBottom: '40px' }}>
              Як вибрати ритуальний вінок зі штучних квітів
            </h2>

            <p className="description" style={{ marginLeft: '96px' }}>
              Особливо суворих флористичних правил і релігійних канонів у
              християнстві щодо створення жалобних букетів, квіткових кошиків та
              вінків немає. Є лише традиції і символізм, що склався в культурі
              народів світу. Живі чи штучні квіти символізують вічне кохання, а
              вінки ще з язичницьких часів одягали на голови померлих, як символ
              переходу у більш досконалий світ на небесах. Ця традиція перейшла
              і в християнський світ, де квітами ми святкуємо перехід душі
              померлої близької людини до Царства Небесного.
            </p>

            <p className="description" style={{ marginLeft: '96px' }}>
              Штучні квіткові композиції на похованні можуть бути не лише у
              вигляді вінка, а й як ідеально злагоджена траурна ікебана у
              кошику, у формі монограми або як надгробний букет. Такі поховальні
              композиції зі штучних квітів хоч і не регламентуються суворими
              правилами, але складаються відповідно до культурних традицій, що
              склалися.
            </p>
          </div>
        </div>
        <h2 className="title" style={{ marginBottom: '40px' }}>
          Форма та склад жалобних штучних вінків
        </h2>

        <p className="description" style={{ marginBottom: '40px' }}>
          Ритуальний вінок може бути будь-якої форми. Він висловлює почуття,
          відчуття і ставлення до покійного людини, яка виключно підносить таку
          композицію.
        </p>

        <div className={s.artificialWreathsImageListDescriptionContainer}>
          <div className={s.artificialWreathsListContainer}>
            <h3 className={s.artificialWreathsListTitle}>
              Серед найпоширеніших форм:
            </h3>
            <ul className={s.artificialWreathsList}>
              <li className={s.artificialWreathsList__item}>
                <p className="secondaryDescription">
                  Круглий – найдавніший символ нескінченності буття та
                  відродження. Це сонце як джерело вічного життя. Круглі вінки
                  можуть бути складені кільцем або із суцільним заповненням
                  живими квітами.
                </p>
              </li>
              <li className={s.artificialWreathsList__item}>
                <p className="secondaryDescription">
                  Серце – найвідоміший символ кохання, який виражає щирі почуття
                  до померлого та їх нетлінність навіть після смерті.
                </p>
              </li>
              <li className={s.artificialWreathsList__item}>
                <p className="secondaryDescription">
                  Крапля – традиційний у нашій культурі жалобний вінок.
                  Каплеподібна форма символізує скорботу і смуток за вчасною
                  втратою дорогої людини. Така форма за іншою версією символізує
                  полум’я, що очищає, спрямоване вгору на небеса.
                </p>
              </li>
            </ul>
          </div>

          <img
            className={s.artificialWreathsImageListDescription}
            src={artificialWreathsImageListDescription}
            alt="artificialWreathsImageListDescription"
          />

          <div className={s.artificialWreathsListSecondContainer}>
            <h3 className={s.artificialWreathsListTitle}>
              Символізм мають і самі штучні квіти, кількість їх видів та
              кольорова гама:
            </h3>
            <ul className={s.artificialWreathsList}>
              <li className={s.artificialWreathsList__item}>
                <p className="secondaryDescription">
                  Молодим непорочним дівчатам та дітям подають вінки з білих та
                  фіолетових троянд або лілій, як символ чистоти душі;
                </p>
              </li>
              <li className={s.artificialWreathsList__item}>
                <p className="secondaryDescription">
                  Тим, хто прожив важке життя і військовим вінки на похорон
                  складають переважно з червоних штучних троянд і гвоздик;
                </p>
              </li>
              <li className={s.artificialWreathsList__item}>
                <p className="secondaryDescription">
                  Для вираження глибокої скорботи вінок прикрашають ялиновими
                  гілками.
                </p>
              </li>
            </ul>
          </div>
          <img className={s.artificialWreathsblur} src={artificialWreathsblur} alt="artificialWreathsblur" />
        </div>
        <p className="description" style={{ marginBottom: '40px' }}>
          Використовують трохи більше п’яти видів квіток. Не можна
          перевантажувати вінок занадто темними, чорними та темно-червоними
          штучними кольорами. Це ще більше посилить траурну обстановку на
          похороні та погіршить емоційний стан усіх присутніх на церемонії
          прощання.
        </p>
        <div className="outline"></div>
        <div className={s.artificialWreathsGalleryDesktopContainer}>
          <h2 className="title" style={{ textAlign: 'center', marginBottom: '80px' }}>
            Чому штучні квіти найкращі для жалобного вінка?
          </h2>
          <div className={s.artificialWreathsGalleryContainer}>
            <ul className={s.artificialWreathsGalleryList}>
              <li>
                <p className='description'>
                  Флористи поховального будинку «Альфа» складають будь-які
                  траурні композиції з ботанічних копій різних видів квітів та
                  рослин. Букети, надгробні квіткові монограми та поховальні
                  вінки складаються з сучасного флористичного матеріалу, який
                  природно виглядає і коштує недорого.
                </p>
              </li>
              <li>
                <p className='description'>
                  Натуральність зовнішнього вигляду, постійна «свіжість» та
                  порівняно низька ціна – головні переваги штучних кольорів, які
                  ми використовуємо при складанні жалобних кошиків та вінків для
                  поховання.
                </p>
              </li>
              <li>
                <p className='description'>
                  Ми підберемо для вас ідеальну композицію, щоб ви змогли
                  наповнити своїми символами кожну квітку та кожну гілку у
                  вінку. Такий символізм допоможе вам висловити любов і скорботу
                  через вчасну втрату, повагу і повагу до померлої близької
                  людини, християнські сподівання набуття Царства Небесного і
                  вічного життя на небесах.
                </p>
              </li>
            </ul>
            <GalleryWithTitleAndButtonMoreDetails
                array={array}
                buttonDescription={buttonDescription}
                link={link}
                titleForGallery={titleForGallery}
                titleForModalWindow={titleForModalWindow}
            />
          </div>
          <img className={s.artificialWreathsblur2} src={artificialWreathsblur2} alt="artificialWreathsblur2" />
        </div>
      </div>
    </section>
  );
};

export default SectionArtificialWreathDesktop;
