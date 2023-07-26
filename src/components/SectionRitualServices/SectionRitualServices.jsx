import s from '../SectionRitualServices/SectionRitualServices.module.scss';
import SectionRitualCarParkList from '../SectionRitualCarParkList/SectionRitualCarParkList'

const SectionRitualServices = () => {
  return (
    <section className={s.sectionRitualServices} id='services'>
      <div className="container">
        <div className={s.ritualServices__container}>
          <h2 className="title">Ритуальні Послуги</h2>
          <p className="description">Одне із основних видів похоронних послуг, комплексну організацію яких ми повністю беремо він. Транспортування померлого по Києву до місця проведення церемонії прощання та після неї на цвинтар чи крематорій має відповідати ситуації та статусу покійного.</p>

          <SectionRitualCarParkList />
          
        </div>

      </div>
    </section>
  );
};

export default SectionRitualServices;
