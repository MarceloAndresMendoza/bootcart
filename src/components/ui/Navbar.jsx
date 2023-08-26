import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="fixed bottom-2 md:top-0 rounded-lg overflow-hidden w-11/12 md:w-full bg-[#ffffffcc] h-16 flex backdrop-blur-xl shadow-xl md:shadow-sm md:rounded-none">
          <ul className="flex flex-row w-full md:justify-start ">
            <li className="flex-grow text-center flex-shrink-0 md:flex-grow-0">
              <NavLink
                to='/'
                title={t('brand-name')}
              >
                {({ isActive, isPending }) => (
                  <div className={"text-lg md:px-8 py-4 h-full hover:text-white hover:shadow-md hover:bg-blue-500 " + (isActive ? "text-white bg-blue-500" : "text-blue-500")}>
                    <i className="fa-solid fa-house-chimney"></i>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="flex-grow text-center flex-shrink-0 md:flex-grow-0">
              <NavLink
                to='store'
                title={t('title-store')}
              >
                {({ isActive, isPending }) => (
                  <div className={"text-lg md:px-8 py-4 h-full hover:text-white hover:shadow-md hover:bg-yellow-500 " + (isActive ? "text-white bg-yellow-500" : "text-yellow-500")}>
                    <i className="fa-solid fa-store"></i>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="flex-grow text-center flex-shrink-0 md:flex-grow-0">
              <NavLink
                to='cart'
                title={t('title-cart')}
              >
                {({ isActive, isPending }) => (
                  <div className={"text-lg md:px-8 py-4 h-full hover:text-white hover:shadow-md hover:bg-red-500 " + (isActive ? "text-white bg-red-500" : "text-red-500")}>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="flex-grow text-center flex-shrink-0 md:flex-grow-0">
              <NavLink
                to='account'
                title={t('title-account')}
              >
                {({ isActive, isPending }) => (
                  <div className={"text-lg md:px-8 py-4 h-full hover:text-white hover:shadow-md hover:bg-green-500 " + (isActive ? "text-white bg-green-500" : "text-green-500")}>
                    <i className="fa-solid fa-user"></i>
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
