import PhotoSlider from "components/PhotoSlider/PhotoSlider";
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFuneralSet.module.scss'

const funeralSetPictureList = [
        { id: 1, src: require('../../images/funeralSet/funeralSet1.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/funeralSet/funeralSet2.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/funeralSet/funeralSet3.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/funeralSet/funeralSet4.jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/funeralSet/funeralSet5.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/funeralSet/funeralSet6.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/funeralSet/funeralSet7.jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/funeralSet/funeralSet8.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/funeralSet/funeralSet9.jpg'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/funeralSet/funeralSet10.jpg'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/funeralSet/funeralSet11.jpg'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/funeralSet/funeralSet12.jpg'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/funeralSet/funeralSet13.jpg'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/funeralSet/funeralSet14.jpg'), alt: 'Зображення 14' },
];

const buttonShowAll = 'Переглянути всі';

const SectionFuneralSet = () => {

    return (
        <section className={s.funeralVases}>
          <div className={'container ' + s.funeralVasesContainer}>
                
          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Поховальний набір</h2>
          
          <p className="description" style={{ marginBottom: '64px' }}>Ритуальне приладдя – це невід’ємний атрибут традиційного обряду поховання православного християнина. Без такого поховального набору неможливо провести церковне відспівування покійного. Поховальний будинок «Альфа» бере на себе весь клопіт з організації похорону, у тому числі й у такому делікатному питанні, як дотримання заупокійних церковних обрядів.</p>

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Що входить до поховального набору?</h2>

          <ul className="list" style={{ marginBottom: '64px' }}>
            <li className="listItem"><p className="description">Під час відспівування покійний християнин має бути в нижньому хрестику, в його руках має бути хрест, а на голові налобний віночок зі святими образами. Все це ритуальне приладдя входить до стандартного поховального набору, який можна купити у православному храмі або замовити у нас.</p></li>
            <li className="listItem"><p className="description">Під час церемонії відспівування чи то в церкві, чи в жалобній залі з виїздом священика, всі рідні покійного повинні тримати в руках палаючі церковні свічки, які також входять до звичайного поховального набору ритуального приладдя.</p></li>
            <li className="listItem"><p className="description">Читання священиком дозвільної молитви є ще одним важливим елементом обряду заупокійного відспівування. Текст дозвільної молитви рідні вкладають у руки покійного. Роздрукований текст молитви зі святими образами також входить до стандартного поховального набору.</p></li>
            <li className="listItem"><p className="description">Православні ритуальні приналежності також включають ікону Спасителя або Богоматері з немовлям Ісусом.</p></li>
          </ul>

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Саван та поховальні покривала</h2>

          <p className="description" style={{ marginBottom: '16px' }}>Православний обряд поховання передбачає вбрання померлого перед похованням у білий одяг. Це символізує перетворення душі покійного і зв’язок його зі Спасителем, який після дива на горі Фавор засяяв білим шатами. Також це символізує духовну чистоту та дотримання всіх обітниць, даних при хрещенні. Адже не дарма саван схожий на хрестильні шати чи рушник для немовлят.</p>

          <p className="description" style={{ marginBottom: '16px' }}>Однак цієї традиції дотримуються не буквально. Символізм білих шат перенесений на поховальний саван – спеціальне біле або світле покривала, яким накривають покійного в труні. На ньому вишивають або друкують ритуальні образи та молитви. Іноді використовують просто світлий тюль чи атласні покривала без релігійної символіки, якими накривають покійного.</p>

          <p className="description" style={{ marginBottom: '56px' }}>Поховальний будинок «Альфа» співпрацює з прямими виробниками текстильних покривал, саванів та наборів ритуального приладдя, яке виготовляють у Києві та інших містах України. Саме тому ми пропонуємо всі поховальні набори за доступними цінами від виробника, не спекулюючи на горі та релігійних почуттях рідних покійного.</p>

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Поховальний набір</h2>

            <PhotoSlider array={funeralSetPictureList} />   

            <ButtonMoreDetails buttonDescription={buttonShowAll} />

          </div>
        </section>
    );
  };

export default SectionFuneralSet;
