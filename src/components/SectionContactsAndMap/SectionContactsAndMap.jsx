import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import s from './SectionContactsAndMap.module.scss';

const SectionContactsAndMap = () => {
  return (
    <section className={s.sectionContactsAndMap}>
      <div className={'container ' + s.contactsAndMap__container}>
        <div>
          <h1>Контакти</h1>

          <address>
            <h2>Адреса</h2>
            <ul>
              <li className={s.contactsAddressItem}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA"
                >
                  м.Київ, вул. Івана Федорова, 33
                </a>
              </li>
              <li className={s.contactsAddressItem}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/AwovKjfD7p53WbF56"
                >
                  м.Київ, вул. Колоскова 9 (район Совського кладовища)
                </a>
              </li>
            </ul>
            <h2>Телефон</h2>
            <ul>
              <li>
                <a href="tel:+380672459505">+38 (067) 245 95 05</a>
              </li>
              <li>
                <a href="tel:+380442322408">+38 (044) 232 24 08</a>
              </li>
              <li>
                <a href="tel:+380995062408">+38 (099) 506 24 08</a>
              </li>
              <li>
                <a href="tel:+380667858127">+38 (066) 785 81 27</a>
              </li>
            </ul>

            <p>Щоденно | Цілодобово</p>
          </address>

          <ButtonGetConsultation />
        </div>

        <div className={s.contactsMapContainer}>
          <h2>на мані</h2>
          <div className={s.mapContainer}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionContactsAndMap;
