import { useTranslation } from 'react-i18next';

export const StoreTitle = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
        <div className='p-4'>
                <h1 className='text-5xl'>
                    {t('store-name')}
                </h1>
                <h2 className="text-xl">
                    {t('store-welcome')}
                </h2>
                <hr className='my-2'/>
            </div>
    </>
  )
}
