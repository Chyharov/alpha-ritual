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
                <li className={s.phoneNumberItem}>+38 (067) 245 95 05</li>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNeedHelp;
