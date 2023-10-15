import { useTranslation } from 'react-i18next';
import { Cart } from '../components/store/user/Cart';
import { UserInfoTable } from '../components/user/UserInfoTable';
import { PageTitle } from '../components/ui/smallbits/PageTitle';
import {SUNBEAM_ENDPOINT} from '../config/env';

export const StoreCart = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className=''>
      <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697281811384.jpg`} alt="image-banner"  className='h-40 w-full'/>
        <div className='flex flex-col gap-4 max-w-4xl'>
          <PageTitle text={t('my-cart-title')} />
          <UserInfoTable />
          <Cart />
        </div>
      </div>
    </>
  )
}
