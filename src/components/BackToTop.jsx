"use client";

import React from 'react';
import Images from '@/Images';
import Image from 'next/image';

const BackToTop = ({ show, handleClick }) => {
    return (
        <>
            {
                show && <div className="backtotop">
                    <div className="backtotopbox">
                        <button type="button" className="btn p-0 border-0" onClick={handleClick}>
                            <Image src={Images.backtop} alt="Back To Top" className="img-fluid" />
                        </button>
                    </div>
                </div>
            }
        </>

    )
}

export default BackToTop;