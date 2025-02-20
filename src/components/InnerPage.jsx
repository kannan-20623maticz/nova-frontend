"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic';
// import Lottie from 'lottie-react';
import BoxContents from '@/components/BoxContents';
import FooterBlackbox from '@/components/FooterBlackbox';
import TopBlackbox from '@/components/TopBlackbox';

const Lottieimg = dynamic(() => import('lottie-react'), { ssr: false });

import Images from '@/Images';


const InnerPage = (props) => {

    console.log("props_vi--",props);
    const { page, sectionheadone, sectionheadtwo, bannersection,bannerinamge, topblackbox, multiboxone,multiboxoneimage, multiboxtwo, multiboxtwoimage,footblackbox } = props;
    console.log("bannersection_bannersection",multiboxtwo);

    return (
        <>
            <section className="sectionone bannersection">
                <Image src={Images[`${page}bg`]} alt={`${page}`} className="img-fluid sectionbgimg" fill />
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                            <div className="bannerbox">
                                <h1 className={`banner-title ${page === "dao" && "text-white"}`}>
                                    {bannersection.heading}
                                </h1>
                                {bannersection.subHeading &&
                                    <p className="banner-subtitle my-2">
                                        {bannersection.subHeading}
                                    </p>
                                }
                                <p className={`paracontent mb-4 ${page === "dao" && "text-white"}`}>
                                    {bannersection.description}
                                </p>
                                <button type="button" className={`btn sitebtn ${(page === "creators" || page === "fans" || page === "dao") && "blackbtn"}`}>
                                    Download
                                    <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                                </button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="bannerimgbox">
                                {/* {page !== "community" && */}
                                    <>
                                        {(page === "creators" || page === "dao") && <Lottieimg animationData={bannerinamge?.dataimg} loop={true} />}
                                        {(page === "fans" || page === "community") && <Image src={bannerinamge?.dataimg} alt={bannersection?.heading ? bannersection?.heading : "Banner image"} className="img-fluid" loading="eager" />}
                                    </>
                                {/* } */}
                                {/* {page === "community" && <video className="communityvid" autoPlay={true} loop={true} muted={true}>
                                    <source src="/assets/images/community/community.mp4" type="video/mp4" />
                                    <track src="javascript:;" kind="captions"></track>
                                </video>} */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sectiontwo p-0">
                <TopBlackbox page={page} data={topblackbox} />
            </section>
            <section className="sectionthree sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                                <h2 className="section-title text-center">
                                    {sectionheadone}
                                </h2>
                            </Col>
                        </Row>
                        <div className="sectionthreebox gifimgbox mt-5">
                            <BoxContents data={multiboxone} image={multiboxoneimage} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectionfour sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                                <h2 className="section-title text-center">
                                    {sectionheadtwo}
                                </h2>
                            </Col>
                        </Row>
                        <div className="sectionfourbox mt-5 gridboxthree">
                            <BoxContents data={multiboxtwo} image={multiboxtwoimage} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectionfive p-0">
                <FooterBlackbox page={page} data={footblackbox} />
            </section>
        </>
    )
}

export default InnerPage;