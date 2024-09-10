import { FC } from 'react';
import RightBanner from './banners/RightBanner';
import RightMobileBanner from './banners/RightMobileBanner';
import ScrollToTopButton from './buttons/ScrollToTopButton';
import LeftBanner from './banners/LeftBanner';

const MainWrapper: FC = () => {
    return (
        <div className='container mx-auto mt-6 max-w-7xl px-4 py-2'>
            <div className='flex flex-col lg:flex-row lg:space-x-8'>
                <LeftBanner />
                <div className='hidden lg:block'>
                    <RightBanner />
                </div>
                <div className='block lg:hidden'>
                    <RightMobileBanner />
                </div>
            </div>
            <hr className='my-8 border-t-2 border-red-600' />
            <ScrollToTopButton />
        </div>
    );
};

export default MainWrapper;
