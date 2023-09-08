import { PageTitle } from "../components/ui/smallbits/PageTitle"
import { useTranslation } from 'react-i18next';
import { SignUpForm } from "../components/user/SignUpForms";

export const AccountSignUp = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <PageTitle text={t('create-new-account-title')} />
      <div className="text-sm m-4">{t('create-new-account-marketing-message')}</div>
      <SignUpForm />
    </>
  )
}
