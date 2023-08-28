export const TableRow = (props) => {
    const { label, text } = props;
    return (
        <tr className='border-b border-gray-100'>
            <td className='py-1 px-4 text-gray-500'>
                { label }
            </td>
            <td className='py-1 px-4 text-blue-500'>
                { text }
            </td>
        </tr>
    )
}
