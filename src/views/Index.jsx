import { useTranslation } from 'react-i18next';

export const Index = () => {
    const {t, i18n} = useTranslation();
    return (
        <>
            <div className="p-4">
                <h1>
                    {t('hello-world').repeat(500)}
                </h1>
            </div>
        </>
    )
}
