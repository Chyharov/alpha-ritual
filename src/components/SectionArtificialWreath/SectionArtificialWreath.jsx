import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionArtificialWreath.module.scss'

const SectionArtificialWreath = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');
  const [selectedImageDescrtiption, setSelectedImageDescrtiption] = useState('');
    
  const ArtificialWreathsPictureList = [
      { id: 1, src: require('../../images/artificialWreaths/artificialWreaths3492.webp'), alt: 'Зображення 1', title: '210см' },
      { id: 2, src: require('../../images/artificialWreaths/artificialWreaths3499.webp'), alt: 'Зображення 2', title: '190см' },
      { id: 3, src: require('../../images/artificialWreaths/artificialWreaths3500.webp'), alt: 'Зображення 3', title: '210см' },
      { id: 4, src: require('../../images/artificialWreaths/artificialWreaths3502.webp'), alt: 'Зображення 4', title: '190см' },
      { id: 5, src: require('../../images/artificialWreaths/artificialWreaths3504.webp'), alt: 'Зображення 5', title: '190см' },
      { id: 6, src: require('../../images/artificialWreaths/artificialWreaths3506.webp'), alt: 'Зображення 6', title: '180см' },
      { id: 7, src: require('../../images/artificialWreaths/artificialWreaths3509.webp'), alt: 'Зображення 7', title: '180см' },
      { id: 8, src: require('../../images/artificialWreaths/artificialWreaths3510.webp'), alt: 'Зображення 8', title: '170см' },
      { id: 9, src: require('../../images/artificialWreaths/artificialWreaths3511.webp'), alt: 'Зображення 9', title: '160см' },
      { id: 10, src: require('../../images/artificialWreaths/artificialWreaths3515.webp'), alt: 'Зображення 10', title: '150см' },
      { id: 11, src: require('../../images/artificialWreaths/artificialWreaths3517.webp'), alt: 'Зображення 11', title: 'ППК' },
      { id: 12, src: require('../../images/artificialWreaths/artificialWreaths3518.webp'), alt: 'Зображення 12', title: '130см' },
      { id: 13, src: require('../../images/artificialWreaths/artificialWreaths3519.webp'), alt: 'Зображення 13', title: 'Пухнастий'},
      { id: 14, src: require('../../images/artificialWreaths/artificialWreaths3520.webp'), alt: 'Зображення 14', title: '210см' },
      { id: 15, src: require('../../images/artificialWreaths/artificialWreaths3521.webp'), alt: 'Зображення 15', title: '160см' },
      { id: 16, src: require('../../images/artificialWreaths/artificialWreaths3522.webp'), alt: 'Зображення 16', title: 'ППК' },
      { id: 17, src: require('../../images/artificialWreaths/artificialWreaths3523.webp'), alt: 'Зображення 17', title: 'Пухнастий' },
      { id: 18, src: require('../../images/artificialWreaths/artificialWreaths3524.webp'), alt: 'Зображення 18', title: 'Пухнастий' },
      { id: 19, src: require('../../images/artificialWreaths/artificialWreaths3525.webp'), alt: 'Зображення 19', title: '150см' },
      { id: 20, src: require('../../images/artificialWreaths/artificialWreaths3526.webp'), alt: 'Зображення 20', title: '150см' },
      { id: 21, src: require('../../images/artificialWreaths/artificialWreaths3527.webp'), alt: 'Зображення 21', title: '130см' },
      { id: 22, src: require('../../images/artificialWreaths/artificialWreaths3528.webp'), alt: 'Зображення 22', title: '160см' },
      { id: 23, src: require('../../images/artificialWreaths/artificialWreaths3529.webp'), alt: 'Зображення 23', title: '130см' },
      { id: 24, src: require('../../images/artificialWreaths/artificialWreaths3530.webp'), alt: 'Зображення 24', title: '130см' },
      
  ];
  
  const openModal = (src, alt, title) => {
    setSelectedImageSrc(src);
    setSelectedImageAlt(alt);
    setSelectedImageDescrtiption(title);
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

        <section className={s.sectionArtificialWreaths}>
          <div className={'container ' + s.artificialWreathsContainer}>
            <div className={s.artificialWreathsDescriptionContainer}>
              <p className="description" style={{marginBottom: '20px' }}>Штучні похоронні вінки та жалобні ритуальні кошики мають такий самий свіжий вигляд і не відштовхують своєю неприродністю та неживістю. Штучні флористичні жалобні композиції так само сповнені символізмом і здатні також як і звичайні квіти висловити вашу скорботу, любов і повагу до покійного.</p>
              <h2 className="title" style={{marginBottom: '20px' }}>Як вибрати ритуальний вінок зі штучних квітів</h2>
                <p className="description" style={{marginBottom: '20px' }}>Особливо суворих флористичних правил і релігійних канонів у християнстві щодо створення жалобних букетів, квіткових кошиків та вінків немає. Є лише традиції і символізм, що склався в культурі народів світу. Живі чи штучні квіти символізують вічне кохання, а вінки ще з язичницьких часів одягали на голови померлих, як символ переходу у більш досконалий світ на небесах. Ця традиція перейшла і в християнський світ, де квітами ми святкуємо перехід душі померлої близької людини до Царства Небесного.</p>
                <p className="description" style={{marginBottom: '20px' }}>Штучні квіткові композиції на похороні можуть бути не лише у вигляді вінка, а й як ідеально злагоджена траурна ікебана у кошику, у формі монограми або як надгробний букет. Такі похоронні композиції зі штучних квітів хоч і не регламентуються суворими правилами, але складаються відповідно до культурних традицій, що склалися.</p>
                
                <h2 className="title" style={{marginBottom: '20px' }}>Форма та склад жалобних штучних вінків</h2>
                    
                <p className="description" style={{marginBottom: '20px' }}>Ритуальний вінок може бути будь-якої форми. Він висловлює почуття, відчуття і ставлення до покійного людини, яка виключно підносить таку композицію. Серед найпоширеніших форм:</p>

                <ul className={s.artificialWreath__list}>
                    <li className={s.artificialWreath__listItem}><p className="description" style={{marginBottom: '20px' }}><b>Круглий</b> – найдавніший символ нескінченності буття та відродження. Це сонце як джерело вічного життя. Круглі вінки можуть бути складені кільцем або із суцільним заповненням живими квітами.</p></li>
                    <li className={s.artificialWreath__listItem}><p className="description" style={{marginBottom: '20px' }}><b>Серце</b> – найвідоміший символ кохання, який виражає щирі почуття до померлого та їх нетлінність навіть після смерті.</p></li>
                    <li className={s.artificialWreath__listItem}><p className="description" style={{marginBottom: '20px' }}><b>Крапля</b> – традиційний у нашій культурі жалобний вінок. Каплеподібна форма символізує скорботу і смуток за вчасною втратою дорогої людини. Така форма за іншою версією символізує полум’я, що очищає, спрямоване вгору на небеса.</p></li>
                </ul>
                
                <p className="description" style={{marginBottom: '20px' }}>Символізм мають і самі штучні квіти, кількість їх видів та кольорова гама:</p>

                <ul className={s.artificialWreath__list}>
                    <li className={s.artificialWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>молодим непорочним дівчатам та дітям подають вінки з білих та фіолетових троянд або лілій, як символ чистоти душі;</p></li>
                    <li className={s.artificialWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>тим, хто прожив важке життя і військовим вінки на похорон складають переважно з червоних штучних троянд і гвоздик;</p></li>
                    <li className={s.artificialWreath__listItem}><p className="description" style={{marginBottom: '20px' }}>для вираження глибокої скорботи вінок прикрашають ялиновими гілками.</p></li>
                </ul>
                
                <p className="description" style={{marginBottom: '20px' }}>Використовують трохи більше п’яти видів квіток. Не можна перевантажувати вінок занадто темними, чорними та темно-червоними штучними кольорами. Це ще більше посилить траурну обстановку на похороні та погіршить емоційний стан усіх присутніх на церемонії прощання.</p>
                
                <h2 className="title" style={{marginBottom: '20px' }}>Чому штучні квіти найкращі для жалобного вінка?</h2>
                
                <p className="description" style={{marginBottom: '20px' }}>Флористи похоронного будинку «Альфа» складають будь-які траурні композиції з ботанічних копій різних видів квітів та рослин. Букети, надгробні квіткові монограми та похоронні вінки складаються з сучасного флористичного матеріалу, який природно виглядає і коштує недорого.</p>
                
                <p className="description" style={{marginBottom: '20px' }}>Натуральність зовнішнього вигляду, постійна «свіжість» та порівняно низька ціна – головні переваги штучних кольорів, які ми використовуємо при складанні жалобних кошиків та вінків для похорону.</p>
                
                <p className="description" style={{marginBottom: '20px' }}>Ми підберемо для вас ідеальну композицію, щоб ви змогли наповнити своїми символами кожну квітку та кожну гілку у вінку. Такий символізм допоможе вам висловити любов і скорботу через вчасну втрату, повагу і повагу до померлої близької людини, християнські сподівання набуття Царства Небесного і вічного життя на небесах.</p>
                    
                <ul className={s.artificialWreath__pictureList}>
                    {ArtificialWreathsPictureList.map((image) => (
                    <li className={s.artificialWreath__pictureListItem} key={image.id}>
                        <img className={s.artificialWreathPictureList_img} src={image.src} alt={image.alt} onClick={() => openModal(image.src, image.alt, image.title)}/>
                        <h2 className="title">{image.title}</h2>
                    </li>
                    ))}
                </ul>
            
                {modalOpen && (
                  <ModalWindow
                    selectedImageSrc={selectedImageSrc}
                    selectedImageAlt={selectedImageAlt}
                    closeModal={closeModal}
                    selectedImageDescrtiption={selectedImageDescrtiption}
                  />
                )}
            
            </div>
          </div>
        </section>
    );
  };

export default SectionArtificialWreath;