import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Categories } from '../components/store/categories/Categories';
import { ProductsAll } from '../components/store/products/ProductsAll';
import { PageTitle } from '../components/ui/smallbits/PageTitle';
import { UserLoggedGreeting } from '../components/store/user/UserLoggedGreeting';
import { SectionTitle } from '../components/ui/smallbits/SectionTitle';
import { SearchBox } from '../components/store/products/SearchBox'
import { SUNBEAM_ENDPOINT } from '../config/env';
// 1697286294290.jpg

export const StoreIndex = () => {
  const { t } = useTranslation();
  const { paramFilter } = useParams();

  const handleDeleteFilter = () => {
    window.location.href = '/store';
  }

  return (
    <div>
        <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697281811384.jpg`} alt="image-banner"  className='h-40 w-full'/>
      <div className='flex flex-col md:flex-row gap-4 items-center pb-4'>
        <PageTitle text={t('store-title')} />
        <SearchBox />
      </div>
      <div className='flex flex-row gap-4 px-4'>
        {paramFilter && <button onClick={handleDeleteFilter} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2'>{t('delete-filters')}</button> }
        {paramFilter && <SectionTitle text={`${t('search-results')}: '${paramFilter}'`} />}
      </div>
      <hr className="mb-2" />
      <UserLoggedGreeting />
      {!paramFilter && <Categories small={false} />}
      <ProductsAll paramFilter={paramFilter} />
    </div>
  );
};
