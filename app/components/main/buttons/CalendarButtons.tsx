import { FC } from 'react';
import { OutlookIcon } from '../icons/OutlookIcon';
import GoogleIcon from '../icons/GoogleIcon';
import { CalendarButtonProps } from '@/app/interfaces/ButtonInterfaces';

const CalendarButton: FC<CalendarButtonProps> = ({ icon, text }) => (
    <button className='flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'>
        <span className='flex h-4 w-4 items-center justify-center'>{icon}</span>
        <span>{text}</span>
    </button>
);

const CalendarButtons: FC = () => {
    const buttons = [
        {
            icon: <OutlookIcon className='h-5 w-5' />,
            text: 'Do Outlook kalendáře',
        },
        {
            icon: <GoogleIcon className='h-5 w-5' />,
            text: 'Do Google kalendáře',
        },
    ];

    return (
        <div className='flex flex-wrap gap-2 md:gap-3'>
            {buttons.map((button, index) => (
                <CalendarButton key={index} {...button} />
            ))}
        </div>
    );
};

export default CalendarButtons;
