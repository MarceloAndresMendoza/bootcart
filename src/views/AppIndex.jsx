import { useTranslation } from 'react-i18next';
import { StoreTitle } from '../components/store/branding/StoreTitle.jsx'
import { StoreIntroduction } from '../components/store/branding/StoreIntroduction.jsx';
import { Categories } from '../components/store/categories/Categories.jsx';
import { StoreInfoIcons } from '../components/store/support/StoreInfoIcons.jsx';
import { ProductsAll } from '../components/store/products/ProductsAll.jsx';
import { SUNBEAM_ENDPOINT } from '../config/env.js';

export const AppIndex = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697281811384.jpg`} alt="image-banner" className='h-40 w-full' />
            <div className='flex flex-col w-full'>
                <StoreTitle />
                <ProductsAll small={false} featured />
                <hr className='mx-4' />
                <div className='flex flex-col md:flex-row items-center my-4'>
                    <StoreIntroduction />
                    <StoreInfoIcons />
                </div>
                <hr className='mx-4' />
                <Categories small={true} />
            </div>
        </>
    )
}
