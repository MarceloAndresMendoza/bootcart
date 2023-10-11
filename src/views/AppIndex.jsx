import { useTranslation } from 'react-i18next';
import { StoreTitle } from '../components/store/branding/StoreTitle.jsx'
import { ProductsFeatured } from '../components/store/products/ProductsFeatured.jsx';
import { StoreIntroduction } from '../components/store/branding/StoreIntroduction.jsx';
import { Categories } from '../components/store/categories/Categories.jsx';
import { StoreInfoIcons } from '../components/store/support/StoreInfoIcons.jsx';

export const AppIndex = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <StoreTitle />
            <ProductsFeatured small={false} />
            <hr className='mx-4' />
            <div className='flex flex-col md:flex-row items-center my-4'>
                <StoreIntroduction />
                <StoreInfoIcons />
            </div>
            <hr className='mx-4' />
            <Categories small={true} />
        </>
    )
}
