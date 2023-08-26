import React from 'react'
import { useTranslation } from 'react-i18next';

export const CategoriesSmall = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div>
                <div>
                    <h3 className='mx-4 text-lg'>{t('categories-title')}</h3>
                    <div className='flex flex-row overflow-x-auto gap-4 p-4'>
                        <div className='h-20 w-20 bg-red-500 flex-shrink-0'></div>
                        <div className='h-20 w-20 bg-green-500 flex-shrink-0'></div>
                        <div className='h-20 w-20 bg-blue-500 flex-shrink-0'></div>
                        <div className='h-20 w-20 bg-yellow-500 flex-shrink-0'></div>
                        <div className='h-20 w-20 bg-red-500 flex-shrink-0'></div>
                        <div className='h-20 w-20 bg-green-500 flex-shrink-0'></div>
                        <div className='h-20 w-20 bg-blue-500 flex-shrink-0'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
