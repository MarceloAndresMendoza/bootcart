import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="fixed bottom-0 md:top-0 w-full bg-slate-100 h-16 flex items-center px-2">
        <ul className="flex flex-row gap-4 w-full md:justify-start justify-between">
          <li>
            <NavLink
              to='/'
              title={t('brand-name')}
            >
              {({ isActive, isPending }) => (
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 rounded-lg mx-1 " + (isActive ? "text-white bg-blue-500" : "")}>
                  <i className="fa-solid fa-house-chimney"></i>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='store'
              title={t('title-store')}
            >
              {({ isActive, isPending }) => (
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 rounded-lg mx-1 " + (isActive ? "text-white bg-blue-500" : "")}>
                  <i className="fa-solid fa-store"></i>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='cart'
              title={t('title-cart')}
            >
              {({ isActive, isPending }) => (
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 rounded-lg mx-1 " + (isActive ? "text-white bg-blue-500" : "")}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='account'
              title={t('title-account')}
            >
              {({ isActive, isPending }) => (
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 rounded-lg mx-1 self-end" + (isActive ? "text-white bg-blue-500" : "")}>
                  <i className="fa-solid fa-user"></i>
                </div>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
