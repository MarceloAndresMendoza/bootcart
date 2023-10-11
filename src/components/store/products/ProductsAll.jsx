import { useTranslation } from 'react-i18next';
import { getProductImage } from '../../../assets/products/imageIndex';
import { SingleProduct } from '../../ui/SingleProduct';
import { SectionTitle } from '../../ui/smallbits/SectionTitle';
import { useContext } from 'react';
import { StoreContext } from '../../../contexts/store.context';

export const ProductsAll = (props) => {
  const { small } = props;
  const { t, i18n } = useTranslation();

  // get the store context
  const storeContext = useContext(StoreContext)
  // import its methods
  const {
    loadProducts
  } = storeContext;

  const imageList = [];
  for (let i = 1; i <= 14; i++) {
    imageList.push(getProductImage(i))
  }
  return (
    <>
      <div>
        <SectionTitle text={t('all-products')} />
        <div className='flex flex-row overflow-x-auto overflow-y-hidden gap-6 m-4 pb-2'>
          {
            imageList.map((currentImage, index) => {
              return (
                <div key={index}>
                  <SingleProduct
                    smallMode={small}
                    currentImage={currentImage}
                    productTitle='Product title'
                    productDescription='Product description'
                    productPrice='$15.000'
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
