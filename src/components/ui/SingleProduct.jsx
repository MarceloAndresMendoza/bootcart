import * as env from '../../config/env.js'
const SUNBEAM_ENDPOINT = env.SUNBEAM_ENDPOINT;

export const SingleProduct = (props) => {
    const { smallMode, currentImage, productTitle, productDescription, productPrice } = props;
    const boxSize = (smallMode === true) ? [80, 100] : [140, 180];
    //Tailwind won't let me put this styles as dynamic without messing them, maybe the css preprocessor issue.
    return (
        <>
            <style>
                {`
                .single-product-container {
                    width: ${boxSize[0]}px;
                }
                @media (min-width: 768px) {
                    .single-product-container {
                        width: ${boxSize[1]}px;
                        }
                    }
                `}
            </style>
            <div className={`aspect-square flex-shrink-0 hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center justify-between rounded-md single-product-container`}>
                <div className='h-full flex justify-center flex-col overflow-hidden'>
                    <img className='max-w-full' src={`${SUNBEAM_ENDPOINT}/files?filename=${currentImage}`} alt={productTitle} />
                </div>
                <div>
                    <p className='text-xs text-left w-full font-bold'>{productTitle}</p>
                    <p className='text-xs text-left w-full'>{productDescription}</p>
                    <p className='text-xs text-left w-full font-bold text-blue-500'>{productPrice}</p>
                </div>
            </div>
        </>
    )
}
