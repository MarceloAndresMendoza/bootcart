import { useTranslation } from 'react-i18next';
import { UserLoggedGreeting } from '../user/UserLoggedGreeting';

export const StoreTitle = (props) => {
  const { t, i18n } = useTranslation();
  const { subtitle } = props;
  const subtitleText = subtitle ?? t('store-welcome');

  return (
    <>
      <div className='p-4'>
        <h1 className='text-5xl'>
          {t('store-name')}
        </h1>
        <h2 className="text-xl">
          { subtitleText }
        </h2>
        <hr className='mt-2' />
      </div>
      <UserLoggedGreeting />
    </>
  )
}