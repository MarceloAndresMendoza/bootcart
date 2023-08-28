export const TableCartRow = (props) => {
    // TODO
    const localCurrency = '$';
    //-- end
    const { title, shortDescription, images, quantity, price } = props;
    return (
        <>
            <td className='py-1 px-4 text-blue-500 w-2/12 aspect-square bg-red-500'>
                {images[0]}
            </td>
            <td className='py-1 px-4 text-gray-500 w-4/12 text-sm'>
                {title}
            </td>
            <td className='py-1 px-4 text-gray-500 w-2/12 text-xs'>
                {shortDescription}
            </td>
            <td className='py-1 px-4 text-blue-500 w-1/12'>
                {quantity}
            </td>
            <td className='py-1 px-4 text-blue-700 w-2/12'>
                <div className="flex flex-row justify-between gap-2">
                    <div>{localCurrency}</div>
                    <div>{price}</div>
                </div>
            </td>
        </>
    )
}
