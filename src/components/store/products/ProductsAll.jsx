// ===========================================================
// Product list
// Author: Marcelo Mendoza
// Created: 2023-10-11
// Description: Get and display all the products from the
//              backend
// ===========================================================
import { useTranslation } from 'react-i18next';
import { SingleProduct } from '../../ui/SingleProduct';
import { SectionTitle } from '../../ui/smallbits/SectionTitle';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../../contexts/store.context';
import * as env from '../../../config/env'

export const ProductsAll = (props) => {
  const { small, featured, paramFilter } = props;
  const { t, i18n } = useTranslation();
  const featuredFilter = featured ?? false;
  const [filter, setFilter] = useState(paramFilter ?? '');
  // get the store context
  const storeContext = useContext(StoreContext)
  // import its methods
  const {
    products,
    loadProducts
  } = storeContext;

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setFilter(paramFilter ?? '');
  } , [paramFilter]);

  return (
    <>
      <div>
        <SectionTitle text={!featuredFilter ? (paramFilter ? `${t('products-search-result')}` : t('all-products')) : t('featured-products')} />
        <div className={`flex flex-row ${featured ? 'overflow-x-auto overflow-y-hidden' : 'flex-wrap'} gap-6 m-4 pb-2`}>
          {products?.length > 0 ?
            products.map((currentProduct, index) => {
              // get the image, if it exists or load the default one
              const image = currentProduct.images[0] ?? env.SUNBEAM_DEFAULT_IMAGE;
              return (!featuredFilter || currentProduct.featured) && (
                !filter ||
                currentProduct.title.toLowerCase().includes(filter.toLowerCase()) ||
                currentProduct.category.toLowerCase().includes(filter.toLowerCase()) ||
                currentProduct.shortDescription.toLowerCase().includes(filter.toLowerCase()) ||
                currentProduct.fullDescription.toLowerCase().includes(filter.toLowerCase()) ||
                currentProduct.brand.toLowerCase().includes(filter.toLowerCase())
              ) ? (
                  <div key={index}>
                  <SingleProduct
                    smallMode={small}
                    currentImage={image}
                    productTitle={currentProduct.title}
                    productDescription={currentProduct.shortDescription}
                    productPrice={currentProduct.price}
                    productData={currentProduct}
                  />
                </div>
              ): null
            })
            :
            <div className='text-center text-gray-300'>
              {t('loading-placeholder')}
            </div>
          }
        </div>
      </div>
    </>
  )
}
