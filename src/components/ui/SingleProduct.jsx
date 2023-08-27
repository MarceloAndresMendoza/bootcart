export const SingleProduct = (props) => {
    const {mobileWidth, desktopWidth, currentImage, productTitle, productDescription, productPrice} = props;
    return (
        <>
            <div className={`aspect-square flex-shrink-0 hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center justify-between w-${mobileWidth} md:w-${desktopWidth} rounded-md`}>
                <div className='h-full flex justify-center flex-col'>
                    <img className='max-w-full' src={currentImage} alt="" />
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
