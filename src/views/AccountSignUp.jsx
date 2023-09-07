import { PageTitle } from "../components/ui/smallbits/PageTitle"
import { useTranslation } from 'react-i18next';
import { SignUpForm } from "../components/user/SignUpForms";

export const AccountSignUp = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <PageTitle text={t('create-new-account-title')} />
      <SignUpForm />
    </>
  )
}
