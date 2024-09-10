import { ISubMenuTextProps } from '@/app/interfaces/MenuInterfaces';
import Link from 'next/link';
import { FC } from 'react';

const SubMenuText: FC<ISubMenuTextProps> = ({
    text,
    className,
    href,
}: ISubMenuTextProps) => {
    return (
        <Link
            href={href}
            className={`border border-gray-300 bg-white px-4 py-2 text-black md:rounded-none md:border-0 ${className}`}
        >
            {text}
        </Link>
    );
};

export default SubMenuText;
