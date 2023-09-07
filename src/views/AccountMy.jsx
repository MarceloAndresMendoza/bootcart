import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tokenCheck } from "../helpers/tokenCheck";
import { PageTitle } from '../components/ui/smallbits/PageTitle';
import { LoginForm } from '../components/user/LoginForm';
import { MyAccount } from '../components/user/MyAccount';
// RESTRICTED

export const AccountMy = () => {
  const { t, i18n } = useTranslation();
  const [signedInStatus, setSignedInStatus] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const isLogged = await tokenCheck();
      setSignedInStatus(isLogged);
    }
    checkToken();
  }, [])

  const handleUpdateLoginStatus = (loginResult) => {
    setSignedInStatus(loginResult);
  }

  const handleEndSession = () => {
    localStorage.removeItem('authtoken');
    setSignedInStatus(false)
  }

  return (
    <div>
      <PageTitle text={t('my-account-title')} />
      {signedInStatus ?
        (
          <>
            <MyAccount />
            <div 
              className='m-4 text-white cursor-pointer p-2 rounded-md max-w-xs text-center bg-red-500 hover:bg-red-600'
              onClick={handleEndSession}
            >
              {t('end-session-button-text')}
            </div>
          </>
        ) : (
          <LoginForm callback={handleUpdateLoginStatus} />
        )
      }
    </div>
  );

}
