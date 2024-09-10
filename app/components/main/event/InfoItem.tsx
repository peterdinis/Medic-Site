import { InfoItemProps } from '@/app/interfaces/EventInterfaces';
import Link from 'next/link';
import { FC } from 'react';

const InfoItem: FC<InfoItemProps> = ({
    iconSrc,
    label,
    value,
    subValue,
    isLink,
}) => {
    return (
        <div className='mt-2 flex flex-col gap-2 md:flex-row md:items-start md:gap-4'>
            <div className='flex items-center gap-2 text-zinc-600'>
                <div className='flex h-6 w-6 items-center justify-center rounded p-1.5'>
                    <span className='text-base'>{iconSrc}</span>
                </div>
                <div className='flex w-[120px] items-start text-balance text-sm md:w-[150px] md:text-base'>
                    {label}
                </div>
            </div>

            <div className='flex flex-col text-sm md:text-base'>
                {isLink ? (
                    <Link
                        href={value}
                        className='overflow-x-auto break-words font-semibold text-red-700 underline'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {value}
                    </Link>
                ) : (
                    <>
                        <div className='font-semibold leading-tight text-neutral-900'>
                            {value}
                        </div>
                        {subValue && (
                            <div className='text-zinc-600'>{subValue}</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default InfoItem;
