import { NavLink } from 'react-router-dom';
import * as env from '../../config/env.js'
const SUNBEAM_ENDPOINT = env.SUNBEAM_ENDPOINT;

export const SingleCategory = (props) => {
    const { smallMode, currentImage, categoryTitle, count } = props;
    const boxSize = (smallMode === true) ? [80, 100] : [100, 140];
    //Tailwind won't let me put this styles as dynamic without messing them, maybe the css preprocessor issue.
    return (
        <div className='border overflow-hidden border-blue-500 rounded-md'>
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
            <NavLink
                to={'/store/' + categoryTitle}
                
            >
                <div className={`aspect-square flex-shrink-0 hover:shadow-md hover:-translate-y-1 transition flex flex-col items-center justify-between single-category-container rounded-md relative`}>
                    <div>
                        <p className={`text-xs font-bold text-blue-700 text-center w-6 h-6 px-1 py-1 rounded-full bg-blue-100 absolute right-0 top-0 z-40`}>{count}</p>
                    </div>
                    <div className='h-full flex justify-center flex-col overflow-hidden'>
                        <img
                            className='max-w-full transition'
                            src={`${SUNBEAM_ENDPOINT}/files?filename=${currentImage}`}
                            alt={categoryTitle} />
                    </div>
                    <div className='w-full'>
                        <p className={`${smallMode ? 'text-xs text-blue-100' : 'text-xs font-bold text-blue-100'} text-center w-full px-2 py-1 bg-blue-700`}>{categoryTitle}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};
