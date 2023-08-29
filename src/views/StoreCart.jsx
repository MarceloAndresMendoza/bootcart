import { useTranslation } from 'react-i18next';
import { Cart } from '../components/store/user/Cart';
import { UserInfoTable } from '../components/store/user/UserInfoTable';
import { PageTitle } from '../components/ui/smallbits/PageTitle';
export const StoreCart = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className=''>
        <div className='flex flex-col gap-4 max-w-4xl'>
          <PageTitle text={t('my-cart-title')} />
          <UserInfoTable />
          <Cart />
        </div>
      </div>
    </>
  )
}
