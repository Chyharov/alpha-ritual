import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './SectionWreaths.module.scss'

const wreathsDescriptionArray = [
  { id: 1, title: "Жодних суворих правил і особливо релігійних ритуальних канонів у цій справі немає. Кожен вирішує сам залежно від ситуації, статі, віку та прижиттєвих переваг покійного." },
  { id: 2, title: "Ви можете висловити свої почуття та пошану покійному навіть за допомогою звичайного букета живих квітів. Однак традиція покладати до труни померлого на поховальні вінки настільки вкоренилася у культурі нашого народу, що такий атрибут став одним із обов’язкових елементів поховальної церемонії." },
  { id: 3, title: "Ритуальне бюро «Альфа» займається у Києві та Київській області комплексною організацією поховання, у т.ч. та підбором жалобних вінків та квіткових композицій. Наші флористи створюють оригінальні квіткові композиції індивідуально для кожного покійного, враховуючи не лише його стать та вік, а й професійну діяльність, статус та становище у суспільстві." },
  { id: 4, title: "Крім вінка традиційної форми, ви можете купити на поховання ритуальний букет чи кошик із живими квітами. Це повністю відповідатиме жалобній церемонії, але дещо пом’якшить її сумне забарвлення. Традиція встеляти останній шлях на цвинтар квітами або покривати труну квітковими декоративними композиціями та монограмами спочатку і зародилася, щоб зменшити стрес рідних та близьких у цей сумний та емоційно важкий день." },
];

const SectionWreath = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedwreaths = showAll ? wreathsDescriptionArray : wreathsDescriptionArray.slice(0, 1);

  return (
    <section className={s.sectionWreaths}>
      <div className={`container ${s.wreathsContainer}`}>
        <h2 className={s.wreathsTitle}>Поховальний вінок чи композиція?</h2>

        {displayedwreaths.map((item) => (
            <p className={s.wreathsDescription} style={{ marginBottom: '16px' }}>{item.title}</p>
        ))}

        {!showAll && (
          <button className={s.buttonMoreDetails} onClick={() => setShowAll(true)}>Детальніше</button>
        )}

        <h2 className={s.wreathsTitle}>Які квіти найкращі для поховального вінка?</h2>

        <p className={s.wreathsDescription}>Це питання також жодними правилами, традиціями та християнськими ритуалами не регламентовано. Однак ритуальні поховальні вінки все ж таки можуть бути наповнені особливим символізмом, який виражається через колірну гаму та поєднання тих чи інших кольорів.</p>
        
        <ul className={s.wreathsList}>
          <li className={s.wreathsListItem}>
            <p className={s.wreathsDescription}>Білі лілії та троянди у поєднанні з фіалками символізують духовну чистоту.</p>
          </li>
          <li className={s.wreathsListItem}>
            <p className={s.wreathsDescription}>Червоні гвоздики та троянди – символ страждань та важкого земного життя покійного.</p>
          </li>
          <li className={s.wreathsListItem}>
            <p className={s.wreathsDescription}>Хвойні гілки у поєднанні з барвінком виражають вічне кохання до покійного.</p>
          </li>
          <li className={s.wreathsListItem}>
            <p className={s.wreathsDescription}>Гілки верби символізують перехід у Царство Небесне.</p>
          </li>
        </ul>

        <p className={s.wreathsDescription}>Звідси й пішла традиція покладати вінки з червоних гвоздик на похованнях чоловіків і особливо військових, як символ нелегкої частки солдата та важкої чоловічої праці.</p>

        <p className={s.wreathsDescription}>Білі квіти використовують у ритуальних поховальних квіткових композиціях для померлих непорочних дівчат та дітей.</p>

        <Link>Вінок із живих квітів</Link>
        <Link>Вінок із штучних квітів</Link>
        </div>
      </section>
  );
};



export default SectionWreath;