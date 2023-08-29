import { useTranslation } from 'react-i18next';
export const TableCartTotal = (props) => {
    // TODO
    const localCurrency = '$';
    //-- end
    const { price } = props;
    const { t, i18n } = useTranslation();
    return (
        <tr className='border-b border-blue-100 w-full bg-blue-100'>
            <td colSpan={5} className="w-5/6 font-bold px-4 py-2">
                {t('table-cart-total-label')}
            </td>
            <td className="flex flex-row justify-between gap-2 w-1/6 text-blue-900 font-bold py-2">
                <div>{localCurrency}</div>
                <div>{price}</div>
            </td>
        </tr>
    )
}
