import GalleryWithTitleAndButtonMoreDetails from '../GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionPreviewGalleyDesktop.module.scss';

const SectionPreviewGalleyDesktop = ({
  array,
  buttonDescription,
  link,
  titleForGallery,
  titleForModalWindow,
  titleForSectionGalleryDesktop,
  DescriptionForSectionGalleryDesktop,
}) => {
  return (
    <section className={s.sectionPreviewGalleyDesktop}>
      <div className="container">
        <h2
          className="title"
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          {titleForSectionGalleryDesktop}
        </h2>

        <div className={s.previewGalleyDesktopContainer}>
          <div className={s.previewGalleyDesktopDescriptionContainer}>
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

export default SectionPreviewGalleyDesktop;
