
import Image from 'next/image';
import React from 'react';

const BoxContents = ({ data, oddgrid }) => {
    return (
        <div className={`gridbox ${oddgrid ? "oddgrid" : ""}`}>
            {
                data.map((da) => (
                    <div className="borderbox" key={da.datahead}>
                        <Image src={da.dataimg} alt={da.datahead} className="img-fluid borderboximg" />
                        <p className="borderboxhead paracontent">{da.datahead}</p>
                        <p className="borderboxdesc paracontent">{da.datadesc}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default BoxContents;