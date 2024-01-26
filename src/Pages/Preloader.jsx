import React from 'react';
import Lottie from 'lottie-react';
import loader from '../animation/loader.json';
import '../sass/loader.scss';

const Preloader = () => {
    return (
        <div className='loader'>
            <Lottie loop={true} animationData={loader} className='loaderAnimation'/>
        </div>
    );
}

export default Preloader;
