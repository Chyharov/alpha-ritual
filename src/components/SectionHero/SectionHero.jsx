import s from '../SectionHero/SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.sectionHero} id='main'>
      <div className="container">
        <div className={s.hero__container}>
          <h1 className="title">СКЛАД-МАГАЗИН РИТУАЛЬНОЇ АТРИБУТИКИ</h1>
          <a
            href="https://goo.gl/maps/f8b4aQGY6j4d34Gu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={s.hero__address}>
              м.Київ, вул. Колоскова 9 (район Совського кладовища)
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
