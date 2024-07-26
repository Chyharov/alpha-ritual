import React from 'react';
import s from './SectionMakingFuneralWreath.jsx.module.scss';

const wreathsMakingDescriptionArray = [
  { id: 1, title: "Не більше п’яти видів квітів в одній жалобній композиції." },
  { id: 2, title: "Не можна робити домінуючим чорний колір та поєднувати його з червоним. Така палітра кольору у вінках посилює пригнічення емоційного фону, чого не можна допускати на похованні."},
  { id: 3, title: "Насичені глибокі кольори використовують у центрі вінка." },
  { id: 4, title: "Ялинові гілки та зелений декор краще вибирати темно-зеленого відтінку." },
  { id: 5, title: "Квіти та елементи декору блідих відтінків рожевого, блакитного та лимонного врівноважують насичені кольори." },
  { id: 6, title: "Найбільш придатні для поховального вінка – лілії, гвоздики, троянди та півонії." },
];

const SectionMakingFuneralWreath = () => {
  return (
    <section className={s.sectionMakingFuneralWreaths}>
      <div className={`container ${s.wreathsMakingContainer}`}>

        <h2 style={{textAlign: 'end'}}>Правила складання поховального вінка</h2>

        <p style={{textAlign: 'end', margin: '0px 0px 0px auto', width: '692px'}}>Незважаючи на досить вільні традиції та відсутність чітких ритуальних засад, існують деякі правила, що склалися в культурі нашого народу, яких прийнято дотримуватися.</p>

          <ul className={s.wreathsMakingDescriptionList}>
            {wreathsMakingDescriptionArray.map(item => (
              <li className={s.wreathsMakingDescriptionList__item} key={item.id}>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>

        <p>Для людей творчої натури та померлим у поважному віці використовують квіти червоних та темно-рожевих відтінків. Білі та фіолетові відтінки використовують у вінках на похороні молодих жінок.</p>
        <p>складання ритуальних вінків. Ви можете купити як окремо вінок на поховання з доставкою по Києву, так і замовити комплексне флористичне оформлення церемонії прощання.</p>
      </div>
    </section>
  );
};

export default SectionMakingFuneralWreath;