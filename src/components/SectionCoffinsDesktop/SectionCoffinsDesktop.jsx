import GalleryWithTitleAndButtonMoreDetails from '../../components/GalleryWithTitleAndButtonMoreDetails/GalleryWithTitleAndButtonMoreDetails';
import s from './SectionCoffinsDesktop.module.scss';

const SectionCoffinsDesktop = ({
  array,
  buttonDescription,
  link,
  titleForGallery,
  titleForModalWindow,
}) => {
  return (
    <section className={s.sectionCoffinsDesktop}>
      <div className="container">
        <div className={s.eliteCoffinsContainerDesktop}>
          <div className={s.eliteCoffinsContainer}>
            <div className={s.eliteCoffinsDescriptionContainerWithGallery}>
              <h2 className="title" style={{ marginBottom: '40px' }}>
                Елітні дерев’яні труни та саркофаги
              </h2>

              <p className="description">
                Спосіб життя та навколишні людини предмети демонструють його
                статус і становище у суспільстві. Елітні автомобілі та
                нерухомість, дорогі предмети гардеробу та аксесуари – все це
                характерні атрибути високої статусності.
              </p>

              <p className="description">
                Поховання – це проводи померлої людини в останній шлях, а
                значить, це остання можливість віддати їй всю повноту почестей
                відповідно до її прижиттєвого статусу.
              </p>

              <p className="description">
                Елітна труна з цінних порід дерева ручної роботи з ідеальним
                опрацюванням найдрібніших деталей декору та фурнітури,
                бездоганним поліруванням та лакуванням – це демонстрація не
                просто статусності покійного, а й безмежної поваги до його
                близьких рідних, друзів та колег.
              </p>

              <p className="description">
                Поховальний дім «Альфа» – це понад 25 видів елітних дерев’яних
                трун власного виробництва. Завдяки відсутності посередників та
                власної майстерні ми пропонуємо ціни від виробника без зайвих
                націнок. Це може бути як стандартна дерев’яна лакована труна з
                елітних порід дерева з цільною кришкою, так і двокришковий
                саркофаг. Верхня кришка дозволяє відкрити на похованні обличчя
                та руки покійного, залишивши нижню частину тіла прихованою.
              </p>

              <p className="description">
                Ціна елітної лакованої дерев’яної труни або двокришкового
                саркофага залежить від породи дерева, глибини ручного
                опрацювання декору, якості лакофарбових матеріалів, оббивних
                тканин та фурнітури.
              </p>
            </div>

            <GalleryWithTitleAndButtonMoreDetails
              array={array}
              buttonDescription={buttonDescription}
              link={link}
              titleForGallery={titleForGallery}
              titleForModalWindow={titleForModalWindow}
              style={{ marginTop: '64px' }}
            />
          </div>
          <ul className={s.eliteCoffinsListDesktop}>
            <li className={s.eliteCoffinsListDesktop__item}>
              <p className="secondaryDescription">
                Для елітної внутрішньої оббивки та зовнішнього текстильного
                декору ми використовуємо Італійські тканини найвищої якості.
              </p>
            </li>
            <li className={s.eliteCoffinsListDesktop__item}>
              <p className="secondaryDescription">
                Тільки високоміцна престижна фурнітура, включаючи ручки та замки
                з дорогих металів.
              </p>
            </li>
            <li className={s.eliteCoffinsListDesktop__item}>
              <p className="secondaryDescription">
                Покриття дерева тільки найкращим лаком у кілька шарів, що робить
                поверхню ідеально рівною та з багатим блиском.
              </p>
            </li>
          </ul>

          <p className="description" style={{ marginBottom: '80px' }}>
            Кожна така труна робиться майстрами кілька днів, через що її
            вартість виходить порівняно високою. При цьому ми не женемося за
            надприбутком і пропонуємо чесні ціни, які повністю відображають всю
            повноту копіткої багатоденної праці майстрів і елітних матеріалів,
            що використовуються.
          </p>
          <div className="outline"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionCoffinsDesktop;
