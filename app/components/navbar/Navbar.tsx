'use client';

import { FC, useState } from 'react';
import { User2, Mail, Menu } from 'lucide-react';
import Image from 'next/image';

const Navbar: FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className='w-full bg-white'>
                <div className='relative mx-auto max-w-7xl px-4 py-2'>
                    <div className='flex items-center justify-between'>
                        <button
                            className='block md:hidden'
                            onClick={toggleMobileMenu}
                            aria-label='Toggle menu'
                        >
                            <Menu className='h-6 w-6' />
                        </button>

                        <div className='flex flex-grow justify-center md:flex-grow-0'>
                            <Image
                                src='https://pl-master.mdcdn.cz/pl/img/logoPL.svg?version=1725503020'
                                alt='Logo'
                                width={150}
                                height={200}
                            />
                        </div>

                        <div className='block md:hidden'>
                            <button className='flex h-10 w-10 items-center justify-center rounded-full text-gray-600'>
                                <User2 className='h-5 w-5' />
                            </button>
                        </div>

                        <div className='mt-2 hidden items-center space-x-4 md:flex'>
                            <button className='flex h-[40px] w-[133px] items-center gap-1.5 rounded-lg rounded-l-lg border border-transparent px-4 py-2 text-gray-600'>
                                <User2 className='h-4 w-4' />
                                <span>Přihlásit</span>
                            </button>
                            <button className='flex items-center rounded-lg border border-[#D6D6D6] bg-white px-3 py-1 text-black shadow-sm'>
                                <Mail className='h-4 w-4' />
                                <span className='ml-1'>Newsletter</span>
                            </button>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className='absolute left-0 top-full w-full bg-white shadow-lg md:hidden'>
                            <div className='flex items-center justify-between p-4'>
                                <button className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600'>
                                    <User2 className='h-4 w-4' />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;
