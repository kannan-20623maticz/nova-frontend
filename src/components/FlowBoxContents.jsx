
import Image from 'next/image';
import React from 'react';

const FlowBoxContents = ({ data,image }) => {
    console.log("data_data_FlowBoxContents",data,image);
    return (
        <div className="flowboxgrid">
            {
                data.map((da,i) => (
                    <div className="borderbox" key={i}>
                        <div className="flexbox flowboxgridhead">
                            {/* <div>
                                <Image src={image[i].dataimg} alt={image[i].heading} className="img-fluid flowboximg" />
                            </div> */}
                            <div>
                                {da.heading && <p className="borderboxhead paracontent">{da.heading}</p>}
                                {da.description && <p className="borderboxdesc paracontent">{da.description}</p>}                                
                            </div>
                        </div>
                        <div className="flowboxgridbody">
                        {/* <p className="paracontent borderboxdesc text-grey"> */}
                                                {/* {da.sunediter} */}
             <p  className="paracontent borderboxdesc text-grey" dangerouslySetInnerHTML={{ __html: da.sunediter || "Default text" }} />

                                            {/* </p> */}
                            {/* <ul className="flowboxgridul"> */}
                                {/* {
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
                                } */}
                            {/* </ul> */}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default FlowBoxContents;