import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import phoneIcon from 'images/phoneIcon.svg'
import locationIcon from 'images/locationIcon.svg'
import blurAddressAndMap from 'images/blurAddressAndMap.svg'
import MapComponent from 'components/MapComponent/MapComponent'
import s from './SectionContactsAndMap.module.scss';

const SectionContactsAndMap = () => {
  return (
    <section className={s.sectionContactsAndMap} id='сontacts'>
        <div className={'container ' + s.contactsAndMap__container}>
              
          <address>
          <h2 className={s.contactTitle}>Контакти</h2>
          <h3 className={s.addressTitle}>Адреса</h3>
          <div className={s.phoneNumbersContainer}>
            <img className={s.contactsIcon} src={locationIcon} alt="locationIcon" />
              <ul className={s.addressList}>
                <li className={s.addressDescription}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA"
                  >
                    м.Київ, вул. Івана Федорова, 33
                  </a>
                </li>
                <li className={s.addressDescription}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/AwovKjfD7p53WbF56"
                  >
                    м.Київ, вул. Колоскова 9 (район Совського кладовища)
                  </a>
                </li>
            </ul>
          </div>
            
          <h3 className={s.addressTitle}>Телефон</h3>
          <div className={s.phoneNumbersContainer}>
            <img className={s.contactsIcon} src={phoneIcon} alt="phoneIcon" />
            <ul className={s.addressList}>
              <li className={s.telDescription}>
                <a href="tel:+380672459505">+38 (067) 245 95 05</a>
              </li>
              <li className={s.telDescription}>
                <a href="tel:+380442322408">+38 (044) 232 24 08</a>
              </li>
              <li className={s.telDescription}>
                <a href="tel:+380995062408">+38 (099) 506 24 08</a>
              </li>
              <li className={s.telDescription}>
                <a href="tel:+380667858127">+38 (066) 785 81 27</a>
              </li>
              <li className={s.telDescription}>
                <a href="tel:+380939545423">+38 (093) 954 54 23</a>
              </li>
            </ul>
          </div>
          

            <p style={{ marginBottom: '10px'}} className={s.addressTitle}>Щоденно | Цілодобово</p>
          <ButtonGetConsultation />
        </address>

        <div className={s.contactsMapContainer}>
          <h3 className={s.addressTitle}>на мапі</h3>
          <MapComponent />
        </div>

      </div>

      <img className={s.blurAddressAndMap} src={blurAddressAndMap} alt="blurAddressAndMap" />

    </section>
  );
};

export default SectionContactsAndMap;
