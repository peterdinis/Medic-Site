import Image from 'next/image';
import { FC } from 'react';

const RightMobileBanner: FC = () => {
    return (
        <div className='flex max-w-[375px] flex-col'>
            <div className='text-sm leading-snug text-zinc-600'>Reklama</div>

            <div className='mt-2 flex w-full flex-col self-center overflow-hidden bg-neutral-100 text-base text-neutral-900'>
                <div className='relative flex aspect-[1.302] w-full flex-col'>
                    <Image
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/b50e3f042addde4c32d01a27a39a7284a4eec20826611d0770b48c7ab362beb2?placeholderIfAbsent=true&apiKey=bf7bd25eacd34abcbed6ccb55d4f7d31'
                        className='absolute inset-0 size-full object-cover'
                        alt='Ad'
                        width={100}
                        height={100}
                    />
                    <div className='relative flex aspect-[1.302] w-full flex-col items-center justify-center px-16 py-32'>
                        <Image
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/8f6e71bee59c258052a83a1df194c8ad30602018662cf903afd1024e7c83d1ef?placeholderIfAbsent=true&apiKey=bf7bd25eacd34abcbed6ccb55d4f7d31'
                            className='absolute inset-0 size-full object-cover'
                            alt='Ad'
                            width={100}
                            height={100}
                        />
                        <div className='relative mb-0 gap-1 self-stretch bg-neutral-100 p-2 text-center'>
                            Reklamní banner
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightMobileBanner;
