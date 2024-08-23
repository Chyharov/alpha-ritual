import GalleryWithTitleAndButtonMoreDetails from '../GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionStandartCoffinsDesktop.module.scss';

const SectionStandartCoffinsDesktop = ({
  coffinsPictureStandartPrice,
  buttonDescription,
  standartCoffinsLink,
  standartTitleForGallery,
  standartTitleForModalWindow,
}) => {
  return (
    <section className={s.sectionStandartCoffinsDesktop}>
      <div className='container'>
        <div className={s.standartCoffinsContainerDesktop}>
          <div className={s.standartCoffinsContainer}>
            <h2 className="title" style={{marginBottom: '40px'}}>Стандартні та недорогі бюджетні труни</h2>
            <p className="description">
              Вартість стандартної дерев’яної ритуальної труни середнього
              цінового рівня в нашому поховальному бюро також є однією з
              найдоступніших у Києві завдяки чесному відношенню до виробництва
              та ціноутворення. У виробництві недорогих стандартних моделей
              середньоцінового рівня ми використовуємо недорогу, але міцну
              деревину, яка після ретельної обробки набуває урочистого вигляду,
              що відповідає траурному заходу. Внутрішня оббивка виконується за
              допомогою недорогого, але якісного та приємного на вигляд
              текстилю.
            </p>
          </div>

          <GalleryWithTitleAndButtonMoreDetails
            array={coffinsPictureStandartPrice}
            buttonDescription={buttonDescription}
            link={standartCoffinsLink}
            titleForGallery={standartTitleForGallery}
            titleForModalWindow={standartTitleForModalWindow}
            style={{ marginRight: '64px' }}
          />
        </div>
      <div className="outline"></div>
      </div>
    </section>
  );
};

export default SectionStandartCoffinsDesktop;
