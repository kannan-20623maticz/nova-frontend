import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopBlackbox = ({ page, data }) => {
    return (
        <div className={`innertopbg ${page && `top${page}bg`}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={10} xl={9} xxl={8}>
                        <div className="blackbox blackboxlightbg">
                            {
                                data.map((da) => (
                                    <Row className="justify-content-center" key={da.datahead}>
                                        <Col xs={12} sm={12} md={12} lg={10}>
                                            <p className={`paracontent text-center blackboxlightcontent ${page === "community" && "text-lightblue"} ${page === "fans" && "text-skyblue"} ${page === "dao" && "my-3"}`}>{da.datahead}</p>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={9}>
                                            {page !== "dao" && <p className={`paracontent text-center text-white blackboxendcontent ${page === "creators" && "text-mediumpink"}`}>{da.datadesc}</p>}
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