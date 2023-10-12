import { useContext, useEffect } from "react";
import { UserContext } from '../../../contexts/user.context';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const UserLoggedGreeting = () => {
    const { t, i18n } = useTranslation();
    const userContext = useContext(UserContext);
    const {
        isAuthenticated,
        user,
        getUserInfo
    } = userContext;

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        isAuthenticated && user ?
            <h3 className="text-lg text-blue-500 px-4">
                <NavLink
                    to='/account'
                    className='hover:underline'
                >
                    {t('welcome-user-prefix', { name: user.firstName })}
                </NavLink>
            </h3>
            : null
    )
}