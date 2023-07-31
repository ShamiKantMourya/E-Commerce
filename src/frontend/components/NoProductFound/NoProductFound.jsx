import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import NoDataFound from "../../Animations/No Data Found.json";

const NoProductFound = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NoDataFound,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
  return (
    <div className='.notfound-page'>
    <div className='pnf-container'>
         <div className='animation'>
         <Lottie 
         options={defaultOptions}
         />
         </div>
         <h3 className='pnf-txt'>No Product Found</h3>
         <Link to="/products" className="pnf-link"><h4 className='error-text'>Check Other Products</h4></Link>
     </div>
</div>
  )
}

export default NoProductFound;