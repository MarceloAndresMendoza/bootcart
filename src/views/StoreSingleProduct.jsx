// ===================================================
// StoreSingleProduct Component
// Author: Marcelo Mendoza
// Creation Date: 2023-10-12
// Description: Show a single product and its details
// ===================================================
import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../contexts/store.context';
import { useTranslation } from 'react-i18next';
import * as env from '../config/env';
import { CartContext } from '../contexts/cart.context';
import { thousandsSeparate } from '../utils/stringUtils';

export const StoreSingleProduct = () => {
  const { t, i18n } = useTranslation();
  const { productID } = useParams();
  const navigate = useNavigate();
  const storeContext = useContext(StoreContext)
  const SUNBEAM_ENDPOINT = env.SUNBEAM_ENDPOINT;
  const {
    product,
    loadProduct
  } = storeContext;

  useEffect(() => {
    loadProduct(productID);
  }, []);

  const cartContext = useContext(CartContext);
  const {
		elements,
		total,
		doLoadCart,
		doClearCart,
		doAddElementToCart,
		doUpdateElementInCart,
		doRemoveElementFromCart,
		doBuyCart,
	} = cartContext;

  return (
    <>
      <div className='max-w-xl'>
        <div className='p-4 flex flex-row md:flex-col gap-4 items-center md:items-start border-b'>
          <button
            onClick={() => navigate(-1)}
            className='bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded flex flex-row gap-1 md:gap-4 items-center justify-center w-20 md:w-40'
          >
            <i className='fas fa-arrow-left'></i>
            <span>{t('back-text')}</span>
          </button>
          <h1 className='text-2xl md:text-4xl md:font-light'>{product?.title}</h1>
        </div>
        <div className='p-4 flex flex-col gap-4'>
          <div className='flex flex-col gap-4 w-full justify-center items-center'>
            <div className='flex flex-row overflow-x-auto'>
              {product?.images ?
                product.images.map((currentImage, index) => {
                  return (
                    <img
                      key={index}
                      src={`${SUNBEAM_ENDPOINT}/files?filename=${currentImage}`}
                      alt={product?.title}
                      className='w-80'
                    />
                  )
                }) :
                <img
                  src={`${SUNBEAM_ENDPOINT}/files?filename=${env.SUNBEAM_DEFAULT_IMAGE}`}
                  alt={product?.title}
                  className='w-80'
                />
              }
            </div>
            <h2 className='text-xl w-full'>{product?.shortDescription}</h2>
            <h3 className='w-full'>{product?.fullDescription}</h3>
          </div>
          <div className='flex flex-row w-full justify-center gap-8 items-center'>
            <p className='text-blue-500 text-xl'>$ {
              thousandsSeparate(product?.price)
            }</p>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={
                () => {
                  doAddElementToCart(
                    product,
                    1,
                  );
                  navigate('/cart');
                }
              }
            >
              {t('add-to-cart')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
