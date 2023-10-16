import { use } from "i18next";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../contexts/cart.context";
import { thousandsSeparate } from "../utils/stringUtils";

export const WebPayPlus = () => {
    const navigate = useNavigate();
    const params = useParams();

    //load the cart context
    const cartContext = useContext(CartContext);

    const {
        elements,
        total,
        doLoadCart,
    } = cartContext;


    useEffect(() => {
        doLoadCart();
        !params ?? navigate('/cart');
    }, []);

    return (
        <>
            <div className='max-w-xl'>
                <div className='p-4 flex flex-col gap-4 items-center md:items-start border-b'>
                    <button
                        onClick={() => navigate(-1)}
                        className='bg-red-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded flex flex-row gap-1 md:gap-4 items-center justify-center w-40'
                    >
                        <i className='fas fa-arrow-left'></i>
                        <span>Cancelar</span>
                    </button>
                    <h1 className='text-2xl md:text-4xl md:font-light'>WebPay Plus</h1>
                    <h2>Su carrito de compras:</h2>
                    <ul className="
                        flex flex-col gap-4 w-full justify-center items-center
                    ">
                        {
                            elements?.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <span>{element.title} - $ {thousandsSeparate(element.price)}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h2 className="flex flex-col gap-4 w-full justify-center items-center font-bold text-blue-500">Total: $ {thousandsSeparate(total)}</h2>
                </div>
                <div className='px-4 py-10 flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 w-full justify-center items-center'>
                        <form action="https://webpay3gint.transbank.cl/webpayserver/initTransaction" method="POST">
                            <input type="hidden" name="token_ws" value={params.token} />
                            <input type="submit" className="
                                bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded flex flex-row gap-1 md:gap-4 items-center justify-center cursor-pointer" value="Pagar mediante WebPay Plus" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
