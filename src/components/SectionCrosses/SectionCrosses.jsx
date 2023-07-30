import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionCrosses.module.scss'

const SectionCrosses = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageSrc, setSelectedImageSrc] = useState('');
    const [selectedImageAlt, setSelectedImageAlt] = useState('');

    const CrossesPictureList = [
      { id: 1, src: require('../../images/crosses/1.jpg'), alt: 'Зображення 1' },
      { id: 2, src: require('../../images/crosses/2.jpg'), alt: 'Зображення 2' },
      { id: 3, src: require('../../images/crosses/3.jpg'), alt: 'Зображення 3' },
      { id: 4, src: require('../../images/crosses/5-1.jpg'), alt: 'Зображення 4' },
      { id: 5, src: require('../../images/crosses/6.jpg'), alt: 'Зображення 5' },
      { id: 6, src: require('../../images/crosses/7.jpg'), alt: 'Зображення 6' },
      { id: 7, src: require('../../images/crosses/8.jpg'), alt: 'Зображення 7' },
      { id: 8, src: require('../../images/crosses/DSC_3520-kopiya.jpg'), alt: 'Зображення 8' },
      { id: 9, src: require('../../images/crosses/DSC_3524-kopiya.jpg'), alt: 'Зображення 9' },
      { id: 10, src: require('../../images/crosses/DSC_3525.jpg'), alt: 'Зображення 10' },
      { id: 11, src: require('../../images/crosses/DSC_3527.jpg'), alt: 'Зображення 11' },
      { id: 12, src: require('../../images/crosses/DSC_3531.jpg'), alt: 'Зображення 12' }
  ];

  const openModal = (src, alt) => {
    setSelectedImageSrc(src);
    setSelectedImageAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  return (
    <section className={s.sectionCrosses}>
          <div className={'container ' + s.crossesContainer}>
            <div className={s.crossesDescriptionContainer}>
                  
                <p className="description" style={{marginBottom: '20px' }}>До встановлення постійного пам’ятника одразу після похорону на могилі хрещеного християнина ставлять ритуальний хрест, на якому закріплено табличку з прізвищем, ім’ям та датами народження та смерті померлого. Це давня християнська традиція, особливо шанована у православному світі. Похоронний дім «Альфа та Омега» бере на себе клопіт із виготовлення та встановлення ритуального дерев’яного чи металевого хреста, який повністю відповідає церковним канонам та культурним традиціям нашого народу.</p>
                <h2 className="title">Чому не можна встановлювати пам’ятник одразу після похорону?</h2>
                <p className="description" style={{marginBottom: '20px' }}>Жодних церковних заборон із цього приводу немає. Справа не в православних канонах, проблема виключно у практичній площині. Вилучення грунту під час копання могильної ями, а потім його повернення в могилу після поховання робить землю спушеною, а значить, об’ємною та нестабільною.</p>  
                <p className="description" style={{marginBottom: '20px' }}>Споруджувати якийсь більш-менш монументальний пам’ятник з важкого каменю на нестабільний ґрунт просто недоцільно. Монумент перекоситься, опорні блоки проваляться, а сама кам’яна композиція трісне або зовсім зруйнується. Залежно від виду ґрунту, його вологості та глибини могили процес осідання та стабілізації може зайняти від одного до п’яти років.</p>
                <p className="description" style={{marginBottom: '20px' }}>Протягом усього терміну опади ґрунту над могилою хрещеної православної людини височить легкий дерев’яний чи металевий ритуальний хрест із іменною табличкою. Його маса не настільки велика, щоб спровокувати сильне просідання ґрунту, а отже, весь перший та наступні роки до встановлення пам’ятника хрест виконуватиме свою функцію – оберігатиме спокій православного покійного та позначатиме місце його могили.</p> 
                <h2 className="title">Який ритуальний хрест краще встановлювати на могилу?</h2>
                <p className="description" style={{marginBottom: '20px' }}>У цьому питанні потрібно керуватися виключно особистими уподобаннями рідних та близьких покійного, православними канонами та практичними аспектами.</p>

                <ul className={s.crosses__list}>
                    <li className={s.crosses__listItem}><p className="description" style={{marginBottom: '20px' }}>Православ’я загалом не пред’являє жодних особливих суворих правил і церковних канонів, крім того, що ритуальний могильний хрест має бути православним, якщо покійний належить саме до цієї конфесії християнства.</p></li>
                    <li className={s.crosses__listItem}><p className="description" style={{marginBottom: '20px' }}>Висвітлення ритуального хреста, як і обряд відспівування покійного, можна провести у день похорону. Це робить священик, який приїде на церемонію прощання або безпосередньо до церкви, якщо покійного відспівують у храмі.</p></li>
                    <li className={s.crosses__listItem}><p className="description" style={{marginBottom: '20px' }}>З погляду практичності краще вибирати довговічні матеріали чи вироби, покриті гарним захистом від руйнівних атмосферних чинників. Це особливо важливо, якщо сім’я покійного не планує встановлювати пам’ятник найближчими роками з фінансових чи інших причин.</p></li>
                    <li className={s.crosses__listItem}><p className="description" style={{marginBottom: '20px' }}>Зовнішній вигляд ритуального хреста може бути будь-яким, але не порушуючим релігійні почуття інших православних людей – суворим, стриманим і без зайвого декору.</p></li>
                </ul>
                
                <ul className={s.crosses__pictureList}>
                    {CrossesPictureList.map((image) => (
                    <li className={s.crosses__pictureListItem} key={image.id}>
                      <img
                        className={s.crossesPictureList_img}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => openModal(image.src, image.alt)}
                      />
                      </li>
                    ))}
                </ul>
                
                {modalOpen && (
                  <ModalWindow
                    selectedImageSrc={selectedImageSrc}
                    selectedImageAlt={selectedImageAlt}
                    closeModal={closeModal}
                  />
                )}
          
                <h2 className="title">Як замовити ритуальний хрест у Києві?</h2>
                <p className="description" style={{marginBottom: '20px' }}>Похоронне бюро «Альфа» має власні виробничі потужності, які дозволяють виготовляти дерев’яні та металеві ритуальні хрести на могилу. Кожен виріб проходить ретельний контроль на предмет якості деревообробки та столярних робіт у дерев’яних моделях, а також якості металообробки та зварювання у металевих.</p>
                <p className="description" style={{marginBottom: '20px' }}>У виробництві дерев’яних виробів ми використовуємо як недорогі, і цінні породи дерева. Завдяки цьому ми пропонуємо широку лінійку цін – від найбюджетніших варіантів, які, проте, тривалий час виконують свою практичну та сакральну функцію, так і елітні ритуальні хрести, які можна назвати витвором мистецтва.</p>
                <p className="descriptionNoMargin">Незалежно від основного матеріалу та цінової категорії, кожен виріб покривається довговічним лаком або фарбою, завдяки яким ритуальний хрест зберігає свій вигляд протягом декількох років в умовах суворих зим та спекотного літа.</p>
                  
            </div>
          </div>
        </section>
  );
};



export default SectionCrosses;
