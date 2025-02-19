"use client";

import React, { useState,useEffect } from 'react';
import Images from '@/Images';
import InnerPage from '@/components/InnerPage';

import { getCms } from "../../action/cmsAction";

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


    const [cmsData, setCmsData] = useState("");
console.log("cms_data",[cmsData?.content?.[3]]);
    // const getCmsData = async () => {
    //     try {
    //       const getData = await getCms({ page: "HomePage" });
    //       console.log("frontend_getData_cms",getData);
    //       if (getData.status) {
    //         setCmsData(getData.data.data)
    //       }
    //     } catch (e) {
    //       console.log("getCmsData_err", e);
    //     }
    //   }

    const getCmsData = async () => {
        try {
          const getData = await getCms({ page: "community" });
          console.log("frontend_getData_cms",getData);
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
        <main className="communitypage">
            <InnerPage page="community" sectionheadone={cmsData?.content?.[2]?.heading} sectionheadtwo={cmsData?.content?.[3]?.heading}
             bannersection={(cmsData && cmsData?.content[0] ) ? cmsData?.content[0]: []} 
            bannerinamge={bannersection}
             topblackbox={ [ (cmsData,cmsData?.content? cmsData?.content?.[1]: {})]}
              multiboxone={(cmsData && cmsData?.content?.[2].card ) ? cmsData?.content?.[2].card: []}
              multiboxoneimage ={communitythrives}
               multiboxtwo={(cmsData && cmsData?.content?.[3].card ) ? cmsData?.content?.[3].card: []}
               multiboxtwoimage={keyfeatures}

                footblackbox={[ (cmsData,cmsData?.content? cmsData?.content?.[4]: {})]} />
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