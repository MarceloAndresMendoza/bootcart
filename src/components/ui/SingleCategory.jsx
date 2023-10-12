import * as env from '../../config/env.js'
const SUNBEAM_ENDPOINT = env.SUNBEAM_ENDPOINT;

export const SingleCategory = (props) => {
    const { smallMode, currentImage, categoryTitle, count } = props;
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
            <div className={`aspect-square flex-shrink-0 hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center justify-between single-category-container rounded-md border relative`}>
                <div>
                    <p className={`text-xs font-bold text-slate-500 text-center w-5 px-1 py-1 rounded-full bg-slate-100 absolute right-0 top-0`}>{count}</p>
                </div>
                <div className='h-full flex justify-center flex-col overflow-hidden'>
                    <img className='max-w-full' src={`${SUNBEAM_ENDPOINT}/files?filename=${currentImage}`} alt={categoryTitle} />
                </div>
                <div className='w-full'>
                    <p className={`${smallMode ? 'text-xs text-slate-700' : 'text-xs font-bold text-slate-500'} text-center w-full px-2 py-1 rounded-sm bg-slate-100`}>{categoryTitle}</p>
                </div>
            </div>
        </>
    );
};
