import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import freshflowerswreathImg from '../../images/wreaths/freshflowerswreathImg.jpg'
import artificialwreathsImg from '../../images/wreaths/artificialwreathsImg.jpg'
import s from './SectionWreaths.module.scss'

const wreathsDescriptionArray = [
  { id: 1, title: "Жодних суворих правил і особливо релігійних ритуальних канонів у цій справі немає. Кожен вирішує сам залежно від ситуації, статі, віку та прижиттєвих переваг покійного." },
  { id: 2, title: "Ви можете висловити свої почуття та пошану покійному навіть за допомогою звичайного букета живих квітів. Однак традиція покладати до труни померлого на поховальні вінки настільки вкоренилася у культурі нашого народу, що такий атрибут став одним із обов’язкових елементів поховальної церемонії." },
  { id: 3, title: "Ритуальне бюро «Альфа» займається у Києві та Київській області комплексною організацією поховання, у т.ч. та підбором жалобних вінків та квіткових композицій. Наші флористи створюють оригінальні квіткові композиції індивідуально для кожного покійного, враховуючи не лише його стать та вік, а й професійну діяльність, статус та становище у суспільстві." },
  { id: 4, title: "Крім вінка традиційної форми, ви можете купити на поховання ритуальний букет чи кошик із живими квітами. Це повністю відповідатиме жалобній церемонії, але дещо пом’якшить її сумне забарвлення. Традиція встеляти останній шлях на цвинтар квітами або покривати труну квітковими декоративними композиціями та монограмами спочатку і зародилася, щоб зменшити стрес рідних та близьких у цей сумний та емоційно важкий день." },
];

const wreathsDescriptionSecondArray = [
  { id: 1, title: "Незважаючи на досить вільні традиції та відсутність чітких ритуальних засад, існують деякі правила, що склалися в культурі нашого народу, яких прийнято дотримуватися." },
  { id: 2, title: "Не більше п’яти видів квітів в одній жалобній композиції." },
  { id: 3, title: "Насичені глибокі кольори використовують у центрі вінка." },
  { id: 4, title: "Ялинові гілки та зелений декор краще вибирати темно-зеленого відтінку." },
  { id: 5, title: "Квіти та елементи декору блідих відтінків рожевого, блакитного та лимонного врівноважують насичені кольори." },
  { id: 6, title: "Найбільш придатні для поховального вінка – лілії, гвоздики, троянди та півонії." },
  { id: 7, title: "Для людей творчої натури та померлим у поважному віці використовують квіти червоних та темно-рожевих відтінків. Білі та фіолетові відтінки використовують у вінках на похороні молодих жінок." },
  { id: 8, title: "Флористи поховального будинку «Альфа» точно знають усі правила та традиції складання ритуальних вінків. Ви можете купити як окремо вінок на поховання з доставкою по Києву, так і замовити комплексне флористичне оформлення церемонії прощання." },
  ];

const SectionWreath = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllSecond, setShowAllSecond] = useState(false);
  const displayedwreaths = showAll ? wreathsDescriptionArray : wreathsDescriptionArray.slice(0, 1);
  const displayedwreathsSecond = showAllSecond ? wreathsDescriptionSecondArray : wreathsDescriptionSecondArray.slice(0, 1);

  return (
    <section className={s.sectionWreaths}>
      <div className={`container ${s.wreathsContainer}`}>
        <h2 className={s.wreathsTitle}>Похороний вінок чи композиція?</h2>

        {displayedwreaths.map((item) => (
          <p key={item.id} className={s.wreathsDescription} style={{ marginBottom: '16px' }}>{item.title}</p>
        ))}

        {!showAll && (
          <button className={s.buttonMoreDetails} style={{ marginBottom: '64px', marginTop: '24px' }} onClick={() => setShowAll(true)}>Детальніше</button>
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

        <ul className={s.wreathsLinkList}>
          <Link to="/freshflowerswreath">
            <li style={{ backgroundImage: `url(${freshflowerswreathImg})`, marginBottom: '16px' }} className={s.wreathsLinkitem}>
              <h2 className='title'>Вінок із живих квітів</h2>
            </li>
          </Link>
          <Link to="/artificialwreaths">
            <li style={{ backgroundImage: `url(${artificialwreathsImg})` }} className={s.wreathsLinkitem}>
              <h2 className='title'>Вінок із штучних квітів</h2>
            </li>
          </Link>
        </ul>

        <h2 className={s.wreathsTitle}>Правила складання поховального вінка</h2>

        {displayedwreathsSecond.map((item, index) => {
          if (item.id >= 2 && item.id <= 6) {
            return (
              <ul key={item.id} className={s.wreathsList}>
                <li className={s.wreathsListItem}>
                  <p className={s.wreathsDescription}>{item.title}</p>
                </li>
              </ul>
            );
          } else {
            const isLastItem = index === displayedwreathsSecond.length - 1;
            return (
              <p key={item.id} className={s.wreathsDescription} style={{ marginBottom: isLastItem ? '0' : '16px' }}>{item.title}</p>
            );
          }
        })}

        {!showAllSecond && (
          <button className={s.buttonMoreDetails} style={{ marginTop: '24px' }} onClick={() => setShowAllSecond(true)}>Детальніше</button>
        )}

      </div>
    </section>
  );
};

export default SectionWreath;