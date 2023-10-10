import { useTranslation } from 'react-i18next';
import { TableTitle } from '../ui/smallbits/TableTitle';
import { TableRow } from '../ui/smallbits/TableRow';
import { getCurrentUserInfo } from '../../helpers/getCurrentUserInfo';
import { useEffect, useState } from 'react';
import { simplifyFormatDate } from '../../utils/stringUtils';

export const UserInfoTable = () => {
    const { t, i18n } = useTranslation();
    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        const getUserProfile = async () => {
            const recievedUserInfo = await getCurrentUserInfo();
            setUserProfile(recievedUserInfo);
        }
        getUserProfile();
    }, [])

    return (
        <div className='px-4'>
            <table className=' shadow-sm w-full  border-l-4 border-blue-300'>
                <TableTitle text={t('table-user-info-title')} />
                <tbody>
                {userProfile ? (
                        <>
                            <TableRow label={t('user-email-label')} text={userProfile.email} />
                            <TableRow label={t('user-full-name-label')} text={userProfile.firstName + ' ' + userProfile.lastName} />
                            <TableRow label={t('user-created-date-label')} text={simplifyFormatDate(userProfile.createdAt)} />
                            <TableRow label={t('user-shopping-cart-label')} text={userProfile.shoppingCart ? t('goto-cart-text') : t('cart-emty-text')} />
                        </>
                    ) : (
                        <>
                            <TableRow label={t('user-not-logged-message')} text={t('please-login-now-text')}/>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}
