import { FaTelegram } from 'react-icons/fa6';
import { FaViber } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import s from './SectionNeedHelp.module.scss';

const SectionNeedHelp = () => {
  return (
    <section className={s.sectionNeedHelp}>
      <div className="container">
        <div className={s.sectionNeedHelpContainer}>
          <div className={s.sectionNeedHelpContainerList}>
            <h2
              className={s.needHelpTitle}
            >
              Потрібна допомога?
            </h2>

            <ul className={s.phoneNumberList}>
              <a className={s.phoneNumberListLink} href="tel:+380672459505">
                <li className={s.phoneNumberItem} style={{color: '#866929'}}>+38 (067) 245 95 05</li>
              </a>
              <a className={s.phoneNumberListLink} href="tel:+380442322408">
                <li className={s.phoneNumberItem}>+38 (044) 232 24 08</li>
              </a>
              <a className={s.phoneNumberListLink} href="tel:+380995069473">
                <li className={s.phoneNumberItem}>+38 (099) 506 94 73</li>
              </a>
              <a className={s.phoneNumberListLink} href="tel:+380667858127">
                <li className={s.phoneNumberItem}>+38 (066) 785 81 27</li>
              </a>
              <a className={s.phoneNumberListLink} href="tel:+3800939545423">
                <li className={s.phoneNumberItem}>+38 (093) 954 54 23</li>
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
      </div>
    </section>
  );
};

export default SectionNeedHelp;
