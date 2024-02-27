import s from './SectionRitualGoodsList.module.scss';

const SectionRitualGoodsList = () => {

    return (
        <section className={s.sectionRitualGoodsList}>
            <div className='container'>

                <h2 className={s.ritualGoodsListTitle}>Ритуальні товари</h2>
                
                <p className={s.ritualGoodsListDescription}>Похороний дім "Альфа-ритуал" - наші фахівці допоможуть вам у важкі моменти життя. Ми розуміємо, наскільки важливо забезпечити гідне та шанобливе прощання з вашими близькими. Наша компанія готова надати вам широкий спектр ритуальних послуг та товарів, щоб зробити цей процес якомога менш тяжким.</p>
                <p className={s.ritualGoodsListDescription}>У нашому асортименті ви знайдете різноманітні ритуальні товари високої якості, які відповідають усім вашим побажанням та потребам. Ми пишаємось тим, що більшість товарів виготовляється безпосередньо на нашому власному виробництві, що дає нам можливість забезпечити контроль якості та зберегти доступні ціни.</p>
            
                <h2 className={s.ritualGoodsListTitle}>Наш асортимент</h2>

                <ul className={s.ritualGoodsList}>
                    <li className={s.ritualGoodsListItem}>
                        <p className={s.ritualGoodsListItemDescription}><span className={s.ritualGoodsListItemSpan}>Труни:</span> Ми пропонуємо широкий вибір трун різних дизайнів та матеріалів. Ви зможете знайти труну, яка відповідає індивідуальному смаку та бажанням.</p>
                    </li>
                    <li className={s.ritualGoodsListItem}>
                        <p className={s.ritualGoodsListItemDescription}><span className={s.ritualGoodsListItemSpan}>Хрести:</span> Наші хрести виготовляються з різних порід дерев, що додає особливого значення вашому прощанню. Кожен хрест має унікальний дизайн та докладається зі спеціальною увагою до деталей.</p>
                    </li>
                    <li className={s.ritualGoodsListItem}>
                        <p className={s.ritualGoodsListItemDescription}><span className={s.ritualGoodsListItemSpan}>Транспорт:</span> Одне із основних видів поховальних послуг, комплексну організацію яких ми повністю беремо він. Транспортування померлого по Києву до місця проведення церемонії прощання та після неї на цвинтар чи крематорій має відповідати ситуації та статусу покійного.</p>
                    </li>
                    <li className={s.ritualGoodsListItem}>
                        <p className={s.ritualGoodsListItemDescription}><span className={s.ritualGoodsListItemSpan}>Вінки, покривала, рушники:</span> Ми допоможемо вам підібрати відповідні аксесуари для оформлення церемонії. Від класичних до сучасних стилів – у нас є великий вибір, щоб ви змогли виразити свої почуття та шанобливо вшанувати пам'ять про вашого близького.</p>
                    </li>
                </ul>

                <p className={s.ritualGoodsListItemDescription} style={{padding: '8px' }}>Ми розуміємо, що цей час важкий, і завданням нашої компанії є надання вам підтримки та допомоги на кожному етапі організації прощання. Наша команда професіоналів готова допомогти вам з усіма питаннями та деталями, щоб забезпечити гідне та тепле прощання з вашим близьким</p>

            </div>
        </section>
    );
};

export default SectionRitualGoodsList;
