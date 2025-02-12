"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import Images from '@/Images';
import Link from 'next/link';
import Lottie from 'lottie-react';
import BoxContents from '@/components/BoxContents';
import FlowBoxContents from '@/components/FlowBoxContents';
import FooterBlackbox from '@/components/FooterBlackbox';
import TopBlackbox from '@/components/TopBlackbox';
import InnerPage from '@/components/InnerPage';


const page = () => {

    const [bannersection] = useState(
        {
            datahead: "Community Hub",
            datasubhead: "Where Social Connections Thrive",
            datadesc: "Discover, join, and grow your social following in a space built for meaningful engagement and collaboration",
            dataimg: Images.community
        }
    );

    const [topblackbox] = useState([
        {
            datahead: "The NOVA Community Hub is the ultimate destination for social communities to hang out, connect, and grow together.",
            datadesc: "Whether you're in a private group chat with friends, an exclusive token-gated community, or sharing your latest content, this is the hub where meaningful connections and creativity thrive."
        }
    ]);

    const [communitythrives] = useState([
        {
            dataimg: Images.communityone,
            datahead: "Easy Login for Effortless Access",
            datadesc: "NOVA makes connecting simple with an easy login process using just your email and password. Say goodbye to complicated setups —get started instantly and dive into your community with ease."
        },
        {
            dataimg: Images.communitytwo,
            datahead: "A Central Space for Connection",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.communitythree,
            datahead: "Empowering Creators and Communities",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.communityfour,
            datahead: "Discover & Share Content",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [keyfeatures] = useState([
        {
            dataimg: Images.keyfeatone,
            datahead: "Private and Public Group Chats",
            datadesc: "Connect with friends in private spaces, join public conversations, or access exclusive token-gated groups for meaningful interactions."
        },
        {
            dataimg: Images.keyfeattwo,
            datahead: "Live Video and Audio Rooms",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.keyfeatthree,
            datahead: "Content Sharing",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.keyfeatfour,
            datahead: "Super Search Functionality",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.keyfeatfive,
            datahead: "Topic Tagging and Categorization",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.keyfeatsix,
            datahead: "Inspiration and Discovery",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
    ]);

    const [footblackbox] = useState([
        {
            datahead: "Whether you're growing your audience, connecting with friends, or finding inspiration, the NOVA Community Hub has everything you need to connect and create.",
            datadesc: "Explore the Community Hub"
        }
    ]);

    return (
        <main className="communitypage">
            <InnerPage page="community" sectionheadone="Where Your Community Thrives" sectionheadtwo="Key Features" bannersection={bannersection} topblackbox={topblackbox} multiboxone={communitythrives} multiboxtwo={keyfeatures} footblackbox={footblackbox} />
        </main>


        // <>
        //     <section className="sectionone bannersection">
        //         <Container>
        //             <Row className="align-items-center">
        //                 <Col xs={12} sm={12} md={12} lg={6} className="mb40">
        //                     <div className="bannerbox">
        //                         <h1 className="banner-title">
        //                             Community Hub
        //                         </h1>
        //                         <p className="banner-subtitle my-2">
        //                             Where Social Connections Thrive
        //                         </p>
        //                         <p className="paracontent mb-4">
        //                             Discover, join, and grow your social following in a space built for        meaningful engagement and collaboration
        //                         </p>
        //                         <button type="button" className="btn sitebtn">
        //                             Download
        //                             <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
        //                         </button>
        //                     </div>
        //                 </Col>
        //                 <Col xs={12} sm={12} md={12} lg={6}>
        //                     <div className="bannerimgbox">
        //                         {/* <Lottie animationData={Images.community} loop={true} /> */}
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </section>
        //     <section className="sectiontwo p-0">
        //         <TopBlackbox page="community" data={topblackbox} />
        //     </section>
        //     <section className="sectionthree sectionblackbg">
        //         <Container className="containertwo">
        //             <div className="blackbox">
        //                 <Row className="justify-content-center">
        //                     <Col xs={12} sm={12} md={12} lg={8} xl={6}>
        //                         <h2 className="section-title text-center">
        //                             Where Your Community Thrives
        //                         </h2>
        //                     </Col>
        //                 </Row>
        //                 <div className="sectionthreebox gifimgbox mt-5">
        //                     <BoxContents data={communitythrives} />
        //                 </div>
        //             </div>
        //         </Container>
        //     </section>
        //     <section className="sectionfour sectionblackbg">
        //         <Container className="containertwo">
        //             <div className="blackbox">
        //                 <Row className="justify-content-center">
        //                     <Col xs={12} sm={12} md={12} lg={8} xl={6}>
        //                         <h2 className="section-title text-center">
        //                             Key Features
        //                         </h2>
        //                     </Col>
        //                 </Row>
        //                 <div className="sectionfourbox mt-5 gridboxthree">
        //                     <BoxContents data={keyfeatures} />
        //                 </div>
        //             </div>
        //         </Container>
        //     </section>
        //     <section className="sectionfive p-0">
        //         <FooterBlackbox page="community" data={footblackbox} />
        //     </section>
        // </>

    )
}

export default page;