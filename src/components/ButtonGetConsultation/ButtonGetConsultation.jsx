import React, { useState, useEffect } from 'react';
import { FaTelegram } from 'react-icons/fa6';
import { FaViber } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
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
        <div className={s.modal} onClick={handleOutsideClick}>
          <IoMdClose className={s.btn__close} onClick={closeModal} />
          <ul className={s.contact__list}>
            <li className={s.contact__item}>
              <a
                className={s.contact__links}
                href="https://t.me/+380939040707"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram
                  className={`${s.contact__icons} ${s.icon__telegram}`}
                />
                <p> Telegram</p>
              </a>
            </li>

            <li className={s.contact__item}>
              <a
                className={s.contact__links}
                href="viber://chat?number=+380939040707/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaViber className={`${s.contact__icons} ${s.icon__viber}`} />
                <p> Viber</p>
              </a>
            </li>

            <li className={s.contact__item}>
              <a
                className={s.contact__links}
                href="whatsapp://send?phone=+380939040707"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareWhatsapp
                  className={`${s.contact__icons} ${s.icon__whatsApp}`}
                />
                <p> WhatsApp</p>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ButtonGetConsultation;
