import { thousandsSeparate } from "../../../utils/stringUtils";

export const TableCartRow = (props) => {
    // TODO
    // Task: make this globally available
    const localCurrency = '$';
    //-- end
    const { product } = props;

    // TEST
    const images = [];
    //--- END

    return (
        <>
            <td className='py-1 px-4 w-2/12 aspect-square bg-red-500'>
                {images[0]}
            </td>
            <td className='py-1 px-4 text-blue-500 w-4/12 text-sm font-bold'>
                {product.title}
            </td>
            <td className='py-1 px-4 text-gray-500 w-2/12 text-xs'>
                {product.shortDescription}
            </td>
            <td className='py-1 px-4 text-blue-500 w-1/12'>
                {product.quantity}
            </td>
            <td className='py-1 px-4 text-blue-700 w-1/12'>
                <div className="flex flex-row justify-between gap-2">
                    <div>{localCurrency}</div>
                    <div>{thousandsSeparate(product.price)}</div>
                </div>
            </td>
            <td className='py-1 px-4 text-blue-700 w-1/12'>
                <div className="flex flex-row justify-between gap-2 font-bold">
                    <div>{localCurrency}</div>
                    <div>{thousandsSeparate(product.price * product.quantity)}</div>
                </div>
            </td>
        </>
    )
}
