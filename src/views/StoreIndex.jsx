import { StoreTitle } from "../components/store/branding/StoreTitle"
import { useTranslation } from 'react-i18next';
import { Categories } from "../components/store/categories/Categories";

export const StoreIndex = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div>
        <div>
          <StoreTitle subtitle={t('store-title')}/>
          <Categories />
        </div>
      </div>
    </>
  )
}
