import { FC } from 'react';
import Breadcrumb from '../Breadcrumb';
import CalendarButtons from '../buttons/CalendarButtons';
import SharedButtons from '../buttons/SharedButtons';
import EventDetailsComponent from '../event/EventDetails';

const LeftBanner: FC = () => {
    return (
        <section className='w-full px-4 md:px-6 lg:w-2/3 lg:px-8'>
            <Breadcrumb />
            <EventDetailsComponent
                title='5. Central European Endoscopic Ear Surgery Course'
                type='KONGRES'
                organizer='ÚVN Praha, VLF UO, Společnost vojenské medicíny ČLS JEP'
                date='7. - 9. října 2024'
                location={{
                    name: 'Ústřední vojenská nemocnice',
                    address: 'U Vojenské nemocnice 1200, Praha 6, 169 02',
                }}
                language='Čeština'
                website='https://www.congressprague.cz/kongresy/vojaci68.html'
            />
            <hr className='my-4 md:my-6' />
            <div className='mt-6 flex flex-col items-start justify-between gap-6 md:mt-8 md:flex-row md:gap-10'>
                <CalendarButtons />
                <SharedButtons />
            </div>
        </section>
    );
};

export default LeftBanner;
