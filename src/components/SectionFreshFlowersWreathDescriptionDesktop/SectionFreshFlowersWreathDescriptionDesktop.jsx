import GalleryWithTitleAndButtonMoreDetails from '../../components/GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionFreshFlowersWreathDescriptionDesktop.module.scss';

const CoffinsPictureElitePrice = [
  { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePrice1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePrice2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePrice3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePrice4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePrice5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePrice6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePrice7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePrice8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePrice9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePrice10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePrice11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePrice12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePrice13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePrice14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePrice15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePrice16.jpg'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePrice17.jpg'), alt: 'Зображення 17' },
  { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePrice18.jpg'), alt: 'Зображення 18' },
  { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePrice19.jpg'), alt: 'Зображення 19' },
  { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePrice20.jpg'), alt: 'Зображення 20' },
  { id: 21, src: require('../../images/coffinsElitePrice/coffinsElitePrice21.jpg'), alt: 'Зображення 21' },
  { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePrice22.jpg'), alt: 'Зображення 22' },
  { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePrice23.jpg'), alt: 'Зображення 23' },
  { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePrice24.jpg'), alt: 'Зображення 24' },
  { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePrice25.jpg'), alt: 'Зображення 25' },
  { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePrice26.jpg'), alt: 'Зображення 26' },
  { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePrice27.jpg'), alt: 'Зображення 27' },
  { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePrice28.jpg'), alt: 'Зображення 28' },
];

const SectionFreshFlowersWreathDescriptionDesktop = () => {
  return (
    <section className={s.sectionFreshFlowersWreathDescriptionDesktop}>
      <div className="container">
        <div className={s.freshFlowersWreathDescriptionDesktopContainer}>
          <h2
            className="title"
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            Як живі квіти у жалобному вінку зберігають свою свіжість?
          </h2>

          <p>
            Каркас вінка із заднього боку затягнутий спеціальною
            декоративно-захисною тканиною, яка приховує зволожуючі блоки. Сама ж
            тканина перешкоджає швидкому випаровуванню вологи з рослин. Завдяки
            цьому живі квіти в жалобному вінку зберігають свій свіжий первісний
            вигляд весь час, поки триває жалобна церемонія прощання.
          </p>

          <p>
            Додатково до зволожуючого складу додаються спеціальні компоненти,
            які перешкоджають випаровуванню вологи з пелюсток та листя живих
            квітів у вінках. Аналогічно захищені квіткові кошики, надгробні
            композиції та траурні букети.
          </p>

          <p>
            Флористи поховального будинку «Альфа» підберуть для вас ідеальну
            композицію з живих квітів у вигляді жалобного вінка, кошика,
            монограми або букета на похорон. Ми вкладемо у кожну квітку свій
            символ, щоб ви змогли яскравіше висловити свої почуття до покійного.
            Ви можете купити вінок або жалобний кошик із живих квітів для
            покладання на похованні близької людини або замовити комплексне
            флористичне оформлення церемонії прощання.
          </p>

          <GalleryWithTitleAndButtonMoreDetails
            array={CoffinsPictureElitePrice}
            title="Елітні труни"
            material="Матеріал"
            materialDescription="дерев’яна заготовка покрита лаком"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathDescriptionDesktop;
