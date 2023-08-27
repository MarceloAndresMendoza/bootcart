export const SingleProduct = (props) => {
    const {smallMode, currentImage, productTitle, productDescription, productPrice} = props;
    const boxSize = (smallMode === true) ? ['20', '24'] : ['32', '48'];
    return (
        <>
            <div className={`aspect-square flex-shrink-0 hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center justify-between w-${boxSize[0]} md:w-${boxSize[1]} rounded-md`}>
                <div className='h-full flex justify-center flex-col'>
                    <img className='max-w-full' src={currentImage} alt={productTitle} />
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
