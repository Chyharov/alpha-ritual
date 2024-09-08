import backgroundImageForFuneralPortraiteDescriptionContainerDesktop from 'images/funeralSet/backgroundImageForFuneralPortraiteDescriptionContainerDesktop.png'
import backgroundImageForFuneralPortListDescriptionContainerDesktop from 'images/funeralSet/backgroundImageForFuneralPortListDescriptionContainerDesktop.png'
import funeralSetBlur from 'images/funeralSet/funeralSetBlur.png'
import s from './SectionFuneralPortraitDesktop.module.scss'

const SectionFuneralPortraitDesktop = () => {

    return (
        <section className={s.sectionFuneralPortraitDesktop}>
            <div className='container'>
                <div className={s.funeralPortraitDescriptionContainer}>
                    <img className={s.backgroundImageForFuneralPortraiteDescriptionContainerDesktop} src={backgroundImageForFuneralPortraiteDescriptionContainerDesktop} alt="backgroundImageForFuneralPortraiteDescriptionContainerDesktop" />
                    <div className={s.funeralPortraitListContainer}>
                        <h2 className='title' style={{ textAlign: 'end', marginBottom: '40px' }}>Традиції та пошана</h2>
                        <ul className={s.funeralPortraitList}>
                            <li className={s.funeralPortraitList__item}><p className='description'>Прижиттєвий портрет покійного на похованні символізує вічне життя його душі та пам’яті про нього у серцях усіх членів сім’ї, друзів та колег. Він наче вічно живий дивиться зі своєї фотографії на всіх присутніх на церемонії прощання з його фізичним тілом, залишаючись при цьому з рідними на духовному рівні.</p></li>
                            <li className={s.funeralPortraitList__item}><p className='description'>Портрет померлого виконує не лише символічну функцію, уособлюючи вічне життя та пам’ять, а й допомагає рідним та близьким покійного зменшити душевний біль та скорботу. Прижиттєве фото померлого з чорною стрічкою допомагає всім скорботним рідним та присутнім на похороні друзям зменшити стрес та гіркоту втрати. З психологічної точки зору це пояснюється контрастуванням життєрадісної особи на портреті з виглядом покійного в труні.</p></li>
                            <li className={s.funeralPortraitList__item}><p className='description'>Крім того, повноцінний урочистий портрет із жалобною чорною стрічкою – це данина повазі до померлої людини. Такої почесті раніше отримували лише вінценосні особи, великі полководці та шановні сини своєї батьківщини. Зараз зробити гарний фотопортрет з чорною стрічкою може практично кожен, тим самим віддавши останні почесті своїй померлій рідній людині.</p></li>
                        </ul>
                    </div>
                </div>
                
                <h2 className='title' style={{ marginBottom: '40px' }}>Фото з чорною стрічкою чи справжній портрет?</h2>
                <p className='description' style={{ marginBottom: '20px' }}>Цей вибір лежить виключно у площині переваг рідних покійного, його прижиттєвої волі, якщо така була, та виділеного бюджету на організацію поховання.</p>
                <div className={s.funeralPortraitListDescriptionContainer}>
                    <ul className={s.funeralPortraitListDescription}>
                        <li className={s.funeralPortraitListDescription__item}><p className='secondaryDescription'></p>Під час відспівування покійний християнин має бути в нижньому хрестику, в його руках має бути хрест, а на голові налобний віночок зі святими образами. Все це ритуальне приладдя входить до стандартного поховального набору, який можна купити у православному храмі або замовити у нас.</li>
                        <li className={s.funeralPortraitListDescription__item}><p className='secondaryDescription'></p>Читання священиком дозвільної молитви є ще одним важливим елементом обряду заупокійного відспівування. Текст дозвільної молитви рідні вкладають у руки покійного. Роздрукований текст молитви зі святими образами також входить до стандартного поховального набору.</li>
                        <li className={s.funeralPortraitListDescription__item}><p className='secondaryDescription'></p>Під час церемонії відспівування чи то в церкві, чи в жалобній залі з виїздом священика, всі рідні покійного повинні тримати в руках палаючі церковні свічки, які також входять до звичайного поховального набору ритуального приладдя.</li>
                        <li className={s.funeralPortraitListDescription__item}><p className='secondaryDescription'></p>Православні ритуальні приналежності також включають ікону Спасителя або Богоматері з немовлям Ісусом.</li>
                    </ul>
                    <img className={s.backgroundImageForFuneralPortListDescriptionContainerDesktop} src={backgroundImageForFuneralPortListDescriptionContainerDesktop} alt="backgroundImageForFuneralPortListDescriptionContainerDesktop" />
                <img className={s.funeralSetBlur} src={funeralSetBlur} alt="funeralSetBlur" />
                </div>
                
                <p className='description'>Будь-який портрет обрамляють у кадрі. Це може бути як елітний різьблений дерев’яний багет із позолоченням, так і зовсім недорогі бюджетні обрамлення. У будь-якому разі, яким би не був портрет на похованні, він виконуватиме свою сакральну функцію, символізуючи вічне життя покійного в пам’яті живих, і виражатиме всю повноту поваги до покійного.</p>
            </div>
        </section>
    );
  };

export default SectionFuneralPortraitDesktop;
