import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { thousandsSeparate } from '../utils/stringUtils'
import { CartContext } from '../contexts/cart.context';

export const Confirm = () => {
    const cartContext = useContext(CartContext);
    const {
          doClearCart,
      } = cartContext;

    useEffect (() => {
        // doClearCart()
    }, [])
    return (
        <>
            <div className='max-w-xl min-h-100 '>
                <div className='p-4 flex flex-col md:flex-col gap-4 items-center md:items-start border-b'>
                    <button
                        onClick={() => navigate(-1)}
                        className='bg-red-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded flex flex-row gap-1 md:gap-4 items-center justify-center w-40'
                    >
                        <i className='fas fa-arrow-left'></i>
                        <NavLink to='/store'>Regresar a la tienda</NavLink>
                    </button>
                    <h1 className='text-2xl md:text-4xl md:font-light'>Su compra ha sido procesada</h1>
                    <h2>Se enviará un correo con los detalles de su pedido.</h2>
                </div>
            </div>
        </>
  )
}
