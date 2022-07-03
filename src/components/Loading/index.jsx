import React from 'react';
import loadingData from '../../utils/animations/loadingData.json';
import Lottie from 'react-lottie';

const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    }
};


export const Loading = () => {

    return (
        <Lottie
            options={loadingOptions}
            width={300}
            height={300}
            isStopped={false}
            isPaused={false}
        />
    )
}