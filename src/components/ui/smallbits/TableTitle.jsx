export const TableTitle = (props) => {
    const { text, span } = props;
    const colSpan = span !== undefined ? span : 2;
    return (
        <thead>
            <tr>
                <th colSpan={colSpan} className="py-1 px-4 text-left text-xl font-normal border-b border-blue-300">
                    {text}
                </th>
            </tr>
        </thead>
    )
}
