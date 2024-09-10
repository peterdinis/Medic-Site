import { FC } from 'react';
import SubMenuText from './SubMenuText';
import SearchInput from './SearchInput';

const SubMenu: FC = () => {
    return (
        <div className='bg-white shadow'>
            <div className='mx-auto max-w-7xl py-2'>
                <div className='flex items-center overflow-x-auto whitespace-nowrap md:gap-6'>
                    <SubMenuText
                        className='flex-none'
                        href='/clanky'
                        text='Články'
                    />
                    <SubMenuText
                        className='flex-none'
                        href='/capopisy'
                        text='Čapopisy'
                    />
                    <SubMenuText
                        className='flex-none'
                        href='/odbory'
                        text='Odbory'
                    />
                    <SubMenuText
                        className='flex-none'
                        href='/vzdelavani'
                        text='Vzdelávaní'
                    />
                    <SubMenuText
                        className='flex-none'
                        href='/kongresy'
                        text='Kongresy'
                    />
                    <SubMenuText
                        className='flex-none'
                        href='/videa'
                        text='Videa'
                    />
                    <SubMenuText
                        className='flex-none'
                        href='/podcasty'
                        text='Podcasty'
                    />
                    <SubMenuText
                        className='flex-none'
                        href='/praxe'
                        text='Praxe'
                    />
                    <div className='ml-auto flex-shrink-0'>
                        <SearchInput />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubMenu;
