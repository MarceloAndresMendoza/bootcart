import { useTranslation } from 'react-i18next';
import { StoreTitle } from '../components/store/branding/StoreTitle.jsx'
import { StoreIntroduction } from '../components/store/branding/StoreIntroduction.jsx';
import { Categories } from '../components/store/categories/Categories.jsx';
import { StoreInfoIcons } from '../components/store/support/StoreInfoIcons.jsx';
import { ProductsAll } from '../components/store/products/ProductsAll.jsx';

export const AppIndex = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <StoreTitle />
            <ProductsAll small={false} featured />
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
