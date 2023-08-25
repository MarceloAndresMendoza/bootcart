import { useTranslation } from 'react-i18next';

export const AppIndex = () => {
    const {t, i18n} = useTranslation();
    return (
        <>
            <div className="p-4">
                <h1>
                    {t('hello-world')}
                </h1>
            </div>
        </>
    )
}
