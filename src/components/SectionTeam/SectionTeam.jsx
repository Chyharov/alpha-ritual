import array from '../SectionTeam/team.json';
import s from './SectionTeam.module.scss';

const SectionTeam = () => {
  return (
    <section className={s.team} id='сontacts'>
      <div className="container">
        <ul className={s.team__list}>
          {array.map(({ id, name, mobileNumber, homeNumber }) => (
            <li className={s.memberCard} key={id}>
              <div className={s.memberCard__content}>
                <h3 className={s.memberCard__name}>{name}</h3>
                <a
                  className={s.memberCard__position}
                  href={`tel:${mobileNumber}`}
                >
                  {mobileNumber}
                </a>
                <br />
                <a
                  className={s.memberCard__position}
                  href={`tel:${homeNumber}`}
                >
                  {homeNumber}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionTeam;
