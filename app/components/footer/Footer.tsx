import { FC } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Footer: FC = () => {
    return (
        <footer className='container mx-auto max-w-7xl border-t border-gray-300 bg-white py-8 text-sm'>
            <div className='px-4'>
                <div className='flex flex-col items-center justify-between space-y-4 sm:flex-row sm:items-start sm:space-y-0'>
                    <Image
                        src='https://pl-master.mdcdn.cz/pl/img/logoPL.svg?version=1725503020'
                        alt='Logo'
                        className='h-6'
                        width={500}
                        height={500}
                    />
                    <div className='flex flex-col space-y-2 text-center sm:flex-row sm:space-x-4 sm:space-y-0 sm:text-left'>
                        <Link
                            href='#'
                            className='text-gray-600 hover:underline'
                        >
                            Kontakt
                        </Link>
                        <span className='ml-2 hidden sm:inline'>|</span>
                        <Link
                            href='#'
                            className='text-gray-600 hover:underline'
                        >
                            Inzerce
                        </Link>
                        <span className='ml-2 hidden sm:inline'>|</span>
                        <Link
                            href='#'
                            className='text-gray-600 hover:underline'
                        >
                            O projektu
                        </Link>
                        <span className='ml-2 hidden sm:inline'>|</span>
                        <Link
                            href='#'
                            className='text-gray-600 hover:underline'
                        >
                            Prohlášení o cookies
                        </Link>
                        <span className='ml-2 hidden sm:inline'>|</span>
                        <Link
                            href='#'
                            className='text-gray-600 hover:underline'
                        >
                            Nastavení cookies
                        </Link>
                    </div>
                </div>

                <div className='mt-6 flex flex-col items-center justify-between space-y-4 border-t pt-4 sm:flex-row sm:items-center sm:space-y-0'>
                    <p className='text-center text-gray-500 sm:text-left'>
                        &copy; 2008-2024 Meditorial | ISSN 1803-5157
                        <span className='mt-2'>
                            Stránky proLékaře.cz jsou určeny výhradně odborníkům
                            ve zdravotnictví.{' '}
                            <span className='text-red-600 underline'>
                                {' '}
                                Čtěte prohlášení
                            </span>{' '}
                            a{' '}
                            <span className='text-red-600 underline'>
                                Zásady zpracování osobních údajů.
                            </span>
                        </span>
                    </p>
                    <div className='flex space-x-4 text-gray-500 hover:text-gray-700'>
                        <Link href='#' className='hidden items-center sm:flex'>
                            <FaFacebookF className='h-5 w-5' />
                        </Link>
                        <Link href='#' className='hidden items-center sm:flex'>
                            <FaLinkedinIn className='h-5 w-5' />
                        </Link>
                        <Link href='#' className='hidden items-center sm:flex'>
                            <BsTwitterX className='h-5 w-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
