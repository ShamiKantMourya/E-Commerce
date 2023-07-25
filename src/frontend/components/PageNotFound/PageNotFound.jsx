import React from 'react';
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";

import PageNotFoundAnimation from "../../Animations/PageNotFound.json";
import "./PageNotFound.css";

const PageNotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: PageNotFoundAnimation,
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
                height={400}
                width={650}
                />
                </div>
                <h3 className='pnf-txt'>Page Not Found</h3>
                <Link to="/" className="pnf-link"><h4 className='error-text'>Go To Home</h4></Link>
            </div>
    </div>
  )
}

export default PageNotFound;