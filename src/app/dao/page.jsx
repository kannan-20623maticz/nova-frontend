"use client";

import React, { useState,useEffect } from 'react';
import InnerPage from '@/components/InnerPage';
import Images from '@/Images';
import { getCms } from "../../action/cmsAction";


const page = () => {

    const [bannersection] = useState(
        {
            datahead: "The Ultimate App for DAOs",
            datadesc: "NOVA is the all-in-one platform for discovering, managing, and growing DAOs. Empower your community with tools for collaboration, governance, and meaningful engagement.",
            dataimg: Images.dao
        }
    );

    const [topblackbox] = useState([
        {
            datahead: "NOVA is the premier platform for DAOs, offering everything your community needs to thrive"
        }
    ]);

    const [whydao] = useState([
        {
            dataimg: Images.daoone,
            datahead: "Exclusive DAO Profiles",
            datadesc: "Create dedicated profiles that showcase your DAO’s mission and identity, making it easier to attract new members. With enhanced discoverability, others can quickly find and join your DAO, helping you grow your community effectively."
        },
        {
            dataimg: Images.daotwo,
            datahead: "Tools for Collaboration & Governance",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.daothree,
            datahead: "Meaningful Engagement",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.daofour,
            datahead: "NOVA’s Commitment to DAOs",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [keyfeatures] = useState([
        {
            dataimg: Images.daofeatone,
            datahead: "DAO Profiles",
            datadesc: "Create custom profiles to represent your DAO and attract new members."
        },
        {
            dataimg: Images.daofeattwo,
            datahead: "Community Proposals",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.daofeatthree,
            datahead: "Voting Tools",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.daofeatfour,
            datahead: "DAO Membership Passes",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.daofeatfive,
            datahead: "Discover DAOs",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
    ]);

    const [footblackbox] = useState([
        {
            datahead: "Empower your community, drive meaningful change, and achieve your mission with tools designed to  help DAOs thrive.",
            datasubhead: "The future of decentralized collaboration starts here.",
            datadesc: "Discover DAOs on NOVA"
        }
    ]);
    const [cmsData, setCmsData] = useState("");
    console.log("cms_data",cmsData);

    const getCmsData = async () => {
        try {
          const getData = await getCms({ page: "dao" });
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
        <main className="daopage">
            <InnerPage page="dao" sectionheadone={cmsData?.content?.[2]?.heading} sectionheadtwo={cmsData?.content?.[3]?.heading}
            bannersection={(cmsData && cmsData?.content[0] ) ? cmsData?.content[0]: []} 
            bannerinamge={bannersection}
            topblackbox={[ (cmsData,cmsData?.content? cmsData?.content?.[1]: {})]}
          
            multiboxone={(cmsData && cmsData?.content?.[2].card ) ? cmsData?.content?.[2].card: []} 
            multiboxoneimage ={whydao}

             multiboxtwo={(cmsData && cmsData?.content?.[3].card ) ? cmsData?.content?.[3].card: []} 
             multiboxtwoimage={keyfeatures}

             footblackbox={[ (cmsData,cmsData?.content? cmsData?.content?.[4]: {})]} />
        </main>
    )
}

export default page;