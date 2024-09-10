import { FC } from 'react';

const RightBanner: FC = () => {
    return (
        <section className='flex w-[312px] max-w-full flex-col'>
            <div className='text-sm leading-snug text-zinc-600'>Reklama</div>

            <div className='mt-2 flex w-full flex-col overflow-hidden bg-neutral-100 text-base text-neutral-900'>
                <div className='relative aspect-[0.5] w-full flex-col'>
                    <svg
                        className='absolute inset-0 h-full w-full'
                        preserveAspectRatio='none'
                    >
                        <line
                            x1='0'
                            y1='100%'
                            x2='100%'
                            y2='0'
                            stroke='black'
                            strokeWidth='2'
                            vectorEffect='non-scaling-stroke'
                        />
                        <line
                            x1='100%'
                            y1='100%'
                            x2='0'
                            y2='0'
                            stroke='black'
                            strokeWidth='2'
                            vectorEffect='non-scaling-stroke'
                        />
                    </svg>

                    <div className='relative flex aspect-[0.5] w-full flex-col items-center justify-center px-16 py-72 max-md:px-5 max-md:py-24'>
                        <div className='text-cent relative mb-0 gap-1 self-stretch bg-neutral-100 p-2 text-center max-md:mb-2.5'>
                            Reklamní banner
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RightBanner;
