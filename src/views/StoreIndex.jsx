import { StoreTitle } from "../components/store/branding/StoreTitle"
import { useTranslation } from 'react-i18next';
import { Categories } from "../components/store/categories/Categories";
import { ProductsAll } from "../components/store/products/ProductsAll";
import { PageTitle } from "../components/ui/smallbits/PageTitle";
import { UserLoggedGreeting } from "../components/store/user/UserLoggedGreeting";

export const StoreIndex = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div>
        <div>
          <PageTitle text={t('store-title')}/>
          <hr className='mb-2' />
          <UserLoggedGreeting />
          <Categories small={false}/>
          <ProductsAll />
        </div>
      </div>
    </>
  )
}
