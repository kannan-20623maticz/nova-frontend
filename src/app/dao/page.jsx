"use client";

import React, { useState } from 'react';
import InnerPage from '@/components/InnerPage';
import Images from '@/Images';

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

    return (
        <main className="daopage">
            <InnerPage page="dao" sectionheadone="Why DAOs Thrive with NOVA" sectionheadtwo="Key Features" bannersection={bannersection} topblackbox={topblackbox} multiboxone={whydao} multiboxtwo={keyfeatures} footblackbox={footblackbox} />
        </main>
    )
}

export default page;