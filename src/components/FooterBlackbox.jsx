import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Images from '@/Images';

const FooterBlackbox = ({ page, data }) => {
    console.log("datataaaa",data);
    return (
        <div className={`innerfootbg ${page && `foot${page}bg`}`}>
            {(page === "community" || page === "creators") && <Image src={(page === "community" && Images.communitytopbg) || (page === "creators" && Images.creatorfootbg)} alt={data[0].heading ? data[0].heading : `${page}footbox`} className="img-fluid sectionbgimg" fill />}
            {(page !== "community" && page !== "creators") && <Image src={Images[`${page}footbg`]} alt={data[0].heading ? data[0].heading : `${page}footbox`} className="img-fluid sectionbgimg" fill />}
            {/* {(page === "fans" || page === "dao" || page === "wallet" || page === "marketplace" || page === "about") && <Image src={Images[`${page}footbg`]} alt="cover" className="img-fluid sectionbgimg" fill />} */}
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={10} xl={9} xxl={8}>
                        <div className="blackbox blackboxlightbg">
                            {
                                data?.map((da, i) => (
                                    <Row className="justify-content-center" key={i}>
                                        <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                                            {page === "fans" && da.datasubhead && <p className="paracontent text-center blackboxlightcontent text-white mb-2">{da.description}</p>}
                                            {/* <p className="paracontent text-center blackboxlightcontent">{da.description}</p> */}
                                            <p className="paracontent text-center blackboxlightcontent">{da.heading}</p>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={9}>
                                            {page === "dao" && da.datasubhead && <p className="paracontent text-center blackboxlightcontent text-lightblue mb-2">{da.description}</p>}
                                            <p className={`paracontent text-center ${page === "dao" && "text-white"} ${page !== "fans" && "blackboxendcontent"}  ${((page === "wallet") || (page === "marketplace") || (page === "creators")) && "text-mediumpink"} ${((page === "community") || (page === "fans")) && "text-skyblue"} ${page === "about" && "text-lightorange"}`}>{da.description}</p>
                                            {/* <p className={`paracontent text-center ${page === "dao" && "text-white"} ${page !== "fans" && "blackboxendcontent"}  ${((page === "wallet") || (page === "marketplace") || (page === "creators")) && "text-mediumpink"} ${((page === "community") || (page === "fans")) && "text-skyblue"} ${page === "about" && "text-lightorange"}`}>{da.heading}</p> */}

                                            <button type="button" className={`btn sitebtn mt-4 mx-auto ${page === "marketplace" && "rightarrow"} ${((page === "community") || (page === "fans")) && "skybluebtn"} ${page === "dao" && "darkbluebtn"} ${page === "about" && "lightorangebtn"}`}>
                                                {page === "marketplace" ? "Go to Marketplace" : "Download"}
                                                <Image src={page === "marketplace" ? Images.rightarrow : Images.download} alt="Down Arrow" className="img-fluid" />
                                            </button>
                                        </Col>
                                    </Row>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterBlackbox;