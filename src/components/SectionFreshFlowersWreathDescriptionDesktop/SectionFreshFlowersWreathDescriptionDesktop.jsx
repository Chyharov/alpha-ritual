import GalleryWithTitleAndButtonMoreDetails from '../../components/GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionFreshFlowersWreathDescriptionDesktop.module.scss';

const SectionFreshFlowersWreathDescriptionDesktop = ({
  array,
  buttonDescription,
  link,
  titleForGallery,
  titleForModalWindow,
  titleForSectionGalleryDesktop,
  DescriptionForSectionGalleryDesktop,
}) => {
  return (
    <section className={s.sectionFreshFlowersWreathDescriptionDesktop}>
      <div className="container">
        <h2
          className="title"
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          {titleForSectionGalleryDesktop}
        </h2>

        <div className={s.freshFlowersWreathDescriptionDesktopContainer}>
          <div className={s.flowersWreathDescriptionContainer}>
            {DescriptionForSectionGalleryDesktop.map(desk => (
              <p key={desk.id} className="description">
                {desk.description}
              </p>
            ))}
          </div>

          <GalleryWithTitleAndButtonMoreDetails
            array={array}
            buttonDescription={buttonDescription}
            link={link}
            titleForGallery={titleForGallery}
            titleForModalWindow={titleForModalWindow}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathDescriptionDesktop;
