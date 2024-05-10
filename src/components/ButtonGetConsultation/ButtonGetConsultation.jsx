import React, { useState, useEffect } from 'react';
import { FaTelegram } from 'react-icons/fa6';
import { FaViber } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import closeIcon from '../../images/closeIcon2.svg'
import s from './ButtonGetConsultation.module.scss';

const ButtonGetConsultation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  return (
    <>
      <button type="button" className={s.getConsultation} onClick={openModal}>
        Отримати консультацію
      </button>

          {isModalOpen && (
        <div className={s.bgShadow}>
          <div className={s.modal} onClick={handleOutsideClick}>
            <img className={s.btn__close} src={closeIcon} alt="closeIcon" onClick={closeModal}/>
            
            <div className={s.modalTitleContainer}>
                <h2 className={s.titleNeedHelp}>Потрібна допомога?</h2>
                    <div className={s.border}></div>
                <h3 className={s.titleCallUs}>Зателефонуйте нам</h3>
            </div>


                <ul className={s.phoneNumberList}>
                    <a className={s.phoneNumberListLink} href="tel:+380672459505">
                        <li className={s.phoneNumberItemMain}>
                            +38 (067) 245 95 05
                        </li>
                    </a>
                    <a className={s.phoneNumberListLink} href="tel:+380442322408">
                        <li className={s.phoneNumberItem}>
                            +38 (044) 232 24 08
                        </li>
                    </a>
                    <a className={s.phoneNumberListLink} href="tel:+380995069473">
                        <li className={s.phoneNumberItem}>
                            +38 (099) 506 94 73
                        </li>
                    </a>
                    <a className={s.phoneNumberListLink} href="tel:+380667858127">
                        <li className={s.phoneNumberItem}>
                            +38 (066) 7858127
                        </li>
                    </a>
                </ul>

            
                <ul className={s.contact__list}>
                  <li className={s.contact__item}>
                    <a
                      className={s.contact__links}
                      href="https://t.me/+380672459505"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram
                        className={`${s.contact__icons} ${s.icon__telegram}`}
                      />
                      <p className={s.contact__itemDescription}> Telegram</p>
                    </a>
                  </li>

                  <li className={s.contact__item}>
                    <a
                      className={s.contact__links}
                      href="viber://chat?number=+380672459505/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaViber className={`${s.contact__icons} ${s.icon__viber}`} />
                      <p className={s.contact__itemDescription}> Viber</p>
                    </a>
                  </li>

                  <li className={s.contact__item}>
                    <a
                      className={s.contact__links}
                      href="whatsapp://send?phone=+380672459505"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareWhatsapp
                        className={`${s.contact__icons} ${s.icon__whatsApp}`}
                      />
                      <p className={s.contact__itemDescription}> WhatsApp</p>
                    </a>
                  </li>
              </ul>
            <p className={s.contact__itemDescription}>Щоденно | Цілодобово</p>
        </div>
      </div>
      )}
    </>
  );
};

export default ButtonGetConsultation;
