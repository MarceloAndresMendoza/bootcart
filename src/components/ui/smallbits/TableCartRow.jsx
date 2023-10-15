import { thousandsSeparate } from "../../../utils/stringUtils";
import { NavLink } from 'react-router-dom';
import * as env from '../../../config/env.js'
import { CartContext } from "../../../contexts/cart.context";
import { useContext, useEffect, useState } from "react";
const SUNBEAM_ENDPOINT = env.SUNBEAM_ENDPOINT;

export const TableCartRow = (props) => {
    const { element, callback } = props;
    const localCurrency = '$';
    const [ localQuantity, setLocalQuantity ] = useState(element.quantity);

    const handleQttyChange = ( element, quantityDelta ) => {
        const newQuantity = localQuantity + quantityDelta;
        if (newQuantity < 1) {
            return;
        }
        setLocalQuantity(newQuantity);
        callback(element, quantityDelta);
    }

    return element ? (
        <>
            <td className='px-4 w-2/12 md:w-2/12 aspect-square bg-white '>
                <NavLink to={`/store/product/${element.id}`}>
                    <img className='max-w-full' src={`${SUNBEAM_ENDPOINT}/files?filename=${element.imageUrl}`} alt={element.title} />
                </NavLink>
            </td>
            <td className='py-1 px-4 text-blue-500 w-3/12 md:w-4/12 text-sm font-bold'>
                <NavLink to={`/store/product/${element.id}`}>{element.title}</NavLink>
            </td>
            <td className='py-1 px-4 text-gray-500 w-2/12 text-xs hidden md:table-cell'>
                {element.shortDescription}
            </td>
            <td className='py-1 px-4 text-blue-500 w-1/12 md:w-1/12 flex flex-row gap-2 items-center'>
                <button className="p-3 text-blue-300 hover:text-blue-500" onClick={() => handleQttyChange(element, -1)}>
                    <i className="fa-solid fa-square-minus text-xl "></i>
                </button>
                {localQuantity}
                <button className="p-3 text-blue-300 hover:text-blue-500" onClick={() => handleQttyChange(element, 1)}>
                    <i className="fa-solid fa-square-plus text-xl "></i>
                </button>
            </td>
            <td className='py-1 px-4 text-blue-700 w-3/12 md:w-1/12 hidden sm:table-cell'>
                <div className="flex flex-row justify-between gap-2">
                    <div>{localCurrency}</div>
                    <div>{thousandsSeparate(element.price)}</div>
                </div>
            </td>
            <td className='py-1 px-4 text-blue-700 w-3/12 md:w-1/12'>
                <div className="flex flex-row justify-between gap-2 font-bold">
                    <div>{localCurrency}</div>
                    <div>{thousandsSeparate(element.price * localQuantity)}</div>
                </div>
            </td>
        </>
    ) : null
}
