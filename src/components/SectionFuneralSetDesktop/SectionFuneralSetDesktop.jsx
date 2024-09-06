import backgroundImageForDescriptionContainerDesktop from 'images/funeralSet/backgroundImageForDescriptionContainerDesktop.png'
import funeralSetBlur from 'images/funeralSet/funeralSetBlur.png'
import s from './SectionFuneralSetDesktop.module.scss';

const SectionFuneralSetDesktop = () => {
  return (
    <section className={s.sectionFuneralSetDesktop}>
      <div className="container">
        <h1 className="title" style={{ marginBottom: '40px'}}>Що входить до поховального набору?</h1>

        <div className={s.funeralSetDescriptionListContainer}>
          <img className={s.backgroundImageForDescriptionContainerDesktop} src={backgroundImageForDescriptionContainerDesktop} alt="backgroundImageForDescriptionContainerDesktop" />

          <ul className={s.funeralSetDescriptionList}>
            <li className={s.funeralSetDescriptionList__item}>
              <p className='secondaryDescription'>
                Під час відспівування покійний християнин має бути в нижньому
                хрестику, в його руках має бути хрест, а на голові налобний
                віночок зі святими образами. Все це ритуальне приладдя входить
                до стандартного поховального набору, який можна купити у
                православному храмі або замовити у нас.
              </p>
            </li>
            <li className={s.funeralSetDescriptionList__item}>
              <p className='secondaryDescription'>
                Читання священиком дозвільної молитви є ще одним важливим
                елементом обряду заупокійного відспівування. Текст дозвільної
                молитви рідні вкладають у руки покійного. Роздрукований текст
                молитви зі святими образами також входить до стандартного
                поховального набору.
              </p>
            </li>
            <li className={s.funeralSetDescriptionList__item}>
              <p className='secondaryDescription'>
                Під час церемонії відспівування чи то в церкві, чи в жалобній
                залі з виїздом священика, всі рідні покійного повинні тримати в
                руках палаючі церковні свічки, які також входять до звичайного
                поховального набору ритуального приладдя.
              </p>
            </li>
            <li className={s.funeralSetDescriptionList__item}>
              <p className='secondaryDescription'>
                Православні ритуальні приналежності також включають ікону
                Спасителя або Богоматері з немовлям Ісусом.
              </p>
            </li>
          </ul>
          <img className={s.funeralSetBlur} src={funeralSetBlur} alt="funeralSetBlur" />
        </div>
        <div className='outline'></div>
      </div>
    </section>
  );
};

export default SectionFuneralSetDesktop;
