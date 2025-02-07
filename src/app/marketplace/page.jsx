"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic';
// import Lottie from 'lottie-react';
import BoxContents from '@/components/BoxContents';
import FlowBoxContents from '@/components/FlowBoxContents';
import FooterBlackbox from '@/components/FooterBlackbox';

const Lottieimg = dynamic(() => import('lottie-react'), { ssr: false });

import Images from '@/Images';

const page = () => {

    const [liboxone] = useState([
        {
            lihead: "Membership Passes:",
            licontent: "Unlock perks with creators, brands, and DAOs.",
        },
        {
            lihead: "Event Passes",
            licontent: "Secure access to virtual events in person events coming soon!",
        },
        {
            lihead: "Education Passes",
            licontent: "Purchase and access digital courses effortlessly.",
        },
    ]);

    const [liboxtwo] = useState([
        {
            lihead: "Upgrade Your Subscription Model :",
            licontent: "Transition to web3 business models with NFT memberships.",
        },
        {
            lihead: "Boost Value",
            licontent: "Secure access to virtual events in person events coming soon!",
        },
        {
            lihead: "Strengthen Connections",
            licontent: "Purchase and access digital courses effortlessly.",
        },
    ]);

    const [liboxthree] = useState([
        {
            lihead: "Mint and Collect",
            licontent: "Create and acquire NFTs seamlessly.",
        },
        {
            lihead: "Full Ownership",
            licontent: "Secure access to virtual events in person events coming soon!",
        },
        {
            lihead: "Future Expansion",
            licontent: "Purchase and access digital courses effortlessly.",
        },
    ]);

    const [flowboxcontents] = useState([
        {
            dataimg: Images.nftone,
            datahead: "NFT Staking",
            datadesc: "Transform community engagement with NOVA's innovative NFT staking feature.",
            datasublists: [
                {
                    datasubhead: "For Creators",
                    datasubdesc: "Reward your community by offering USDC staking rewards through profit sharing from NFT sales, building loyalty and deeper connections with your fans"
                },
                {
                    datasubhead: "For Fans",
                    datasubdesc: "Staking encourages long-term holding, making your membership even more valuable while rewarding your loyalty."
                },
            ]
        },
        {
            dataimg: Images.nfttwo,
            datahead: "NFT Borrowing",
            datadesc: "Need liquidity but don’t want to part with your NFTs?",
            datasublists: [
                {
                    datasubdesc: "Nova’s NFT borrowing feature lets you use your NFTs as collateral to access USDC without selling your assets."
                },
                {
                    datasubdesc: "Staking encourages long-term holding, making your membership even more valuable while rewarding your loyalty."
                },
            ]
        },
        {
            dataimg: Images.nftthree,
            datahead: "NFT Lending",
            datadesc: "Maximize the potential of your NFTs with NOVA's innovative lending solution.",
            datasublists: [
                {
                    datasubdesc: "Lend out your idle NFTs and earn passive income in the form of USDC. By putting your digital assets to work, you unlock a new way to generate value while retaining ownership of your NFTs"
                },
            ]
        },
    ]);


    const [creators] = useState([
        {
            dataimg: Images.creatorone,
            datahead: "Create NFT Membership Passes",
            datadesc: "Creators issue NFTs, such as membership passes, that grant holders access to exclusive benefits (e.g., content, perks, or events)."
        },
        {
            dataimg: Images.creatortwo,
            datahead: "Set Up Revenue-Sharing Pools",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.creatorthree,
            datahead: "Enable Staking on Nova Marketplace",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.creatorfour,
            datahead: "Reward Distribution",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [fans] = useState([
        {
            dataimg: Images.fansone,
            datahead: "Acquire Membership NFTs",
            datadesc: "Fans purchase or earn NFT membership passes from their favorite creators on the Nova NFT Marketplace."
        },
        {
            dataimg: Images.fanstwo,
            datahead: "Stake the NFT",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.fansthree,
            datahead: "Earn Rewards",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.creatorthree,
            datahead: "Unstake Anytime",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [forcreators] = useState([
        {
            content: "Grow loyalty with your fans by offering tangible incentives."
        },
        {
            content: "Encourage long-term holding to stabilize the market."
        },
        {
            content: "Establish recurring revenue sharing systems that foster trust and engagement."
        },
    ]);

    const [forfans] = useState([
        {
            content: "Earn passive income through staking rewards."
        },
        {
            content: "Strengthen community connections with creators."
        },
        {
            content: "Retain ownership of NFTs while enjoying exclusive benefits."
        },
    ]);
    const [flowboxcontentstwo] = useState([
        {
            dataimg: Images.flownft,
            datahead: "Why Use NFT Lending or Borrowing?",
            datasublists: [
                {
                    datasubhead: "Borrowers",
                    datasubdesc: "Need quick liquidity for investments, expenses, or opportunities but don’t want to part with your NFTs? Use them as collateral to secure a loan while retaining ownership of your valuable assets."
                },
                {
                    datasubhead: "Lenders",
                    datasubdesc: "Earn passive income by providing loans to NFT holders. Your loan is secured by the borrower’s NFT, which is held in a secure escrow until repayment."
                },
            ]
        },
    ]);

    const [borrowers] = useState([
        {
            dataimg: Images.creatorone,
            datahead: "List Your NFT for a Loan",
            datadesc: "Choose the NFT you want to use as collateral and list it on the NOVA platform. Set your desired loan terms, including the loan amount, duration, and interest rate. "
        },
        {
            dataimg: Images.creatortwo,
            datahead: "Receive Loan Offers",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.borrowerthree,
            datahead: "Accept an Offer",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.borrowerfour,
            datahead: "Repay and Reclaim Your NFT",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [lenders] = useState([
        {
            dataimg: Images.creatorone,
            datahead: "Browse NFT Listings",
            datadesc: "Explore NFTs listed by borrowers, each with their desired loan terms. Choose NFTs with terms that align with your investment goals."
        },
        {
            dataimg: Images.lendertwo,
            datahead: "Make a Loan Offer",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.lenderthree,
            datahead: "Fund the Loan",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
        {
            dataimg: Images.lenderfour,
            datahead: "Receive Repayment or NFT Ownership",
            datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
        },
    ]);

    const [fanownership] = useState([
        {
            dataimg: Images.nftstakeone,
            datahead: "Staking Rewards",
            datadesc: "Earn passive income by staking your NFTs, unlocking rewards while fostering stronger community engagement"
        },
        {
            dataimg: Images.nftstaketwo,
            datahead: "Borrowing Made Easy",
            datadesc: "Each pass represents a unique moment in the creator’s story, giving you a tangible, lasting connection to their achievements."
        },
        {
            dataimg: Images.nftstakethree,
            datahead: "Profitable Lending Opportunities",
            datadesc: "Limited-edition mints ensure exclusivity, enhancing both desirability and long-term value.",
        },
        {
            dataimg: Images.nftstakefour,
            datahead: "Secure Escrow",
            datadesc: "Each pass represents a unique moment in the creator’s story, giving you a tangible, lasting connection to their achievements."
        },
        {
            dataimg: Images.nftstakefive,
            datahead: "Flexible Terms",
            datadesc: "Limited-edition mints ensure exclusivity, enhancing both desirability and long-term value.",
        },
    ]);

    const [marketplacefeatures] = useState([
        {
            dataimg: Images.novafeatone,
            datahead: "Minting Options",
            datadesc: "Membership, event, and educational NFT passes."
        },
        {
            dataimg: Images.novafeattwo,
            datahead: "Auction Capabilities",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.novafeatthree,
            datahead: "Exclusive Access",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.novafeatfour,
            datahead: "Zero Fees",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.novafeatfive,
            datahead: "Fan Ownership",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
        {
            dataimg: Images.novafeatsix,
            datahead: "Secondary Marketplace",
            datadesc: "Creators have the option to auction their Lifetime or monthly memberships"
        },
    ]);

    const [footblackbox] = useState([
        {
            datahead: "The future of web3 starts here. Don’t miss your chance to join the first platform exclusively for NFT memberships.",
            datadesc: "Browse the Marketplace Now"
        }
    ]);

    return (
        <main className="marketplacepage">
            <section className="sectionone bannersection">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                            <div className="bannerbox">
                                <h1 className="banner-title text-white">
                                    The Premier Platform for NFT Memberships
                                </h1>
                                <p className="paracontent text-white mb-4">
                                    NOVA lets you mint, sell, and invest in passes for creators, events, and courses all in one seamless marketplace.
                                </p>
                                <button type="button" className="btn sitebtn mediumbluebtn">
                                    Download
                                    <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                                </button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="bannerimgbox">
                                <Lottieimg animationData={Images.marketplace} loop={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sectiontwo sectionblackbg">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={8}>
                            <h2 className="section-title text-center">What Makes the NOVA Marketplace Different?</h2>
                        </Col>
                    </Row>
                    <div className="sectiontwobox mt-5">
                        <div className="borderbox">
                            <div className="sectiontwo_leftrightbox">
                                <Row className="align-items-center">
                                    <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                                        <p className="paracontent borderboxhead">Memberships for Every
                                            Creator</p>
                                        <ul className="listboxul mt-4">
                                            {
                                                liboxone.map((libox, i) => (
                                                    <li className="listboxli starlist" key={libox.lihead}>
                                                        <p className="listboxlihead paracontent text-lightgreen fw500">
                                                            {libox.lihead}
                                                        </p>
                                                        <p className="borderboxdesc paracontent text-white">
                                                            {libox.licontent}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <div className="sectiontwo_leftrightboximg">
                                            <Lottieimg animationData={Images.novamarketdiffone} loop={true} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="sectiontwo_leftrightbox">
                                <Row className="align-items-center row-reverse">
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <div className="sectiontwo_leftrightboximg">
                                            <Lottieimg animationData={Images.novamarketdifftwo} loop={true} />
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                                        <p className="paracontent borderboxhead">Built for Growth and
                                            Engagement</p>
                                        <ul className="listboxul mt-4">
                                            {
                                                liboxtwo.map((libox, i) => (
                                                    <li className="listboxli starlist" key={libox.lihead}>
                                                        <p className="listboxlihead paracontent text-lightgreen fw500">
                                                            {libox.lihead}
                                                        </p>
                                                        <p className="borderboxdesc paracontent text-white">
                                                            {libox.licontent}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div className="sectiontwo_leftrightbox">
                                <Row className="align-items-center">
                                    <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                                        <p className="paracontent borderboxhead">Easy, Secure, and Decentralized</p>
                                        <ul className="listboxul mt-4">
                                            {
                                                liboxthree.map((libox, i) => (
                                                    <li className="listboxli starlist starlistorange" key={libox.lihead}>
                                                        <p className="listboxlihead paracontent text-orange fw500">
                                                            {libox.lihead}
                                                        </p>
                                                        <p className="borderboxdesc paracontent text-white">
                                                            {libox.licontent}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <div className="sectiontwo_leftrightboximg">
                                            <Lottieimg animationData={Images.novamarketdiffthree} loop={true} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectionthree sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center mb-5">
                            <Col xs={12} sm={12} md={12} lg={10}>
                                <h2 className="section-title text-center fw600">
                                    Turn Access into Assets with DeFi Memberships Options
                                </h2>
                                <p className="paracontent mt-3 text-center text-grey">
                                    Membership passes are no longer just about exclusive content—they’re now also a valuable monetary asset, which unlock new financial opportunities for creators and fans alike
                                </p>
                            </Col>
                        </Row>
                        <FlowBoxContents data={flowboxcontents} />
                    </div>
                </Container>
            </section>
            <section className="sectionfour bgimg">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={9} xxl={8}>
                            <div className="blackbox blackboxlightbg">
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={12} md={12} lg={8}>
                                        <p className="paracontent text-center blackboxlightcontent">
                                            How NFT <span className="text-mediumpink">Staking</span> Works: A Step-by-Step Guide
                                        </p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={10}>
                                        <p className="paracontent text-center text-lightblue">
                                            NFT staking allows creators and NFT holders (fans) to earn rewards by “locking up” their NFTs in a staking mechanism. It works similarly to staking tokens in DeFi, but instead of cryptocurrency, the staked asset your NFT Membership Pass. Here’s a breakdown of the process for both Creator and Fans:
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sectionfive sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                                <h2 className="section-title text-center">
                                    <span className="text-mediumpink">For Creators :</span> Offering Staking Rewards
                                </h2>
                            </Col>
                        </Row>
                        <div className="sectionfivebox gifimgbox mt-5">
                            <BoxContents data={creators} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectionsix sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                                <h2 className="section-title text-center">
                                    <span className="text-lightgreen">For Fans :</span> Earn Staking Rewards
                                </h2>
                            </Col>
                        </Row>
                        <div className="sectionsixbox gifimgbox mt-5">
                            <BoxContents data={fans} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectionseven sectionblackbg">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                            <h2 className="section-title text-center text-rose">
                                Benefits of NFT Staking
                            </h2>
                        </Col>
                    </Row>
                    <div className="sectionsevenbox mt-5">
                        <div className="borderbox">
                            <Row className="justify-content-between">
                                <Col xs={12} sm={12} md={12} lg={5}>
                                <p className="sectionsevenlisthead paracontent text-skyblue">For Creators</p>
                                        <ul className="listboxul my-4">
                                            {
                                                forcreators.map((libox, i) => (
                                                    <li className="listboxli starlist" key={i}>
                                                        <p className="borderboxdesc paracontent text-white">
                                                            {libox.content}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <button type="button" className="btn sitebtn skybluebtn rotateicon">
                                            Creatornomics
                                            <Image src={Images.downloadright} alt="Download" className="img-fluid" />
                                        </button>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={5}>
                                    <div className="pt-5">
                                        <p className="sectionsevenlisthead paracontent text-skyblue">For Fans</p>
                                        <ul className="listboxul mt-4">
                                            {
                                                forfans.map((libox, i) => (
                                                    <li className="listboxli starlist" key={i}>
                                                        <p className="borderboxdesc paracontent text-white">
                                                            {libox.content}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectioneight">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={9} xxl={8}>
                            <div className="blackbox blackboxlightbg mb-4">
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={12} md={12} lg={10}>
                                        <p className="paracontent text-center blackboxendcontent text-mediumpink mb-4">
                                            How NFT Borrowing and Lending Works on NOVA
                                        </p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={11}>
                                        <p className="paracontent text-center blackboxlightcontent mb-0">
                                            NOVA’s NFT lending and borrowing platform empowers users to unlock the value of their digital assets. Whether you’re looking to access liquidity without selling your NFTs or earn passive income by lending out your assets, NOVA makes the process seamless and secure.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="blackbox blackboxlightbg flowboxgridone">
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={12} md={10} lg={9}>
                                        <FlowBoxContents data={flowboxcontentstwo} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sectionnine sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                                <h2 className="section-title text-center">
                                    For Borrowers: Unlock Liquidity
                                </h2>
                            </Col>
                        </Row>
                        <div className="sectionninebox gifimgbox mt-5">
                            <BoxContents data={borrowers} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectionten sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                                <h2 className="section-title text-center">
                                    For Lenders: Earn Staking Rewards
                                </h2>
                            </Col>
                        </Row>
                        <div className="sectiontenbox gifimgbox mt-5">
                            <BoxContents data={lenders} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectioneleven bglines bg-lightgreen-lines">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                            <div className="blackbox">
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={12} md={12} lg={10}>
                                        <h2 className="section-title text-center text-lightgreen fw600">
                                            Why NOVA?
                                        </h2>
                                        <p className="paracontent mt-3 text-center text-white">
                                            NOVA’s NFT staking, borrowing, and lending platform offers
                                        </p>
                                    </Col>
                                </Row>
                                <div className="mt-5">
                                    <BoxContents data={fanownership} oddgrid={fanownership.length % 2 !== 0} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sectiontwelve sectionblackbg">
                <Container className="containertwo">
                    <div className="blackbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                                <h2 className="section-title text-center">
                                    NOVA Marketplace Features
                                </h2>
                            </Col>
                        </Row>
                        <div className="sectiontwelvebox mt-5 gridboxthree">
                            <BoxContents data={marketplacefeatures} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="sectionthirteen p-0">
                <FooterBlackbox page="marketplace" data={footblackbox} />
            </section>
        </main>
    )
}

export default page;