import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { SectionTitle } from '../ui/smallbits/SectionTitle';
import { login } from '../../helpers/login';
import { UserContext } from '../../contexts/user.context';

export const LoginForm = ({ callback }) => {
    const { t, i18n } = useTranslation();
    // Set components variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
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

    // Check if user is authenticated on load
    useEffect(() => {
        getUserInfo();
    }, []);

    // Form methods
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleLoginNow = async () => {
        setIsLoading(true);
        const loginResult = await login(email, password);
        setIsLoading(false);
        if (isAuthenticated) {
            alert('Login success');
            callback();
        } else {
            alert('Login failed');
        }
    }
    return (
        <>
            <SectionTitle text={t('please-login-now-text')} />
            {
                isLoading ? 
                    <div className='rounded-md m-4 shadow-md p-4 flex justify-center items-center max-w-md h-[200px]'>
                        <div>Espere un momento...</div>
                    </div>
                    :
                    <div className="rounded-md m-4 shadow-md p-4 flex flex-col gap-4 max-w-md">
                    <label className="flex flex-col text-gray" htmlFor="email">
                        {t('email-label')}
                        <input
                            className="border-gray border rounded-md p-2 shadow-inner mt-2"
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t('email@placeholder.com')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label className="flex flex-col text-gray" htmlFor="password">
                        {t('password-label')}
                        <div className="flex flex-row gap-2">
                            <input
                                className="border-gray border rounded-md p-2 shadow-inner w-full mt-2"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="border rounded-md px-2 hover:bg-gray-100 mt-2"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <i className="fa-solid fa-eye text-red-500"></i> : <i className="fa-solid fa-eye-slash text-blue-500"></i>}
                            </button>
                        </div>
                    </label>
                    <div className="flex flex-row gap-2">
                        <button
                            className="rounded-md p-2 w-1/2 bg-blue-500 text-white hover:bg-blue-600"
                            onClick={handleLoginNow}
                        >
                            {t('login_button')}
                        </button>
                        <NavLink to='/signup' className={'border rounded-md p-2 w-1/2 hover:bg-gray-100 hover:border-transparent'}>
                            <button
                                className="w-full"
                            >
                                {t('sign_up_button')}
                            </button>
                        </NavLink>
                    </div>
            </div>
            }
        </>
    )
}
