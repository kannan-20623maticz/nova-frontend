
import Image from 'next/image';
import React from 'react';

const FlowBoxContents = ({ data }) => {
    return (
        <div className="flowboxgrid">
            {
                data.map((da) => (
                    <div className="borderbox" key={da.datahead}>
                        <div className="flexbox flowboxgridhead">
                            <div>
                                <Image src={da.dataimg} alt={da.datahead} className="img-fluid flowboximg" />
                            </div>
                            <div>
                                {da.datahead && <p className="borderboxhead paracontent">{da.datahead}</p>}
                                {da.datadesc && <p className="borderboxdesc paracontent">{da.datadesc}</p>}                                
                            </div>
                        </div>
                        <div className="flowboxgridbody">
                            <ul className="flowboxgridul">
                                {
                                    da.datasublists.map((dasub) => (
                                        <li className="flowboxgridli" key={dasub.datasubhead}>
                                            {dasub.datasubhead &&
                                                <p className="paracontent flowboxgridlihead text-lightgreen">
                                                    {dasub.datasubhead}
                                                </p>}
                                            <p className="paracontent borderboxdesc text-grey">
                                                {dasub.datasubdesc}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default FlowBoxContents;