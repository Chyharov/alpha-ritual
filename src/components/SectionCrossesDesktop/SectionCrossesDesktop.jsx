import crossesDecoratinForDescription from 'images/crosses/crossesDecoratinForDescription.jpg'
import s from './SectionCrossesDesktop.module.scss';

const SectionCrossesDesktop = () => {
  return (
    <section className={s.sectionCrossesDesktop}>
      <div className={`container ${s.crossesContainerDesktop}`}>
        <h2
          className="title"
          style={{ textAlign: 'end', marginBottom: '40px', position: 'sticky', zIndex: '1' }}
        >
          Чому не можна встановлювати пам’ятник одразу після поховання?
        </h2>
        <div className={s.crossesDescriptionContainer}>
          <p className="description">
            Жодних церковних заборон із цього приводу немає. Справа не в
            православних канонах, проблема виключно у практичній площині.
            Вилучення грунту під час копання могильної ями, а потім його
            повернення в могилу після поховання робить землю спушеною, а
            значить, об’ємною та нестабільною.
          </p>

          <p className="description">
            Споруджувати якийсь більш-менш монументальний пам’ятник з важкого
            каменю на нестабільний ґрунт просто недоцільно. Монумент
            перекоситься, опорні блоки проваляться, а сама кам’яна композиція
            трісне або зовсім зруйнується. Залежно від виду ґрунту, його
            вологості та глибини могили процес осідання та стабілізації може
            зайняти від одного до п’яти років.
          </p>

          <p className="description">
            Протягом усього терміну опади ґрунту над могилою хрещеної
            православної людини височить легкий дерев’яний чи металевий
            ритуальний хрест із іменною табличкою. Його маса не настільки
            велика, щоб спровокувати сильне просідання ґрунту, а отже, весь
            перший та наступні роки до встановлення пам’ятника хрест
            виконуватиме свою функцію – оберігатиме спокій православного
            покійного та позначатиме місце його могили.
          </p>
              </div>
              <img className={s.crossesDecoratinForDescription} src={crossesDecoratinForDescription} alt="crossesDecoratinForDescription" />
              <h2 className='title' style={{ marginBottom: '40px'}}>Який ритуальний хрест краще встановлювати на могилу?</h2>
              <p className='description'>У цьому питанні потрібно керуватися виключно особистими уподобаннями рідних та близьких покійного, православними канонами та практичними аспектами.</p>
      </div>
    </section>
  );
};

export default SectionCrossesDesktop;
