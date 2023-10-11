import { useTranslation } from 'react-i18next';
import { TableTitle } from '../ui/smallbits/TableTitle';
import { TableRow } from '../ui/smallbits/TableRow';
import { useContext, useEffect, useState } from 'react';
import { simplifyFormatDate } from '../../utils/stringUtils';
import { UserContext } from '../../contexts/user.context';

export const UserInfoTable = () => {
    const { t, i18n } = useTranslation();
    // Load user context
    const userContext = useContext(UserContext);
    // Import its methods
    const {
        isAuthenticated,
        user,
        login,
        logout,
        getUserInfo
    } = userContext;

    return (
        <div className='px-4'>
            <table className=' shadow-sm w-full  border-l-4 border-blue-300'>
                <TableTitle text={t('table-user-info-title')} />
                <tbody>
                    {user ? (
                        <>
                            <TableRow label={t('user-email-label')} text={user.email} />
                            <TableRow label={t('user-full-name-label')} text={user.firstName + ' ' + user.lastName} />
                            <TableRow label={t('user-created-date-label')} text={simplifyFormatDate(user.createdAt)} />
                        </>
                    ) : (
                        <>
                            <TableRow label={t('user-not-logged-message')} text={t('please-login-now-text')} />
                        </>
                    )}
                </tbody>
            </table>
        </div >
    )
}
