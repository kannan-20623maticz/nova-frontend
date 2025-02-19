import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Images from '@/Images';

const TopBlackbox = ({ page, data }) => {
    console.log("data--------------",data);
    return (
        <div className={`innertopbg ${page && `top${page}bg`}`}>
            {(page === "community" || page === "creators") && <Image src={(page === "community" && Images.communitytopbg) || (page === "creators" && Images.walletfootbg)} alt="cover" className="img-fluid sectionbgimg" fill />}
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={10} xl={9} xxl={8}>
                        <div className="blackbox blackboxlightbg">
                            {
                                data?.map((da) => (
                                    <Row className="justify-content-center" key={da.datahead}>
                                        <Col xs={12} sm={12} md={12} lg={10}>
                                            <p className={`paracontent text-center blackboxlightcontent ${page === "community" && "text-lightblue"} ${page === "fans" && "text-skyblue"} ${page === "dao" && "my-3"}`}>{da.heading}</p>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={9}>
                                            {page !== "dao" && <p className={`paracontent text-center text-white blackboxendcontent ${page === "creators" && "text-mediumpink"}`}>{da.description}</p>}
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

export default TopBlackbox;