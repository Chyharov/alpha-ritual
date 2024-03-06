import React, { useState } from "react";
import PhotoSlider from "components/PhotoSlider/PhotoSlider";
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionCrosses.module.scss'

const CrossesPictureList = [
      { id: 1, src: require('../../images/crosses/crosses1.webp'), alt: 'Зображення 1', width: '120', height: '90' },
      { id: 2, src: require('../../images/crosses/crosses2.webp'), alt: 'Зображення 2', width: '120', height: '90' },
      { id: 3, src: require('../../images/crosses/crosses3.webp'), alt: 'Зображення 3', width: '120', height: '90' },
      { id: 4, src: require('../../images/crosses/crosses4.webp'), alt: 'Зображення 4', width: '120', height: '90' },
      { id: 5, src: require('../../images/crosses/crosses5.webp'), alt: 'Зображення 5', width: '120', height: '90' },
      { id: 6, src: require('../../images/crosses/crosses6.webp'), alt: 'Зображення 6', width: '120', height: '90' },
      { id: 7, src: require('../../images/crosses/crosses7.webp'), alt: 'Зображення 7', width: '120', height: '90' },
      { id: 8, src: require('../../images/crosses/crosses8.webp'), alt: 'Зображення 8', width: '120', height: '90' },
      { id: 9, src: require('../../images/crosses/crosses9.webp'), alt: 'Зображення 9', width: '120', height: '90' },
      { id: 10, src: require('../../images/crosses/crosses10.webp'), alt: 'Зображення 10', width: '120', height: '90' },
      { id: 11, src: require('../../images/crosses/crosses11.webp'), alt: 'Зображення 11', width: '120', height: '90' },
      { id: 12, src: require('../../images/crosses/crosses12.webp'), alt: 'Зображення 12', width: '120', height: '90' },
];

const whyArtificialWreath = [
  { id: 1, title: "Жодних церковних заборон із цього приводу немає. Справа не в православних канонах, проблема виключно у практичній площині. Вилучення грунту під час копання могильної ями, а потім його повернення в могилу після поховання робить землю спушеною, а значить, об’ємною та нестабільною." },
  { id: 2, title: "Споруджувати якийсь більш-менш монументальний пам’ятник з важкого каменю на нестабільний ґрунт просто недоцільно. Монумент перекоситься, опорні блоки проваляться, а сама кам’яна композиція трісне або зовсім зруйнується. Залежно від виду ґрунту, його вологості та глибини могили процес осідання та стабілізації може зайняти від одного до п’яти років." },
  { id: 3, title: "Протягом усього терміну опади ґрунту над могилою хрещеної православної людини височить легкий дерев’яний чи металевий ритуальний хрест із іменною табличкою. Його маса не настільки велика, щоб спровокувати сильне просідання ґрунту, а отже, весь перший та наступні роки до встановлення пам’ятника хрест виконуватиме свою функцію – оберігатиме спокій православного покійного та позначатиме місце його могили." },
];

const WhichRitualCross = [
  { id: 1, title: "У цьому питанні потрібно керуватися виключно особистими уподобаннями рідних та близьких покійного, православними канонами та практичними аспектами." },
  { id: 2, title: "Православ’я загалом не пред’являє жодних особливих суворих правил і церковних канонів, крім того, що ритуальний могильний хрест має бути православним, якщо покійний належить саме до цієї конфесії християнства." },
  { id: 3, title: "Висвітлення ритуального хреста, як і обряд відспівування покійного, можна провести у день поховання. Це робить священик, який приїде на церемонію прощання або безпосередньо до церкви, якщо покійного відспівують у храмі." },
  { id: 4, title: "З погляду практичності краще вибирати довговічні матеріали чи вироби, покриті гарним захистом від руйнівних атмосферних чинників. Це особливо важливо, якщо сім’я покійного не планує встановлювати пам’ятник найближчими роками з фінансових чи інших причин." },
  { id: 5, title: "Зовнішній вигляд ритуального хреста може бути будь-яким, але не порушуючим релігійні почуття інших православних людей – суворим, стриманим і без зайвого декору." },
];
  
