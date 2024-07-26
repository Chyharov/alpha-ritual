import React from 'react';
import s from './SectionMakingFuneralWreath.jsx.module.scss';

const wreathsMAkingDescriptionArray = [
  { id: 1, title: "Незважаючи на досить вільні традиції та відсутність чітких ритуальних засад, існують деякі правила, що склалися в культурі нашого народу, яких прийнято дотримуватися." },
  { id: 2, title: "Не більше п’яти видів квітів в одній жалобній композиції." },
  { id: 3, title: "Насичені глибокі кольори використовують у центрі вінка." },
  { id: 4, title: "Ялинові гілки та зелений декор краще вибирати темно-зеленого відтінку." },
  { id: 5, title: "Квіти та елементи декору блідих відтінків рожевого, блакитного та лимонного врівноважують насичені кольори." },
  { id: 6, title: "Найбільш придатні для поховального вінка – лілії, гвоздики, троянди та півонії." },
  { id: 7, title: "Для людей творчої натури та померлим у поважному віці використовують квіти червоних та темно-рожевих відтінків. Білі та фіолетові відтінки використовують у вінках на похороні молодих жінок." },
  { id: 8, title: "Флористи поховального будинку «Альфа» точно знають усі правила та традиції складання ритуальних вінків. Ви можете купити як окремо вінок на поховання з доставкою по Києву, так і замовити комплексне флористичне оформлення церемонії прощання." },
];

const SectionMakingFuneralWreath = () => {
  return (
    <section className={s.sectionMakingFuneralWreaths}>
      <div className={`container ${s.wreathsContainer}`}>
        {wreathsMAkingDescriptionArray.map(item => (
          <p key={item.id} className="description">{item.title}</p>
        ))}
      </div>
    </section>
  );
};

export default SectionMakingFuneralWreath;