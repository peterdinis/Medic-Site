import Link from 'next/link';
import { FC } from 'react';

const Breadcrumb: FC = () => {
    return (
        <>
            <nav className='mb-4 text-sm text-gray-600'>
                <ol className='flex flex-wrap space-x-2'>
                    <li>
                        <Link href='#' className='hover:underline'>
                            proLékaře.cz
                        </Link>
                    </li>
                    <li>{'>>'}</li>
                    <li>
                        <Link href='#' className='hover:underline'>
                            Kongresy
                        </Link>
                    </li>
                    <li>{'>>'}</li>
                    <li>
                        <span className='text-gray-600'>
                            5. Central European Endoscopic Ear Surgery Course
                        </span>
                    </li>
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumb;
