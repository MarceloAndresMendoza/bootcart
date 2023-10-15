import React from 'react'
import { useTranslation } from 'react-i18next';
import { SUNBEAM_ENDPOINT } from '../../../config/env';


export const StoreIntroduction = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div>
                <div className='mx-4 max-w-xl'>
                    <h3 className='text-lg'>{t('store-introduction-title')}</h3>
                    <div className='flex flex-row py-4 items-center'>
                        {/* <div className='aspect-square w-auto h-16 bg-purple-500 '></div> */}
                        <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697280536279.png`} alt='quality' className="aspect-square w-auto h-16" />
                        <p className='pl-4 text-xs'>{t('store-introduction-description')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
