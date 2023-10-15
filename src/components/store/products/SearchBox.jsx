// ==================================================
// SearchBox component
// Author: Marcelo Mendoza
// Created: 2023-10-13
// Description: A simple search box using url parameters
// ==================================================

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SearchBox = () => {
    const { t } = useTranslation();
    const [ search, setSearch ] = useState('');
    const navigate = useNavigate();
    return (
        <div className='flex flex-row w-full gap-4 justify-center'>
            <input
                className='border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
                type="text"
                placeholder={t('search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        navigate(`/store/${search}`);
                    }}
                }
            />
            <button
                onClick={() => navigate(`/store/${search}`)}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
                {t('search-now-button')}
            </button>
        </div>
    )
}