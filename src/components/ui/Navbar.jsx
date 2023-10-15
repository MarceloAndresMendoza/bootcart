import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { SUNBEAM_ENDPOINT } from "../../config/env";
import { CartContext } from "../../contexts/cart.context";
import { useContext, useEffect, useState } from "react";
import { use } from "i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const cartContext = useContext(CartContext);
  const [elementsCount, setElementsCount] = useState(0);
  const {
    elements,
    doLoadCart,
  } = cartContext;

  useEffect(() => {
    doLoadCart();
  }, []);

  useEffect(() => {
    setElementsCount(elements?.length);
  }, [elements]);

  return (
    <>
      <div className="flex justify-center w-full">
        <div
          className="bg-cover fixed z-50 bottom-2 md:top-0 rounded-lg overflow-hidden w-11/12 md:w-full bg-[#ffffffcc] h-16 flex backdrop-blur-xl shadow-xl md:shadow-sm md:rounded-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${SUNBEAM_ENDPOINT}/files?filename=1697281811384.jpg)
          ` }}

        >
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
            <li className="flex-grow text-center flex-shrink-0 md:flex-grow-0 relative">
              {elementsCount > 0 &&
                <div className="absolute bg-white text-red-500 text-xs rounded-full px-2 py-1 font-bold right-2 top-1 pointer-events-none">{elementsCount}</div>}
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
