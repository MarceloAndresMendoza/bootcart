import { useTranslation } from 'react-i18next';
import { SUNBEAM_ENDPOINT } from '../../../config/env';

export const StoreInfoIcons = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className='w-full p-4 md:max-w-md'>
                <div className='flex flex-row justify-between gap-2 text-xs text-gray-400'>
                    <div className='flex flex-row gap-1 items-center'>
                    <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697280708958.png`} alt='quality' className="aspect-square w-auto h-16" />
                        <p>{t('info-icons-1')}</p>
                    </div>
                    <div className='flex flex-row gap-1  items-center'>
                    <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697280778485.png`} alt='quality' className="aspect-square w-auto h-16" />
                        <p>{t('info-icons-2')}</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                    <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697280841373.png`} alt='quality' className="aspect-square w-auto h-16" />
                        <p>{t('info-icons-3')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
