import { NavLink } from "react-router-dom";

export const TableRow = (props) => {
    const { label, text, link = '' } = props;
    return (
        <tr className='border-b border-gray-100'>
            <td className='py-1 px-4 text-gray-500'>
                {label}
            </td>
            {
                link ? (
                    <td className='py-1 px-4 text-blue-500'>
                        <NavLink className={'hover:border-b-2 hover:border-blue-500'} to={link}>{text}</NavLink>
                    </td>
                ) : (
                    <td className='py-1 px-4 text-blue-500'>
                        {text}
                    </td>
                )
            }
        </tr>
    )
}
