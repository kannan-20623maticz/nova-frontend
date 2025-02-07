"use client";

import React, { useState } from 'react';
import InnerPage from '@/components/InnerPage';
import Images from '@/Images';

const page = () => {

    const [bannersection] = useState(
        {
            datahead: "Creator Benefits",
            datasubhead: "Unlock Your Full Web3 Potential",
            datadesc: "NOVA equips creators with the tools to monetize and grow their brand all while keeping 100% of what they earn.",
            dataimg: Images.creator
        }
    );

    const [topblackbox] = useState([
        {
            datahead: "The NOVA platform is designed to help creators take their personal brand to the next level.",
            datadesc: "From monetization tools to community engagement features, NOVA provides everything you need to connect with your audience, grow your brand, and keep 100% of what you earn—all in a fully decentralized ecosystem."
        }
    ]);

    const [whycreators] = useState([
        {
            dataimg: Images.whycreatorone,
            datahead: "Maximize Your Earnings",
            datadesc: "NOVA ensures Creators keep 100% of their earnings with no platform or gas fees, whether through memberships, tips, or NFT sales. Plus, Creators can earn more with royalties every time your NFTs are resold on the secondary market."
        },
        {
            dataimg: Images.whycreatortwo,
            datahead: "Engage and Grow Your Community",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.whycreatorthree,
            datahead: "Diverse Monetization Options",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.whycreatorfour,
            datahead: "Live Virtual Events",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [keyfeatures] = useState([
        {
            dataimg: Images.creatorfeatone,
            datahead: "No Platform Fees",
            datadesc: "Keep 100% of your revenue from NFT memberships, tips, and subscriptions."
        },
        {
            dataimg: Images.creatorfeattwo,
            datahead: "NFT Membership Passes",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.creatorfeatthree,
            datahead: "Token Gated Engagement",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.creatorfeatfour,
            datahead: "Flexible Monetization Options",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.creatorfeatfive,
            datahead: "Live Events",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.creatorfeatsix,
            datahead: "Secure, Decentralized Data",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
    ]);

    const [footblackbox] = useState([
        {
            datahead: "NOVA empowers creators to grow their audience, connect with fans, and earn like never before.",
            datadesc: "Try NOVA Today"
        }
    ]);

    return (
        <main className="creatorspage">
            <InnerPage page="creators" sectionheadone="Why Creators Choose NOVA" sectionheadtwo="Key Features" bannersection={bannersection} topblackbox={topblackbox} multiboxone={whycreators} multiboxtwo={keyfeatures} footblackbox={footblackbox} />
        </main>
    )
}

export default page;