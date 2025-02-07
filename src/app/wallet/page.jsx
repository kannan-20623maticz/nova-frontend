"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import Images from '@/Images';
// import Lottie from 'lottie-react';
import BoxContents from '@/components/BoxContents';
import FooterBlackbox from '@/components/FooterBlackbox';

const page = () => {

  const [novawallet] = useState([
    {
      content: "No middlemen"
    },
    {
      content: "No delays"
    },
    {
      content: "No Fees"
    },
    {
      content: "Complete Transparency"
    },
  ]);

  const [novadiff] = useState([
    {
      dataimg: Images.novadiffimgone,
      datahead: "Self-Custody & Security",
      datadesc: "Take full control of your digital assets— whether it’s cryptocurrencies, NFTs, or membership passes. With advanced security features, your funds are protected from third-party interference or centralized control."
    },
    {
      dataimg: Images.novadiffimgtwo,
      datahead: "Seamless Transfers with Zero Fees",
      datadesc: "Take full control of your digital assets— whether it’s cryptocurrencies, NFTs, or membership passes. With advanced security features, your funds are protected from third-party interference or centralized control."
    },
    {
      dataimg: Images.novadiffimgthree,
      datahead: "Earn Interest with USDC or SOL",
      datadesc: "Take full control of your digital assets— whether it’s cryptocurrencies, NFTs, or membership passes. With advanced security features, your funds are protected from third-party interference or centralized control."
    },
    {
      dataimg: Images.novadiffimgfour,
      datahead: "Spend with the NOVA Debit Card Globally",
      datadesc: "Take full control of your digital assets— whether it’s cryptocurrencies, NFTs, or membership passes. With advanced security features, your funds are protected from third-party interference or centralized control."
    },
    {
      dataimg: Images.novadiffimgfive,
      datahead: "Global Top-up",
      datadesc: "Take full control of your digital assets— whether it’s cryptocurrencies, NFTs, or membership passes. With advanced security features, your funds are protected from third-party interference or centralized control."
    },
  ]);

  const [footblackbox] = useState([
    {
      datahead: "Take full ownership of your digital assets with NOVA’s self-custody wallet. Manage your USDC, Solana and NFTs Memberships securely—no intermediaries, no compromises.",
      datadesc: "Why Settle for Less?"
    }
  ]);

  return (
    <main className="walletpage">
      <section className="sectionone bannersection">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={6} className="mb40">
              <div className="bannerbox">
                <h1 className="banner-title text-white">
                  The <span className="text-mediumpink">NOVA Wallet</span> Say goodbye to third-party control and high fees
                </h1>
                <button type="button" className="btn sitebtn mediumpinkbtn mt-4">
                  Download
                  <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                </button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="bannerimgbox">
                {/* <Lottie animationData={Images.novawallet} loop={true} className="bannerimg" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectiontwo blackbg">
        <Container>
          <div className="borderbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title mb-3">
                  Traditional banks control your money setting limits, delaying payouts, and charging hidden fees.
                </h2>
                <p className="paracontent text-skyblue">
                  With NOVA’s wallet, you’re
                  in charge.
                </p>
                <div className="sectiontwolistbox mt-4">
                  <ul className="sectiontwolist_ul">
                    {
                      novawallet.map((novali) => (
                        <li className="sectiontwolist_li" key={novali.content}>
                          <Image src={novali.content.toLowerCase().includes("no") ? Images.close : Images.checked} alt={novali.content.toLowerCase().includes("no") ? "Close" : "Checked"} className="img-fluid sectiontwolist_liimg" />
                          <p className="paracontent sectiontwolist_desc text-white">{novali.content}</p>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="sectiontwovidbox text-center">
                  <video className="novawalletvid" autoPlay={true} loop={true} muted={true}>
                    <source src="/assets/images/wallet/walletnova.mp4" type="video/mp4" />
                    <track src="javascript:;" kind="captions"></track>
                  </video>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionthree sectionblackbg">
        <Container className="containertwo">
          <div className="blackbox">
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={6}>
                <h2 className="section-title text-center">
                  The NOVA Difference
                </h2>
              </Col>
            </Row>
            <div className="sectionthreebox mt-5 gridboxthree">
              <BoxContents data={novadiff} />
            </div>
          </div>
        </Container>
      </section>
      <section className="sectionfour p-0">        
        <FooterBlackbox page="wallet" data={footblackbox} />
      </section>
    </main>
  )
}

export default page;