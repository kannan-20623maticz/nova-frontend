
import Image from 'next/image';
import React from 'react';

const BoxContents = ({ data, oddgrid ,image}) => {
    console.log("fefewf",data,image,oddgrid);
    return (
        <div className={`gridbox ${oddgrid ? "oddgrid" : ""}`}>
            {
                data?.map((da,i) => (
                    <div className="borderbox" key={i}>
                        <Image src={image?.[i]?.dataimg} alt={da?.heading} className="img-fluid borderboximg" />
                        <p className="borderboxhead paracontent">{da.heading}</p>
                        <p className="borderboxdesc paracontent">{da.description}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default BoxContents;