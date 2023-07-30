import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionFreshFlowersWreath.module.scss'

const SectionFreshFlowersWreath = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

  const FreshFlowersWreathPictureList = [
  { id: 1, src: require('../../images/freshFlowersWreath/IMG-0033.png'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/freshFlowersWreath/IMG-0034.png'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/freshFlowersWreath/IMG-0036.png.webp'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/freshFlowersWreath/IMG-0037.png.webp'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/freshFlowersWreath/IMG-0041.png.webp'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/freshFlowersWreath/IMG-0067.png.webp'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/freshFlowersWreath/IMG-0068.png.webp'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/freshFlowersWreath/IMG-0483.jpg.webp'), alt: 'Зображення 8'},
  { id: 9, src: require('../../images/freshFlowersWreath/IMG-0484.jpg.webp'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/freshFlowersWreath/IMG-0485.jpg.webp'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/freshFlowersWreath/IMG-0486.jpg.webp'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/freshFlowersWreath/IMG-0487.jpg.webp'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/freshFlowersWreath/IMG-0488.jpg.webp'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/freshFlowersWreath/IMG-0493.jpg.webp'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/freshFlowersWreath/IMG-0494.jpg.webp'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/freshFlowersWreath/IMG-0495.jpg.webp'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/freshFlowersWreath/IMG-0496.jpg.webp'), alt: 'Зображення 17' },
  { id: 18, src: require('../../images/freshFlowersWreath/IMG-0497.jpg.webp'), alt: 'Зображення 18' },
  { id: 19, src: require('../../images/freshFlowersWreath/IMG-0498.jpg.webp'), alt: 'Зображення 19' },
  { id: 21, src: require('../../images/freshFlowersWreath/IMG-0499.jpg.webp'), alt: 'Зображення 21' },
  { id: 21, src: require('../../images/freshFlowersWreath/IMG-0500.jpg.webp'), alt: 'Зображення 21' },
  { id: 22, src: require('../../images/freshFlowersWreath/IMG-0501.jpg.webp'), alt: 'Зображення 22' },
  { id: 23, src: require('../../images/freshFlowersWreath/IMG-0502.jpg.webp'), alt: 'Зображення 23' },
  { id: 24, src: require('../../images/freshFlowersWreath/IMG-0644.jpg.webp'), alt: 'Зображення 24' },
  { id: 25, src: require('../../images/freshFlowersWreath/IMG-0646.jpg.webp'), alt: 'Зображення 25' },
  { id: 26, src: require('../../images/freshFlowersWreath/IMG-0647.jpg.webp'), alt: 'Зображення 26' },
  { id: 27, src: require('../../images/freshFlowersWreath/IMG-0648.jpg.webp'), alt: 'Зображення 27' },
  { id: 28, src: require('../../images/freshFlowersWreath/IMG-0651.jpg.webp'), alt: 'Зображення 28' },  
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
        <section className={s.sectionFreshFlowersWreath}>
          <div className={'container ' + s.wreathsContainer}>
            <div className={s.freshFlowersWreathDescriptionContainer}>
              <p className="description" style={{marginBottom: '20px' }}>Навіть для атеїстів та нерелігійних людей жалобні вінки з живих квітів на похороні – це символ поваги, вічного кохання та поваги до померлого. Квіткові композиції на церемонії прощання виконують і більш практичну функцію – згладити емоційне траурне напруження та зменшити стрес рідних та близьких покійного, які прийшли провести його в останню путь.</p>
              <h2 className="title">Вінки, квіткові кошики та траурні букети</h2>
              <p className="description" style={{marginBottom: '20px' }}>Вибір квіткової композиції, її форма, склад та колірна гама не регламентуються жодними жорсткими правилами та релігійними канонами, принаймні у християнстві. Це виключно особиста справа кожного та його спосіб висловити свою скорботу щодо втрати, безмежну любов і повагу до покійного. Похоронна квіткова композиція може бути у будь-якому вигляді:</p>
        
              <ul className={s.freshFlowersWreath__list}>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>вінок із живих квітів;</p></li>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>траурний букет;</p></li>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>квітковий кошик;</p></li>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>надгробна композиція;</p></li>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>монограма.</p></li>
              </ul>

              <p className="description" style={{marginBottom: '20px' }}>Незважаючи на відсутність будь-яких суворих правил, існують специфічні культурні традиції та символізм, який вкладають у траурну квіткову композицію.</p>

              <h2 className="title">Форма, склад та кольорова гама</h2>

              <p className="description" style={{marginBottom: '20px' }}>Сам вінок на похороні може бути будь-якої форми, найбільш традиційні три з них.</p>

              <ul className={s.freshFlowersWreath__list}>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}><b>Круглий</b> – найдавніший символ нескінченності буття та відродження. Це сонце як джерело вічного життя. Круглі вінки можуть бути складені кільцем або із суцільним заповненням живими квітами.</p></li>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}><b>Серце</b> – найвідоміший символ кохання, який виражає щирі почуття до померлого та їх нетлінність навіть після смерті.</p></li>
                <li className={s.freshFlowersWreath__listItem}><p className="description" style={{marginBottom: '20px' }}><b>Крапля</b> – традиційний у нашій культурі жалобний вінок. Каплеподібна форма символізує скорботу і смуток за вчасною втратою дорогої людини. Така форма за іншою версією символізує полум’я, що очищає, спрямоване вгору на небеса.</p></li>
              </ul>
            
              <p className="description" style={{marginBottom: '20px' }}>Традиційно червоними живими квітами (цвяхами та трояндами) прикрашають жалобні вінки на похоронах чоловіків та людей з тяжкою долею. Фіолетові або білі троянди та лілії використовують для похоронних квіткових композицій для покійних молодих дівчат та дітей як символ духовної чистоти. Гілки сосни, ялиці та туї – символ любові до покійного та скорботи за втратою. У православній традиції використовують і гілки верби як символізм переходу душі в Царство Небесне.</p>

              <p className="description" style={{marginBottom: '20px' }}>Вінки та букети не можна перевантажувати надто жалобними темними та темно-червоними живими квітами. Це посилить і без того важке емоційне тло на похороні. Самі ж композиції складають не більше п’яти видів квіток і рослинних елементів.</p>
          
              <h2 className="title">Як живі квіти у жалобному вінку зберігають свою свіжість?</h2>
          
              <p className="description" style={{marginBottom: '20px' }}>Каркас вінка із заднього боку затягнутий спеціальною декоративно-захисною тканиною, яка приховує зволожуючі блоки. Сама ж тканина перешкоджає швидкому випаровуванню вологи з рослин. Завдяки цьому живі квіти в жалобному вінку зберігають свій свіжий первісний вигляд весь час, поки триває жалобна церемонія прощання.</p>
          
              <p className="description" style={{marginBottom: '20px' }}>Додатково до зволожуючого складу додаються спеціальні компоненти, які перешкоджають випаровуванню вологи з пелюсток та листя живих квітів у вінках. Аналогічно захищені квіткові кошики, надгробні композиції та траурні букети.</p>
          
              <p className="description" style={{marginBottom: '20px' }}>Флористи похоронного будинку «Альфа» підберуть для вас ідеальну композицію з живих квітів у вигляді жалобного вінка, кошика, монограми або букета на похорон. Ми вкладемо у кожну квітку свій символ, щоб ви змогли яскравіше висловити свої почуття до покійного. Ви можете купити вінок або жалобний кошик із живих квітів для покладання на похороні близької людини або замовити комплексне флористичне оформлення церемонії прощання.</p>
          
              <ul className={s.freshFlowersWreathPictureList}>
                {FreshFlowersWreathPictureList.map((image) => (
                  <li className={s.freshFlowersWreathPictureList__item} key={image.id}>
                    <img className={s.freshFlowersWreathPictureList_img} src={image.src} alt={image.alt} onClick={() => openModal(image.src, image.alt)}/>
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
            
            </div>
          </div>
        </section>
    );
  };

export default SectionFreshFlowersWreath;
