import { useTranslation } from 'react-i18next';
import { TableTitle } from '../../ui/smallbits/TableTitle';
import { TableRow } from '../../ui/smallbits/TableRow';
export const UserInfoTable = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='px-4'>
            <table className=' shadow-sm w-full  border-l-4 border-blue-300'>
                <TableTitle text={t('table-user-info-title')} />
                <tbody>
                    <TableRow label={t('user-name-label')} text={t('user-name')} />
                    <TableRow label={t('user-email-label')} text={t('user-email')} />
                </tbody>
            </table>
        </div>
    )
}
