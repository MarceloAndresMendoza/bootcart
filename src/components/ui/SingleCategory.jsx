export const SingleCategory = (props) => {
    const { smallMode, currentImage, categoryTitle, categoryDescription, showDescription } = props;
    const boxSize = (smallMode === true) ? ['16', '24'] : ['32', '48'];
    return (
        <div className={`aspect-square flex-shrink-0 hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center justify-between w-${boxSize[0]} md:w-${boxSize[1]} rounded-md`}>
            <div className='h-full flex justify-center flex-col'>
                <img className='max-w-full' src={currentImage} alt={categoryTitle} />
            </div>
            <div>
                <p className='text-xs text-center w-full'>{categoryTitle}</p>
                {showDescription && (
                    <p className='text-xs text-center w-full'>{categoryDescription}</p>
                )}
            </div>
        </div>
    );
};
