import GalleryWithTitleAndButtonMoreDetails from '../../components/GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionFreshFlowersWreathDescriptionDesktop.module.scss';

const freshFlowersWreathArray = [
  { id: 1, src: require('../../images/freshFlowersWreath/pict.jpg'), alt: 'Зображення 1' }
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
            array={freshFlowersWreathArray}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathDescriptionDesktop;
