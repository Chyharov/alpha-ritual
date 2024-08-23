import GalleryWithTitleAndButtonMoreDetails from '../GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionEconomCoffinsDesktop.module.scss';

const SectionEconomCoffinsDesktop = ({
  coffinsPictureEconomPrice,
  buttonDescription,
  economCoffinsLink,
  economTitleForGallery,
  economTitleForModalWindow,
}) => {
  return (
    <section className={s.sectionEconomCoffinsDesktop}>
      <div className="container">
        <div className={s.economCoffinsContainerDesktop}>
          <div className={s.economCoffinsContainer}>
            <h2
              className="title"
              style={{ textAlign: 'end', marginBottom: '40px' }}
            >
              Економ труни
            </h2>
            <p className="description">
              Труна не обов’язково повинна бути елітною з цінних порід дерева з
              багатою внутрішньою оббивкою вишуканими тканинами. Це може бути і
              зовсім недорога труна. При цьому його скромне, але урочисте
              оформлення недорогими тканинами, що відповідають жалобній
              церемонії, підкреслить всю повноту поваги до покійного.
            </p>
          </div>

          <GalleryWithTitleAndButtonMoreDetails
            array={coffinsPictureEconomPrice}
            buttonDescription={buttonDescription}
            link={economCoffinsLink}
            titleForGallery={economTitleForGallery}
            titleForModalWindow={economTitleForModalWindow}
            style={{ marginRight: '64px' }}
          />
        </div>
        <p className="description">
          У нашому ритуальному бюро ви можете замовити як елітну, так і недорогу
          бюджетну труну для самостійної організації поховання. Також у вас є
          можливість безкоштовно викликати додому у будь-який час доби
          поховального агента, який допоможе вам організувати всю жалобну
          церемонію та підібрати труну відповідно до бюджету та статусу
          покійного.
        </p>
      </div>
    </section>
  );
};

export default SectionEconomCoffinsDesktop;
