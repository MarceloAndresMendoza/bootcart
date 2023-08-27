import product1 from './mouse-1.jpg';
import product2 from './mouse-2.jpg';
import product3 from './mouse-3.jpg';
import product4 from './keyboard-1.jpg';
import product5 from './keyboard-2.jpg';
import product6 from './keyboard-3.jpg';
import product7 from './laptop-1.jpg';
import product8 from './monitor-1.jpg';
import product9 from './monitor-2.jpg';
import product10 from './monitor-3.jpg';
import product11 from './monitor-4.jpg';
import product12 from './monitor-5.jpg';
import product13 from './monitor-6.jpg';
import product14 from './monitor-7.jpg';

const productImages = [
    null,
    product1, product2, product3,
    product4, product5, product6, product7,
    product8, product9, product10, product11,
    product12, product13, product14,
];

export const getProductImage = (imageId) => {
    if (imageId >= 1 && imageId <= 14) {
        return productImages[imageId];
    } else {
        return null; // Return a default image or handle the case as needed
    }
};
