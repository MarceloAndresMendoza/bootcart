import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../../contexts/user.context';
import { NavLink } from 'react-router-dom';

export const StoreTitle = (props) => {
  const { t, i18n } = useTranslation();
  const { subtitle } = props;
  const subtitleText = subtitle ?? t('store-welcome');
  // Load user context
  const userContext = useContext(UserContext);
  // Import its methods
  const {
    isAuthenticated,
    user,
    getUserInfo
  } = userContext;

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <div className='p-4'>
        <h1 className='text-5xl'>
          {t('store-name')}
        </h1>
        <h2 className="text-xl">
          {subtitleText}
        </h2>
        {isAuthenticated && user ?
          <h3 className="text-lg text-blue-500">
            <NavLink
              to='/account'
              className='hover:underline'
            >
              {t('welcome-user-prefix', { name: user.firstName })}
            </NavLink>
          </h3>
          : null
        }
        <hr className='my-2' />
      </div>
    </>
  )
}