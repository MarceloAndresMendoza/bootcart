import { useEffect } from "react";
import { thousandsSeparate } from "../../../utils/stringUtils";
import { NavLink } from 'react-router-dom';


export const TableCartRow = (props) => {
    // TODO
    // Task: make this globally available
    const localCurrency = '$';
    //-- end
    const { product, callback, elementkey } = props;

    // TEST
    const images = [];
    //--- END

    const handleQuantityChange = (value) => {
            callback(value, elementkey)
            console.log('child')
    }

    return (
        <>
            <td className='py-1 px-4 w-2/12 md:w-2/12 aspect-square bg-yellow-500'>
                <img src={images[0]} className="h-full" alt="" />
            </td>
            <td className='py-1 px-4 text-blue-500 w-3/12 md:w-4/12 text-sm font-bold'>
                <NavLink to={`/store/${product.id}`}>{product.title}</NavLink>
            </td>
            <td className='py-1 px-4 text-gray-500 w-2/12 text-xs hidden md:table-cell'>
                {product.shortDescription}
            </td>
            <td className='py-1 px-4 text-blue-500 w-1/12 md:w-1/12 flex flex-row gap-2 items-center'>
                <button className="p-3 text-blue-300 hover:text-blue-500" onClick={() => handleQuantityChange(-1)}>
                    <i className="fa-solid fa-square-minus text-xl "></i>
                </button>
                {product.quantity}
                <button className="p-3 text-blue-300 hover:text-blue-500" onClick={() => handleQuantityChange(1)}>
                    <i className="fa-solid fa-square-plus text-xl "></i>
                </button>
            </td>
            <td className='py-1 px-4 text-blue-700 w-3/12 md:w-1/12 hidden sm:table-cell'>
                <div className="flex flex-row justify-between gap-2">
                    <div>{localCurrency}</div>
                    <div>{thousandsSeparate(product.price)}</div>
                </div>
            </td>
            <td className='py-1 px-4 text-blue-700 w-3/12 md:w-1/12'>
                <div className="flex flex-row justify-between gap-2 font-bold">
                    <div>{localCurrency}</div>
                    <div>{thousandsSeparate(product.price * product.quantity)}</div>
                </div>
            </td>
        </>
    )
}
