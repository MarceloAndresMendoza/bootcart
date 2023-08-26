import { useTranslation } from 'react-i18next';

export const StoreInfoIcons = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className='w-full p-4 md:max-w-md'>
                <div className='flex flex-row justify-between gap-2 text-xs text-gray-400'>
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='h-10 w-10 bg-green-500 flex-shrink-0'></div>
                        <p>{t('store-info-1')}</p>
                    </div>
                    <div className='flex flex-row gap-1  items-center'>
                        <div className='h-10 w-10 bg-red-500 flex-shrink-0'></div>
                        <p>{t('store-info-1')}</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='h-10 w-10 bg-yellow-500 flex-shrink-0'></div>
                        <p>{t('store-info-1')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
