import GalleryWithTitleAndButtonMoreDetails from '../../components/GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionFreshFlowersWreathDescriptionDesktop.module.scss';

const SectionFreshFlowersWreathDescriptionDesktop = ({array, buttonDescription, link}) => {
  return (
    <section className={s.sectionFreshFlowersWreathDescriptionDesktop}>
      <div className="container">
          <h2
            className="title"
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            Як живі квіти у жалобному вінку зберігають свою свіжість?
          </h2>

        <div className={s.freshFlowersWreathDescriptionDesktopContainer}>
          <div className={s.flowersWreathDescriptionContainer}>
            <p className='description'>
              Каркас вінка із заднього боку затягнутий спеціальною
              декоративно-захисною тканиною, яка приховує зволожуючі блоки. Сама
              ж тканина перешкоджає швидкому випаровуванню вологи з рослин.
              Завдяки цьому живі квіти в жалобному вінку зберігають свій свіжий
              первісний вигляд весь час, поки триває жалобна церемонія прощання.
            </p>

            <p className='description'>
              Додатково до зволожуючого складу додаються спеціальні компоненти,
              які перешкоджають випаровуванню вологи з пелюсток та листя живих
              квітів у вінках. Аналогічно захищені квіткові кошики, надгробні
              композиції та траурні букети.
            </p>

            <p className='description'>
              Флористи поховального будинку «Альфа» підберуть для вас ідеальну
              композицію з живих квітів у вигляді жалобного вінка, кошика,
              монограми або букета на похорон. Ми вкладемо у кожну квітку свій
              символ, щоб ви змогли яскравіше висловити свої почуття до
              покійного. Ви можете купити вінок або жалобний кошик із живих
              квітів для покладання на похованні близької людини або замовити
              комплексне флористичне оформлення церемонії прощання.
            </p>
          </div>

          <GalleryWithTitleAndButtonMoreDetails
            array={array}
            buttonDescription={buttonDescription}
            link={link}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathDescriptionDesktop;
