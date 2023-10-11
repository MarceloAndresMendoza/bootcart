import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { SectionTitle } from '../ui/smallbits/SectionTitle';
import { UserContext } from '../../contexts/user.context';

export const SignUpForm = ({ callback }) => {
    const { t, i18n } = useTranslation();
    // Load user context
    const userContext = useContext(UserContext);
    // Import its methods
    const {
        isAuthenticated,
        user,
        login,
        logout,
        getUserInfo,
        signUp
    } = userContext;
    const navigate = useNavigate();
    const [signupFormData, setSignupFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    );
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const setData = (e, dataElement) => {
        setSignupFormData({
            ...signupFormData,
            [dataElement]: e.target.value
        })
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSignUpForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signUp(signupFormData);
        setIsLoading(false);
        navigate('/account');
    }

    return !isLoading ? (
        <>
            <SectionTitle text={t('fill_form_to_signup_title')} />
            <div >
                <form
                    className="rounded-md m-4 shadow-md p-4 flex flex-col gap-4 max-w-md"
                    onSubmit={(e) => {
                        handleSignUpForm(e);
                    }}
                >
                    <label className="flex flex-col text-gray" htmlFor="firstName">
                        {t('first-name-label')}
                        <input
                            className="border-gray border rounded-md p-2 shadow-inner mt-2"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder={t('first-name-placeholder')}
                            value={signupFormData.firstName}
                            onChange={(e) => setData(e, 'firstName')}
                            required
                        />
                    </label>
                    <label className="flex flex-col text-gray" htmlFor="lastName">
                        {t('last-name-label')}
                        <input
                            className="border-gray border rounded-md p-2 shadow-inner mt-2"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder={t('last-name-placeholder')}
                            value={signupFormData.lastName}
                            onChange={(e) => setData(e, 'lastName')}
                            required
                        />
                    </label>
                    <label className="flex flex-col text-gray" htmlFor="email">
                        {t('email-label')}
                        <input
                            className="border-gray border rounded-md p-2 shadow-inner mt-2"
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t('email@placeholder.com')}
                            value={signupFormData.email}
                            onChange={(e) => setData(e, 'email')}
                            required
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
                                value={signupFormData.password}
                                onChange={(e) => setData(e, 'password')}
                                required
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
                            className="rounded-md p-2 w-1/2 bg-green-500 text-white hover:bg-green-600"
                            type='submit'
                        >
                            {t('sign-up-button')}
                        </button>
                        <NavLink to='/account' className={'border rounded-md p-2 w-1/2 hover:bg-gray-100 hover:border-transparent'}>
                            <button
                                className="w-full"
                            >
                                {t('login-instead-button')}
                            </button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </>
    ) : (
        <>
            <div className="rounded-md m-4 shadow-md p-4 flex flex-col gap-4 max-w-md h-100">
                Loading...
            </div>
        </>
    )
}
