import React from 'react';
import { Triangle } from 'react-loader-spinner';

import "./CSS/loader.css";

const Loader = () => {
  return (
    <div>
      <div className='loader'>
      <Triangle
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
      </div>
    </div>
  )
}

export default Loader;