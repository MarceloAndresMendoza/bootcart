import { useTranslation } from 'react-i18next';

export const ProductsFeatured = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div>
        <h3 className='mx-4 text-lg'>{t('featured-products')}</h3>
        <div className='flex flex-row overflow-x-auto gap-4 m-4 h-32 md:h-48 pb-2'>
          <div className='aspect-square bg-red-500 flex-shrink-0'></div>
          <div className='aspect-square bg-blue-500 flex-shrink-0'></div>
          <div className='aspect-square bg-green-500 flex-shrink-0'></div>
          <div className='aspect-square bg-yellow-500 flex-shrink-0'></div>
          <div className='aspect-square bg-red-500 flex-shrink-0'></div>
          <div className='aspect-square bg-green-500 flex-shrink-0'></div>
          <div className='aspect-square bg-blue-500 flex-shrink-0'></div>
        </div>
      </div>
    </>
  )
}
