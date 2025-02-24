"use client";

import React from 'react';
import Image from 'next/image';
// import dynamic from "next/dynamic";

// const LottieLoader = dynamic(() => import("lottie-react"), { ssr: false });

import Images from "@/Images";


const Loading = () => {
    return (
        <div className="loaderbox">
            <div className="loaderboxdiv">
                {/* <LottieLoader animationData={Images.loader} loop={true} /> */}
                <Image src={Images.loadergif} alt="Loader" className="img-fluid loaderimg" />
            </div>
        </div>
    )
}

export default Loading;