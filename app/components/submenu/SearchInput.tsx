import { Search } from 'lucide-react';
import { FC } from 'react';

const SearchInput: FC = () => {
    return (
        <div className='relative ml-auto flex w-full max-w-xs items-center'>
            <div className='flex overflow-hidden'>
                <input
                    placeholder='Hledat...'
                    type='text'
                    className='w-[500px] max-w-xs rounded-l-lg border border-gray-100 px-4 py-2 text-black outline-none'
                />
                <button className='mr-4 flex items-center rounded-r-lg bg-red-600 px-4 py-2 text-white'>
                    <Search className='h-4 w-4' />
                </button>
            </div>
        </div>
    );
};

export default SearchInput;
