'use client';

import { FC } from 'react';

const ScrollToTopButton: FC = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='mb-8 flex cursor-pointer items-center hover:underline'>
            <svg
                className='mr-2 h-4 w-4'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
            >
                <path d='M4 12l1.41 1.41L12 6.83l6.59 6.58L20 12l-8-8-8 8z' />
            </svg>
            <span onClick={goToTop}>Zpátky nahoru</span>
        </div>
    );
};

export default ScrollToTopButton;
