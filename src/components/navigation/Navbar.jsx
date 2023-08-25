import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="fixed top-0 w-full bg-blue-100 h-16 flex items-center px-4 justify-between">
        <ul className="flex flex-row gap-4">
          <li>
            <NavLink
              to='/'
              title={t('brand-name')}
            >
              {({ isActive, isPending }) => (
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 " + (isActive ? "text-blue-900 bg-white" : "")}>
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
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 " + (isActive ? "text-blue-900 bg-white" : "")}>
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
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 " + (isActive ? "text-blue-900 bg-white" : "")}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              )}
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to='account'
              title={t('title-account')}
            >
              {({ isActive, isPending }) => (
                <div className={"text-lg text-blue-700 p-4 hover:text-white hover:shadow-md hover:bg-blue-500 " + (isActive ? "text-blue-900 bg-white" : "")}>
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
