import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="fixed top-0 w-full bg-blue-300 h-16 flex items-center px-4 justify-between">
        <ul className="flex flex-row gap-4">
          <li>
            <NavLink to='/' >{t('brand-name')}</NavLink>
          </li>
          <li>
            <NavLink to='store' >{t('title-store')}</NavLink>
          </li>
          <li>
            <NavLink to='store' >{t('title-cart')}</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='store' >{t('title-account')}</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
