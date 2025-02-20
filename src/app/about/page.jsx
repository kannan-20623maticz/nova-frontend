"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic';
// import Lottie from 'lottie-react';
import FooterBlackbox from '@/components/FooterBlackbox';
import { getCms } from "../../action/cmsAction";


const Lottieimg = dynamic(() => import('lottie-react'), { ssr: false });

import Images from '@/Images';


const page = () => {

    const [footblackbox] = useState([
        {
            datahead: "Join the platform that empowers creators, fans, and communities to connect, grow, and thrive. Start your journey today and help shape the future of the web.",
            datadesc: "Get Started with NOVA"
        }
    ]);
    const [cmsData, setCmsData] = useState("");
    console.log("cms_data", cmsData);

    const getCmsData = async () => {
        try {
            const getData = await getCms({ page: "about" });
            console.log("frontend_getData_cms", getData);
            if (getData.status) {
                setCmsData(getData.data.data)
            }
        } catch (e) {
            console.log("getCmsData_err", e);
        }
    }

    useEffect(() => {
        getCmsData()
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <main className="aboutpage">
            <section className="sectionone bannersection">
                <Image src={Images.aboutbg} alt="about" className="img-fluid sectionbgimg" fill />
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                            <div className="bannerbox">
                                <h1 className="banner-title">
                                    {cmsData && cmsData?.content?.[0].heading}
                                </h1>
                                <p className="paracontent mb-4">
                                    {cmsData && cmsData?.content?.[0].description}

                                </p>
                                <button type="button" className="btn sitebtn blackbtn mt-4">
                                    Download
                                    <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                                </button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="bannerimgbox">
                                <Lottieimg animationData={Images.about} loop={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sectiontwo blackbg">
                <Container className="containertwo">
                    <div className="borderbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={9}>
                                <p className="borderboxhead centerhead text-center text-darkorange">{cmsData && cmsData?.content?.[1].heading}</p>
                                <div className="sectionvidbox text-center">
                                    <video className="novawalletvid" autoPlay={true} loop={true} muted={true}>
                                        <source src="/assets/images/wallet/walletnova.mp4" type="video/mp4" />
                                        <track src="javascript:;" kind="captions"></track>
                                    </video>
                                </div>
                                {/* <p className="paracontent text-grey text-center mb-3">
                                {cmsData && cmsData?.content?.[0].heading}                                </p> */}


                                <div className="paracontent text-grey text-center mb-3"
                                    dangerouslySetInnerHTML={{ __html: cmsData && cmsData?.content?.[1].sunediter }}
                                >
                                </div>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="sectionthree blackbg">
                <Container className="containertwo">
                    <div className="borderbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={9}>
                                <p className="borderboxhead centerhead text-center text-lightgreen">{cmsData && cmsData?.content?.[2].heading}</p>
                                <div className="sectionvidbox text-center">
                                    <video className="novawalletvid" autoPlay={true} loop={true} muted={true}>
                                        <source src="/assets/images/botspamvid.mp4" type="video/mp4" />
                                        <track src="javascript:;" kind="captions"></track>
                                    </video>
                                </div>
                                <div className="paracontent text-grey text-center mb-3"
                                    dangerouslySetInnerHTML={{ __html: cmsData && cmsData?.content?.[2].sunediter }}
                                >
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="sectionfour p-0">
                <FooterBlackbox page="about" data={[(cmsData, cmsData?.content ? cmsData?.content?.[3] : {})]} />
            </section>
        </main>
    )
}

export default page;