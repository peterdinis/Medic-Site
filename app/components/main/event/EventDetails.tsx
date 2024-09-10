import { FC } from 'react';
import {
    FaUserAlt,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaLanguage,
    FaGlobe,
} from 'react-icons/fa';
import InfoItem from './InfoItem';
import { EventDetailsProps } from '@/app/interfaces/EventInterfaces';

const EventDetailsComponent: FC<EventDetailsProps> = ({
    title,
    type,
    organizer,
    date,
    location,
    language,
    website,
}) => {
    return (
        <article className='flex flex-col p-4 md:p-6'>
            <h1 className='text-lg font-semibold leading-tight text-neutral-900 md:text-xl lg:text-2xl'>
                {title}
            </h1>
            <div className='mt-2 flex items-center'>
                <span className='focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'>
                    <span className='h-3 w-3 rounded-full bg-blue-500'></span>
                    <p className='ml-1 text-xs'>{type}</p>
                </span>
            </div>
            <section className='mt-4 flex flex-col gap-2'>
                <InfoItem
                    iconSrc={<FaUserAlt />}
                    label='Pořadatel:'
                    value={organizer}
                />
                <InfoItem
                    iconSrc={<FaCalendarAlt />}
                    label='Datum konání:'
                    value={date}
                />
                <InfoItem
                    iconSrc={<FaMapMarkerAlt />}
                    label='Místo konání:'
                    value={location.name}
                    subValue={location.address}
                />
                <InfoItem
                    iconSrc={<FaLanguage />}
                    label='Jazyk:'
                    value={language}
                />
                <InfoItem
                    iconSrc={<FaGlobe />}
                    label='Web'
                    value={website}
                    isLink
                />
            </section>
        </article>
    );
};

export default EventDetailsComponent;
