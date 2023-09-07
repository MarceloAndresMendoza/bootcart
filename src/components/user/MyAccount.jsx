import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/smallbits/SectionTitle';
import { getCurrentUserInfo } from '../../helpers/getCurrentUserInfo';
import { UserInfoTable } from './UserInfoTable';

export const MyAccount = () => {
    const { t, i18n } = useTranslation();
    const [userProfile, setUserProfile] = useState([]);

    useEffect (()=> {
        const getUserProfile = async () => {
            const recievedUserInfo = await getCurrentUserInfo();
            setUserProfile(recievedUserInfo);
        }
        getUserProfile();
    }, [])

    return (
        <>
            <SectionTitle text={t('welcome-text-trailing-firstname') + `, ${userProfile.firstName}.`} />
            <UserInfoTable />
        </>
    )
}
