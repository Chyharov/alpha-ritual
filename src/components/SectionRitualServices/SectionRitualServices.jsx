import s from './SectionRitualServices.module.scss';

const SectionRitualServices = () => {

    return (
        <section className={s.SectionRitualServices}>
            <div className='container'>

                <h2 className='title' style={{ marginBottom: '40px', textAlign: 'center' }}>Ритуальні послуги</h2>
                
                <div className={s.ritualServicesContainer}>
                
                    <div className={s.ritualContainer}>
                        <h2 className={s.ritualListTitle} style={{ textAlign: 'end' }}>Поховання</h2>
                        <ul className={s.ritualServicesList}>
                            <li style={{ marginRight: '16px' }} className={s.ritualServiceListItem}><div className={s.containerRitualServiceListItem}>Економ</div></li>
                            <li style={{ marginRight: '16px' }} className={s.ritualServiceListItem}><div className={s.containerRitualServiceListItem}>Стандарт</div></li>
                            <li className={s.ritualServiceListItem}><div className={s.containerRitualServiceListItem}>VIP</div></li>
                        </ul>
                    </div>

                    <div className={s.cremationContainer}>
                        <h2 className={s.ritualListTitle}>Кремація</h2>
                        <ul className={s.crimationServicesList}>
                            <li style={{ marginRight: '16px' }} className={s.ritualServiceListItem}><div className={s.containerRitualServiceListItem}>Економ</div></li>
                            <li style={{ marginRight: '16px' }} className={s.ritualServiceListItem}><div className={s.containerRitualServiceListItem}>Стандарт</div></li>
                            <li className={s.ritualServiceListItem}><div className={s.containerRitualServiceListItem}>VIP</div></li>
                        </ul>
                    </div>
                
                </div>
                
            </div>
        </section>
    );
};

export default SectionRitualServices;
