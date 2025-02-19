"use client";

import React, { useState,useEffect } from 'react';
import InnerPage from '@/components/InnerPage';
import Images from '@/Images';
import { getCms } from "../../action/cmsAction";


const page = () => {

    const [bannersection] = useState(
        {
            datahead: "Fans Deserve More: Own a Piece of the Journey",
            datadesc: "NOVA lets fans go beyond content access, offering ownership through NFT memberships and a closer connection to their favorite creators and communities.",
            dataimg: Images.fans
        }
    );

    const [topblackbox] = useState([
        {
            datahead: "NOVA offers fans more than just access to content—it’s a way to build meaningful connections with creators, own a piece of the experience, and join an exclusive community.",
            datadesc: "With NOVA, you’re not just a fan—you’re an integral part of the journey."
        }
    ]);

    const [whyfans] = useState([
        {
            dataimg: Images.fansone,
            datahead: "Ownership and Investment",
            datadesc: "Support your favorite creators by purchasing NFT memberships and owning a part of their journey. As their popularity grows, you can resell your NFT passes on the secondary market and benefit from their rising success."
        },
        {
            dataimg: Images.fanstwo,
            datahead: "Real-Time Interaction",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.fansthree,
            datahead: "Exclusive Perks and Access",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.fansfour,
            datahead: "Showcase Your Membership Pass on Your Social Profile",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [keyfeatures] = useState([
        {
            dataimg: Images.fansfeatone,
            datahead: "NFT Memberships",
            datadesc: "Invest in creators, gain exclusive access and own a part of their journey."
        },
        {
            dataimg: Images.fansfeattwo,
            datahead: "Resale Opportunities",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.fansfeatthree,
            datahead: "Live Engagement Tools",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.fansfeatfour,
            datahead: "Tip your favorite creators",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.fansfeatfive,
            datahead: "Stream Live & Virtual Events",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.fansfeatsix,
            datahead: "Custom Fan Profiles",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
    ]);

    const [footblackbox] = useState([
        {
            datahead: "Connect with creators, unlock exclusive perks, and own a piece of the journey like never before.",
            datasubhead: "Step beyond fandom and into ownership.",
            datadesc: "Discover Your Benefits as a Fan"
        }
    ]);

    const [cmsData, setCmsData] = useState("");
    console.log("cms_data",cmsData);


    const getCmsData = async () => {
        try {
          const getData = await getCms({ page: "fans" });
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
        <main className="fanspage">
            <InnerPage page="fans" sectionheadone={cmsData?.content?.[2]?.heading} sectionheadtwo={cmsData?.content?.[3]?.heading}
             bannersection={(cmsData && cmsData?.content[0] ) ? cmsData?.content[0]: []} 
             bannerinamge={bannersection}
             topblackbox={[ (cmsData,cmsData?.content? cmsData?.content?.[1]: {})]} 
             multiboxone={(cmsData && cmsData?.content?.[2].card ) ? cmsData?.content?.[2].card: []}
             multiboxoneimage ={whyfans}

             multiboxtwo={(cmsData && cmsData?.content?.[3].card ) ? cmsData?.content?.[3].card: []}
             multiboxtwoimage={keyfeatures}

             footblackbox={[ (cmsData,cmsData?.content? cmsData?.content?.[4]: {})]} />
        </main>
    )
}

export default page;