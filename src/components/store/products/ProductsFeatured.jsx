import { useTranslation } from 'react-i18next';

export const ProductsFeatured = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div>
        <h3 className='mx-4 text-lg'>{t('featured-products')}</h3>
        <div className='flex flex-row overflow-x-auto gap-4 p-4'>
          <div className='h-32 bg-red-500 w-32 flex-shrink-0'></div>
          <div className='h-32 bg-green-500 w-32 flex-shrink-0'></div>
          <div className='h-32 bg-blue-500 w-32 flex-shrink-0'></div>
          <div className='h-32 bg-yellow-500 w-32 flex-shrink-0'></div>
          <div className='h-32 bg-red-500 w-32 flex-shrink-0'></div>
          <div className='h-32 bg-green-500 w-32 flex-shrink-0'></div>
          <div className='h-32 bg-blue-500 w-32 flex-shrink-0'></div>
        </div>
      </div>
    </>
  )
}
