export const SingleCategory = (props) => {
    const { smallMode, currentImage, categoryTitle, categoryDescription, showDescription } = props;
    const boxSize = (smallMode === true) ? [80, 100] : [140, 180];
    //Tailwind won't let me put this styles as dynamic without messing them, maybe the css preprocessor issue.
    return (
        <>
            <style>
                {`
                .single-category-container {
                    width: ${boxSize[0]}px;
                }
                @media (min-width: 768px) {
                    .single-category-container {
                        width: ${boxSize[1]}px;
                        }
                    }
                `}
            </style>
            <div className={`aspect-square flex-shrink-0 hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center justify-between single-category-container rounded-md`}>
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
        </>
    );
};