const SectionCrosses = () => {
  const buttonDescription = 'Детальніше';
  const buttonShowAllDescription = 'Переглянути всі';
  const [showWhy, setShowWhy] = useState(false);
  const [showWhich, setShowWhich] = useState(false);
  const displayedWhyCantInstalMonument = showWhy ? whyArtificialWreath : whyArtificialWreath.slice(0, 1);
  const displayedWhichRitualCross = showWhich ? WhichRitualCross : WhichRitualCross.slice(0, 1);

  return (
    <section className={s.sectionCrosses}>
      <div className={`container ${s.crossesContainer}`}>

        <p className="description" style={{ marginBottom: '64px' }}>До встановлення постійного пам’ятника одразу після поховання на могилі хрещеного християнина ставлять ритуальний хрест, на якому закріплено табличку з прізвищем, ім’ям та датами народження та смерті померлого. Це давня християнська традиція, особливо шанована у православному світі. Поховальний дім «Альфа» бере на себе клопіт із виготовлення та встановлення ритуального дерев’яного чи металевого хреста, який повністю відповідає церковним канонам та культурним традиціям нашого народу.</p>
      
        <h2 className='title' style={{ marginBottom: '16px', textAlign: 'center' }}>Чому не можна встановлювати пам’ятник одразу після поховання?</h2>
      
        {displayedWhyCantInstalMonument.map((item) => (
          <p key={item.id} className="description" style={{ marginBottom: item.id === 3 ? '64px' : '16px' }}>{item.title}</p>
        ))}

        {!showWhy && (
          <ButtonMoreDetails style={{ marginTop: '8px', marginBottom: '64px' }} buttonDescription={buttonDescription} onClick={() => setShowWhy(true)} />  
        )}

        <h2 className='title' style={{ marginBottom: '16px', textAlign: 'center' }}>Який ритуальний хрест краще встановлювати на могилу?</h2>

        {displayedWhichRitualCross.map((item) => {
          if (item.id >= 2 && item.id <= 5) {
              return (
                <ul key={item.id} className="list" style={{ marginBottom: item.id === 5 ? '56px' : '0px' }}>
                  <li className="listItem">
                    <p className="description">{item.title}</p>
                  </li>
                </ul>
              );
            } else {
              return (
                <p key={item.id} className="description" style={{ marginBottom: '16px' }}>{item.title}</p>
              );
            }
          })}

        {!showWhich && (
          <ButtonMoreDetails style={{ marginTop: '8px', marginBottom: '64px' }} buttonDescription={buttonDescription} onClick={() => setShowWhich(true)} />  
        )}

        <h2 className='title' style={{ marginBottom: '16px', textAlign: 'center' }}>Хрести</h2>

        <PhotoSlider array={CrossesPictureList} />

        <ButtonMoreDetails style={{ marginBottom: '64px' }} buttonDescription={buttonShowAllDescription} />  
        
        <h2 className='title' style={{ marginBottom: '16px', textAlign: 'center' }}>Як замовити ритуальний хрест у Києві?</h2>

        <p className="description" style={{ marginBottom: '16px' }}>Поховальне бюро «Альфа» має власні виробничі потужності, які дозволяють виготовляти дерев’яні та металеві ритуальні хрести на могилу. Кожен виріб проходить ретельний контроль на предмет якості деревообробки та столярних робіт у дерев’яних моделях, а також якості металообробки та зварювання у металевих.</p>

        <p className="description" style={{ marginBottom: '16px' }}>У виробництві дерев’яних виробів ми використовуємо як недорогі, і цінні породи дерева. Завдяки цьому ми пропонуємо широку лінійку цін – від найбюджетніших варіантів, які, проте, тривалий час виконують свою практичну та сакральну функцію, так і елітні ритуальні хрести, які можна назвати витвором мистецтва.</p>

        <p className="description">Незалежно від основного матеріалу та цінової категорії, кожен виріб покривається довговічним лаком або фарбою, завдяки яким ритуальний хрест зберігає свій вигляд протягом декількох років в умовах суворих зим та спекотного літа.</p>

      </div>
    </section>
  );
};



export default SectionCrosses;
