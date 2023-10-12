// ============================================================
// Categories Generator
// Author: Marcelo Mendoza
// Created: 2023-10-11
// Description: Generates the categories based on the products
//              listed in the database
// ============================================================
import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { getProductImage } from '../../../assets/products/imageIndex';
import { SingleCategory } from '../../ui/SingleCategory';
import { SectionTitle } from '../../ui/smallbits/SectionTitle';
import { StoreContext } from '../../../contexts/store.context';
import * as env from '../../../config/env'

export const Categories = (props) => {
    const { small } = props;
    const { t, i18n } = useTranslation();
    const [categories, setCategories] = useState([]);

    // get the store context
    const storeContext = useContext(StoreContext)
    // import its methods
    const {
        products,
        loadProducts
    } = storeContext;

    const listCategories = () => {
        const categoriesSet = new Set();
        const categories = [];
        products.forEach((currentProduct, index) => {
            const category = currentProduct.category;
            if (!categoriesSet.has(category)) {
                categoriesSet.add(category);
                categories.push({
                    name: category,
                    image: currentProduct.images[0],
                    count: 1
                });
            } else {
                categories.forEach((currentCategory, index) => {
                    if (currentCategory.name === category) {
                        currentCategory.count += 1;
                    }
                });
            }
        });
        setCategories(categories);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    useEffect(() => {
        listCategories();
    }, [products]);

    return (
        <>
            <div>
                <div>
                    <SectionTitle text={t('categories-title')} />
                    <div className='flex flex-row overflow-x-auto overflow-y-hidden gap-6 m-4 pb-2'>
                        {
                            categories?.map((currentCategory, index) => {
                                const image = currentCategory.image ?? env.SUNBEAM_DEFAULT_IMAGE;
                                return (
                                    <div key={index}>
                                        <SingleCategory
                                            smallMode={small}
                                            currentImage={image}
                                            categoryTitle={currentCategory.name}
                                            count={currentCategory.count}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
