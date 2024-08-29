import crossesDecoratinForDescription from 'images/crosses/crossesDecoratinForDescription.jpg'
import logoBackgroundCrosses from 'images/crosses/logoBackgroundCrosses.png'
import flowersBackgroundCrosses from 'images/crosses/flowersBackgroundCrosses.png'
import blurCrossesBackground from 'images/crosses/blurCrossesBackground.png'
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
              <p className='description' style={{ marginBottom: '116px' }}>У цьому питанні потрібно керуватися виключно особистими уподобаннями рідних та близьких покійного, православними канонами та практичними аспектами.</p>
      
                <ul className={s.crossesDescriptionList}>
                  <li>
                      <li className={s.crossesDescriptionList__item} style={{marginBottom: '24px'}}><p className='secondaryDescription'>Православ’я загалом не пред’являє жодних особливих суворих правил і церковних канонів, крім того, що ритуальний могильний хрест має бути православним, якщо покійний належить саме до цієї конфесії християнства.  </p></li>
                      <li className={s.crossesDescriptionList__item}><p className='secondaryDescription'>Висвітлення ритуального хреста, як і обряд відспівування покійного, можна провести у день поховання. Це робить священик, який приїде на церемонію прощання або безпосередньо до церкви, якщо покійного відспівують у храмі.</p></li>
                  </li>
                  <li>
                      <li className={s.crossesDescriptionList__item} style={{marginBottom: '24px'}}><p className='secondaryDescription'>З погляду практичності краще вибирати довговічні матеріали чи вироби, покриті гарним захистом від руйнівних атмосферних чинників. Це особливо важливо, якщо сім’я покійного не планує встановлювати пам’ятник найближчими роками з фінансових чи інших причин.</p></li>
                      <li className={s.crossesDescriptionList__item}><p className='secondaryDescription'>Зовнішній вигляд ритуального хреста може бути будь-яким, але не порушуючим релігійні почуття інших православних людей – суворим, стриманим і без зайвого декору.</p></li>
                  </li>
              </ul>
              <img className={s.logoBackgroundCrosses} src={logoBackgroundCrosses} alt="logoBackgroundCrosses" />
              <img className={s.flowersBackgroundCrosses} src={flowersBackgroundCrosses} alt="flowersBackgroundCrosses" />
              <img className={s.blurCrossesBackground} src={blurCrossesBackground} alt="blurCrossesBackground" />

              <div className='outline'></div>
          </div>
    </section>
  );
};

export default SectionCrossesDesktop;
