import { FC} from 'react';
import { BookMarked, Share } from 'lucide-react';
import { ShareButtonProps } from '@/app/interfaces/ButtonInterfaces';

const ShareButton: FC<ShareButtonProps> = ({ icon }) => (
    <button className='flex h-10 w-10 items-center justify-center gap-2 overflow-hidden rounded-lg border border-solid border-gray-200 bg-white px-2.5 shadow'>
        {icon}
    </button>
);

const SharedButtons: FC = () => {
    const buttons = [
        {
            icon: <Share className='h-5 w-5 text-gray-600' />,
        },
        {
            icon: <BookMarked className='h-5 w-5 text-gray-600' />,
        },
    ];

    return (
        <div className='flex items-start gap-3'>
            {buttons.map((button, index) => (
                <ShareButton key={index} icon={button.icon} />
            ))}
        </div>
    );
};

export default SharedButtons;
