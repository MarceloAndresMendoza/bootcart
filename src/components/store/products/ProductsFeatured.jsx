import { useTranslation } from 'react-i18next';
import { getProductImage } from '../../../assets/products/imageIndex';
import { SingleProduct } from '../../ui/SingleProduct';

export const ProductsFeatured = (props) => {
  const { small } = props;
  const { t, i18n } = useTranslation();
  const imageList = [];
  for (let i = 1; i <= 14; i++) {
    imageList.push(getProductImage(i))
  }
  return (
    <>
      <div>
        <h3 className='mx-4 text-lg'>{t('featured-products')}</h3>
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
