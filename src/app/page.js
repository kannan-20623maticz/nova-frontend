"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import Images from '@/Images';
import Link from 'next/link';
import Lottie from 'lottie-react';
import BoxContents from '@/components/BoxContents';
import FlowBoxContents from '@/components/FlowBoxContents';

const page = () => {

  const [sectiontwoborderbox] = useState([
    {
      boximg: Images.roundimgone,
      boxhead: "Fragmented Ecosystem",
      boxdesc: "We know how annoying it can be to switch between platforms for wallets, NFT trading, community engagement, and tracking your investments. It’s messy and inefficient."
    },
    {
      boximg: Images.roundimgtwo,
      boxhead: "Lack of Social Features",
      boxdesc: "We know how annoying it can be to switch between platforms for wallets, NFT trading, community engagement, and tracking your investments. It’s messy and inefficient."
    },
    {
      boximg: Images.roundimgthree,
      boxhead: "Bots, Spam, and Ads",
      boxdesc: "We know how annoying it can be to switch between platforms for wallets, NFT trading, community engagement, and tracking your investments. It’s messy and inefficient.",
      // boxvideo: Images
    },
    {
      boximg: Images.roundimgfour,
      boxhead: "You Don’t Own Your Data",
      boxdesc: "We know how annoying it can be to switch between platforms for wallets, NFT trading, community engagement, and tracking your investments. It’s messy and inefficient.",
      // boxvideo: Images
    },
    {
      boximg: Images.roundimgfive,
      boxhead: "3rd Parties Control your Money",
      boxdesc: "We know how annoying it can be to switch between platforms for wallets, NFT trading, community engagement, and tracking your investments. It’s messy and inefficient."
    },
    {
      boximg: Images.roundimgsix,
      boxhead: "Lack of Monetization Opportunities",
      boxdesc: "We know how annoying it can be to switch between platforms for wallets, NFT trading, community engagement, and tracking your investments. It’s messy and inefficient."
    },
  ]);

  const [listsboxes] = useState([
    {
      listboxhead: "Social Network",
      listboximg: Images.listimgone,
      listboxsubhead: "(Creator & Community Hub)",
      listboxli: [
        {
          licontent: "Share content, connect with fans, and build loyal communities effortlessly",
        },
        {
          licontent: "Tailored tools for communication, collaboration, and growth.",
        },
        {
          licontent: "A modern space for creators and communities to engage authentically without algorithmic interference.",
        }
      ],
    },
    {
      listboxhead: "Social Finance",
      listboximg: Images.listimgtwo,
      listboxsubhead: "(Creator & Community Hub)",
      listboxli: [
        {
          licontent: "Share content, connect with fans, and build loyal communities effortlessly",
        },
        {
          licontent: "Tailored tools for communication, collaboration, and growth.",
        },
        {
          licontent: "A modern space for creators and communities to engage authentically without algorithmic interference.",
        }
      ],
    },
    {
      listboxhead: "Social Profiles",
      listboximg: Images.listimgthree,
      listboxsubhead: "(Creator & Community Hub)",
      listboxli: [
        {
          licontent: "Share content, connect with fans, and build loyal communities effortlessly",
        },
        {
          licontent: "Tailored tools for communication, collaboration, and growth.",
        },
        {
          licontent: "A modern space for creators and communities to engage authentically without algorithmic interference.",
        }
      ],
    },
    {
      listboxhead: "Social Events & Experiences",
      listboximg: Images.listimgtwo,
      listboxsubhead: "(Creator & Community Hub)",
      listboxli: [
        {
          licontent: "Share content, connect with fans, and build loyal communities effortlessly",
        },
        {
          licontent: "Tailored tools for communication, collaboration, and growth.",
        },
        {
          licontent: "A modern space for creators and communities to engage authentically without algorithmic interference.",
        }
      ],
    },
    {
      listboxhead: "Social Opportunities",
      listboximg: Images.listimgfive,
      listboxsubhead: "(Creator & Community Hub)",
      listboxli: [
        {
          licontent: "Share content, connect with fans, and build loyal communities effortlessly",
        },
        {
          licontent: "Tailored tools for communication, collaboration, and growth.",
        },
        {
          licontent: "A modern space for creators and communities to engage authentically without algorithmic interference.",
        }
      ],
    },
    {
      listboxhead: "Social Shopping",
      listboximg: Images.listimgsix,
      listboxsubhead: "(Creator & Community Hub)",
      listboxli: [
        {
          licontent: "Share content, connect with fans, and build loyal communities effortlessly",
        },
        {
          licontent: "Tailored tools for communication, collaboration, and growth.",
        },
        {
          licontent: "A modern space for creators and communities to engage authentically without algorithmic interference.",
        }
      ],
    },
    {
      listboxhead: "Social AI Agents",
      listboximg: Images.listimgseven,
      listboxsubhead: "(Creator & Community Hub)",
      listboxli: [
        {
          licontent: "Share content, connect with fans, and build loyal communities effortlessly",
        },
        {
          licontent: "Tailored tools for communication, collaboration, and growth.",
        },
        {
          licontent: "A modern space for creators and communities to engage authentically without algorithmic interference.",
        }
      ],
    },
  ]);

  const [earnownli] = useState([
    {
      content: "Earn with USDC and SOL."
    },
    {
      content: "Spend with debit card."
    },
    {
      content: "Tip your favorite creators or influencers."
    },
  ]);

  const [tokenMember] = useState([
    {
      tokencontent: "Create your Passion in Nova",
    },
    {
      tokencontent: "Connect with your peers & build your community",
    },
    {
      tokencontent: "Sell or auction your own NFT Membership Passes in Marketplace",
    },
    {
      tokencontent: "Offer Exclusive content, Group Chat, Video Rooms, Audio Spaces",
    },
  ]);

  const [membership] = useState([
    {
      memberimg: Images.membershipimgone,
      memberhead: "True Ownership",
      memberdesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      memberimg: Images.membershipimgtwo,
      memberhead: "Tradable Assets",
      memberdesc: "Membership passes can be bought and sold on the secondary market, allowing fans to benefit financially from their investments."
    },
    {
      memberimg: Images.membershipimgthree,
      memberhead: "Rarity and Scarcity",
      memberdesc: "Limited-edition mints ensure exclusivity, enhancing both desirability and long-term value.",
    },
    {
      memberimg: Images.membershipimgfour,
      memberhead: "Unique Design",
      memberdesc: "Each pass reflects the essence of the creator or community, making it a one-of-a-kind digital mentioned to a brand’s identity.",
    },
  ]);

  const [fanownership] = useState([
    {
      dataimg: Images.fanimgone,
      datahead: "Invest in Success",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.fanimgtwo,
      datahead: "Own a Piece of the Journey",
      datadesc: "Each pass represents a unique moment in the creator’s story, giving you a tangible, lasting connection to their achievements."
    },
    {
      dataimg: Images.fanimgthree,
      datahead: "Exclusive Perks and Benefits",
      datadesc: "Limited-edition mints ensure exclusivity, enhancing both desirability and long-term value.",
    },
  ]);

  const [flowboxcontents] = useState([
    {
      dataimg: Images.flowimgone,
      datahead: "Staking",
      datadesc: "Earn Rewards for Holding Your Membership Turn your NFT Membership Pass into an earning tool by staking it.",
      datasublists: [
        {
          datasubhead: "How It Works",
          datasubdesc: "Stake your membership pass in NOVA’s platform to earn rewards in USDC or other tokens."
        },
        {
          datasubhead: "Why It Matters",
          datasubdesc: "Staking encourages long-term holding, making your membership even more valuable while rewarding your loyalty."
        },
        {
          datasubhead: "Benefits",
          datasubdesc: "You can earn passive income by simply holding your membership pass, deepening your connection to your favorite creators and communities."
        },
      ]
    },
    {
      dataimg: Images.flowimgtwo,
      datahead: "Borrowing",
      datadesc: "Earn Rewards for Holding Your Membership Turn your NFT Membership Pass into an earning tool by staking it.",
      datasublists: [
        {
          datasubhead: "How It Works",
          datasubdesc: "Stake your membership pass in NOVA’s platform to earn rewards in USDC or other tokens."
        },
        {
          datasubhead: "Why It Matters",
          datasubdesc: "Staking encourages long-term holding, making your membership even more valuable while rewarding your loyalty."
        },
        {
          datasubhead: "Benefits",
          datasubdesc: "You can earn passive income by simply holding your membership pass, deepening your connection to your favorite creators and communities."
        },
      ]
    },
    {
      dataimg: Images.flowimgthree,
      datahead: "Lending",
      datadesc: "Earn Rewards for Holding Your Membership Turn your NFT Membership Pass into an earning tool by staking it.",
      datasublists: [
        {
          datasubhead: "How It Works",
          datasubdesc: "Stake your membership pass in NOVA’s platform to earn rewards in USDC or other tokens."
        },
        {
          datasubhead: "Why It Matters",
          datasubdesc: "Staking encourages long-term holding, making your membership even more valuable while rewarding your loyalty."
        },
        {
          datasubhead: "Benefits",
          datasubdesc: "You can earn passive income by simply holding your membership pass, deepening your connection to your favorite creators and communities."
        },
      ]
    },
  ]);

  const [explorebox] = useState([
    {
      dataimg: Images.exploreimgone,
      datahead: "Self-Custody Wallet",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets.Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgtwo,
      datahead: "Easy On/Off Ramp for Payments",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgthree,
      datahead: "AI Assistant",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgfour,
      datahead: "Event Hosting & Ticketing",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgfive,
      datahead: "Token-Gated Messaging",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgsix,
      datahead: "Live Streaming & Audio Spaces",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgseven,
      datahead: "Web3 Browser and Dapp Store",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgeight,
      datahead: "Social Profile",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.exploreimgnine,
      datahead: "Community Social",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
  ]);

  const [ecosystem] = useState([
    {
      dataimg: Images.ecosystemone,
      datahead: "Creator Workspace",
      datadesc: "Streamline your creative process with a dedicated workspace to plan, collaborate, and manage your projects. From content scheduling to performance insights, this will be your go-to hub for productivity and growth."
    },
    {
      dataimg: Images.ecosystemtwo,
      datahead: "Social Shopping",
      datadesc: "Turn connections into commerce. Social Shopping will allow you to explore, buy, and sell directly within the NOVA ecosystem, creating a seamless shopping experience tied to your community."
    },
    {
      dataimg: Images.ecosystemthree,
      datahead: "Social Experiences and Events",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.ecosystemfour,
      datahead: "Brand Partnerships",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.ecosystemfive,
      datahead: "Job Profiles and Search",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.ecosystemsix,
      datahead: "Loyalty Perks and Points",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.ecosystemseven,
      datahead: "Real World Assets",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
    {
      dataimg: Images.ecosystemeight,
      datahead: "Multichain Wallet",
      datadesc: "Fans hold their passes in their wallets, allowing them to sell, trade, or keep them as valuable assets."
    },
  ]);

  const [faq] = useState([
    {
      datahead: "How easy is it to get started with NOVA?",
      datadesc: "Getting started with NOVA is simple and intuitive, even if you’re new to web3. Our user-friendly interface guides you through every step, from setting up your decentralized wallet to exploring token-gated communities and trading NFTs. Plus, we offer quick-start guides and 24/7 support to ensure you feel confident every step of the way."
    },
    {
      datahead: "Do I need to be a web3 expert to benefit from NOVA?",
      datadesc: "Getting started with NOVA is simple and intuitive, even if you’re new to web3. Our user-friendly interface guides you through every step, from setting up your decentralized wallet to exploring token-gated communities and trading NFTs. Plus, we offer quick-start guides and 24/7 support to ensure you feel confident every step of the way."
    },
    {
      datahead: "Can I trust NOVA with my digital assets & personal information?",
      datadesc: "Getting started with NOVA is simple and intuitive, even if you’re new to web3. Our user-friendly interface guides you through every step, from setting up your decentralized wallet to exploring token-gated communities and trading NFTs. Plus, we offer quick-start guides and 24/7 support to ensure you feel confident every step of the way."
    },
    {
      datahead: "Why should I choose NOVA over other web3 tools?",
      datadesc: "Getting started with NOVA is simple and intuitive, even if you’re new to web3. Our user-friendly interface guides you through every step, from setting up your decentralized wallet to exploring token-gated communities and trading NFTs. Plus, we offer quick-start guides and 24/7 support to ensure you feel confident every step of the way."
    },
    {
      datahead: "Is NOVA really free to use?",
      datadesc: "Getting started with NOVA is simple and intuitive, even if you’re new to web3. Our user-friendly interface guides you through every step, from setting up your decentralized wallet to exploring token-gated communities and trading NFTs. Plus, we offer quick-start guides and 24/7 support to ensure you feel confident every step of the way."
    },
    {
      datahead: "How does NOVA help creators grow their communities?",
      datadesc: "Getting started with NOVA is simple and intuitive, even if you’re new to web3. Our user-friendly interface guides you through every step, from setting up your decentralized wallet to exploring token-gated communities and trading NFTs. Plus, we offer quick-start guides and 24/7 support to ensure you feel confident every step of the way."
    },
    {
      datahead: "How is NOVA different from platforms like Discord or Patreon?",
      datadesc: "Getting started with NOVA is simple and intuitive, even if you’re new to web3. Our user-friendly interface guides you through every step, from setting up your decentralized wallet to exploring token-gated communities and trading NFTs. Plus, we offer quick-start guides and 24/7 support to ensure you feel confident every step of the way."
    },
  ]);

  return (
    <main className="homepage">
      <section className="sectionone bannersection">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={6} className="mb40">
              <div className="bannerbox">
                <h1 className="banner-title">
                  The World's First Web3 AI-Powered Social Super App
                </h1>
                <p className="paracontent">
                  Create, Connect, and Earn together in an All-In-One Social Digital Ecosystem for the Creator Economy.
                </p>
                <button type="button" className="btn sitebtn">
                  Download
                  <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                </button>
                <div className="bannersmimgs">
                  <p className="bannerimgtext paracontent">Available On :</p>
                  <div className="d-flex align-items-center mb-3">
                    <button type="button" className="btn me-3">
                      <Image src={Images.appstore} alt="App store" className="img-fluid" />
                    </button>
                    <button type="button" className="btn">
                      <Image src={Images.playstore} alt="Play store" className="img-fluid" />
                    </button>
                  </div>
                  <p className="bannerimgtext paracontent">Network :</p>
                  <div className="d-flex align-items-center">
                    <button type="button" className="btn">
                      <Image src={Images.solana} alt="Solana" className="img-fluid" />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="bannerimgbox">
                <Image src={Images.bannerimg} alt="The World's First Web3 AI-Powered Social Super App" className="img-fluid bannerimg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectiontwo sectionblackbg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8}>
              <h2 className="section-title text-center">Your Web3 Experience Deserves Better</h2>
            </Col>
          </Row>
          <div className="sectiontwotopbox">
            <div className="blackbox boxgrid">
              {
                sectiontwoborderbox.map((data) => (
                  <div className={`borderbox ${["bots", "data"].some(text => data.boxhead.toLowerCase().includes(text)) ? "videobox" : ""}`} key={data.boxhead}>
                    <div className={`${["bots", "data"].some(text => data.boxhead.toLowerCase().includes(text)) ? "videoboxdiv" : ""}`}>
                      <Image src={data.boximg} alt={data.boxhead} className="img-fluid borderboximg" />
                      <p className="borderboxhead paracontent">{data.boxhead}</p>
                      <p className="borderboxdesc paracontent">
                        {data.boxdesc}
                      </p>
                    </div>
                    {
                      ["bots", "data"].some(text => data.boxhead.toLowerCase().includes(text)) && <video autoPlay={true} loop={true} muted={true} controls={false}>
                        <source src={`/assets/images/${data.boxhead.toLowerCase().includes("bots") ? "botspamvid" : "twomobiles"}.mp4`} type="video/mp4" />
                        <track src="javascript:;" kind="captions"></track>
                      </video>
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </Container>
      </section>
      <section className="sectionthree bglines">
        <Container>
          <div className="sectionthreebox sectionblackbg">
            <div className="sectionthreeinnerbox">
              <Row className="align-items-center">
                <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                  <h2 className="section-title mb-3">Simplifying your Digital Daily Needs</h2>
                  <p className="paracontent mb-3 text-white">
                    The Mobile app space is fragmented, by social networks, shopping, disconnected wallets, dApps, and chats limiting its potential and making it difficult to navigate your daily needs
                  </p>
                  <p className="paracontent mb-3 text-white">
                    Nova unites the fragmented mobile app space by connecting social networks, shopping, wallets, dApps, and chats into one seamless experience.
                  </p>
                  <p className="paracontent text-pink mb-3">
                    Start Using NOVA for Free and Keep 100% of What You Earn
                  </p>
                  <button type="button" className="btn sitebtn">
                    Download
                    <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                  </button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <div className="sectionthreevidbox">
                    <Image src={Images.moniter} alt="Simplifying your Digital Daily Needs" className="img-fluid moniterimg" />
                    <video className="sectionthreevid" autoPlay={true} loop={true} muted={true} controls={false}>
                      <source src="/assets/images/digitalneeds.mp4" type="video/mp4" />
                      <track src="javascript:;" kind="captions"></track>
                    </video>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section className="sectionfour sectionblackbg">
        <Container className="containertwo">
          <div className="blackbox">
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={6}>
                <h2 className="section-title text-center">
                  The Ultimate Digital Social Ecosystem for Web3 & the Mobile Era
                </h2>
              </Col>
            </Row>
            <div className="listsbox mt-5">
              <Row className="justify-content-center">
                {
                  listsboxes.map((libox) => (
                    <Col xs={12} sm={12} md={6} lg={6} xl={4} key={libox.listboxhead}>
                      <div className="borderbox">
                        <div className="d-flex align-items-center gap20">
                          <Image src={libox.listboximg} alt={libox.listboxhead} className="img-fluid borderboximg" />
                          <p className="paracontent text-lightgreen fw500 borderboxhead">{libox.listboxhead}</p>
                        </div>
                        <p className="paracontent text-white my-3 fw500">{libox.listboxsubhead}</p>
                        <ul className="listboxul">
                          {
                            libox.listboxli.map((liboxinn, i) => (
                              <li className="listboxli starlist" key={i}>
                                <p className="borderboxdesc paracontent">
                                  {liboxinn.licontent}
                                </p>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section className="sectionfive bglines bgimg">
        <div className="sectionfivebg">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={11}>
                <div className="sectionfivebluebox">
                  <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={8}>
                      <h2 className="section-title text-center">
                        NOVA is a Super App for Creators, Fans, Shoppers, Supporters, Investors, and Mobile lovers.
                      </h2>
                      <p className="paracontent text-white text-center mt-2">
                        We are the EVERYTHING App for All your daily needs.
                      </p>
                    </Col>
                  </Row>
                  <div className="text-center sectionfivecenterimg">
                    <Lottie animationData={Images.threemobiles} loop={true} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="sectionsix bglines bgimg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8}>
              <h2 className="section-title text-center text-lightyellow fw700">
                The NOVA Ecosystem
              </h2>
            </Col>
          </Row>
          <div className="sectionsix_centerbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={2} xl={3} className="mb40">
                <p className="paracontent sectionsix_centerboxhead text-darkblue fntoswald">Mint & Sell</p>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6} className="mb40">
                <div className="sectionsix_centerboximgbox">
                  <Lottie animationData={Images.ecosystemarrows} loop={true} />
                  <Image src={Images.ecosystemcircle} alt="NOVA Ecosystem" className="img-fluid sectionsix_centerboximg" />
                  <p className="paracontent sectionsix_centercontent one">MEMBERSHIP MARKETPLACE</p>
                  <p className="paracontent sectionsix_centercontent two">WALLET</p>
                  <p className="paracontent sectionsix_centercontent three">SOCIAL COMMUNITY & CREATOR HUB</p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={2} xl={3}>
                <p className="paracontent sectionsix_centerboxhead text-purple fntoswald">Create & Connect</p>
              </Col>
            </Row>
          </div>
          <p className="paracontent sectionsix_centerboxhead text-teal fntoswald">Earn & Own</p>
        </Container>
      </section>
      <section className="sectionseven bgimg">
        <Container>
          <div className="sectionsevenbox blackbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title mb-2">Mint & Sell</h2>
                <p className="paracontent text-lightgreen text-uppercase fw500 mb-3">
                  MEMBERSHIP MARKETPLACE
                </p>
                <p className="paracontent mb-4 text-white">
                  Connect directly with fans and
                  communities through NOVA’s NFT
                  Marketplace. This is where creators and
                  users can trade, buy, and sell exclusive
                  NFT membership passes, enabling
                  ownership, access, and unique
                  opportunities in the web3 world.
                </p>
                <Link href="/" className="btn sitebtn rotateicon greenbtn">
                  Learnmore
                  <Image src={Images.downloadright} alt="Download" className="img-fluid" width={30} height={30} />
                </Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <video className="mintsellvid" autoPlay={true} loop={true} muted={true}>
                    <source src="/assets/images/mint-sell.mp4" type="video/mp4" />
                    <track src="javascript:;" kind="captions"></track>
                  </video>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectioneight sectionblackbg">
        <Container>
          <div className="sectioneightbox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.createconnect} alt="Create & Connect" className="img-fluid createconnectimg" width={500} />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title mb-2">Create & Connect</h2>
                <p className="paracontent text-mediumblue text-uppercase fw500 mb-3">
                  Social Community & Creator Hub
                </p>
                <p className="paracontent mb-4 text-white">
                  NOVA’s social community & creator
                  hub is designed to bring people
                  together in meaningful, interactive
                  ways. It’s built for creators, fans, and
                  communities to engage deeply through
                  token-gated features, real-time
                  interaction, and access exclusive
                  content from creators.
                </p>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  <Link href="/" className="btn sitebtn blueoutlinebtn">
                    Community
                    <Image src={Images.blueright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                  <Link href="/" className="btn sitebtn blueoutlinebtn">
                    Creators
                    <Image src={Images.blueright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                  <Link href="/" className="btn sitebtn blueoutlinebtn">
                    Fans
                    <Image src={Images.blueright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                  <Link href="/" className="btn sitebtn blueoutlinebtn">
                    DAO’s
                    <Image src={Images.blueright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionnine bgimg">
        <Container>
          <div className="sectionninebox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title mb-2">Earn & Own</h2>
                <p className="paracontent text-lightgreen text-uppercase fw500 mb-3">
                  NOVA Wallet
                </p>
                <p className="paracontent text-white">
                  NOVA’s wallet and financial tools
                  empower you to manage your digital
                  assets, generate revenue, and seamlessly
                  transact peer to peer globally—all with
                  complete control and zero fees.
                </p>
                <ul className="mt-3 mb-4 sectionnine_earnownul">
                  {
                    earnownli.map((eo, i) => (
                      <li className="starlist" key={i}>
                        <p className="paracontent text-lightgreen">{eo.content}</p>
                      </li>
                    ))
                  }
                </ul>
                <Link href="/" className="btn sitebtn greenbtn">
                  Learnmore
                  <Image src={Images.blackright} alt="Download" className="img-fluid" />
                </Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Lottie animationData={Images.earnown} loop={true} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionten bglines">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={7}>
              <h2 className="section-title text-center fw600">
                Monetize your community with Collectable Token-gated NFT Membership Passes.
              </h2>
            </Col>
          </Row>
          <div className="sectiontenbox blackbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={7}>
                <ul className="sectiontenboxul">
                  {
                    tokenMember.map((tm, i) => (
                      <li className="sectiontenboxli" key={i}>
                        <span className="sectiontenboxnum">{i + 1}</span>
                        <p className="sectiontenboxdesc paracontent">{tm.tokencontent}</p>
                      </li>
                    ))
                  }
                </ul>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Lottie animationData={Images.mobilewithman} loop={true} className="personimg" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectioneleven bgimg">
        <Container>
          <div className="sectionelevenbox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.neweraimg} alt="A New Era of Memberships" className="img-fluid neweraimg" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title section-titlebig text-lightgreen mb-2">A New Era of Memberships</h2>
                <p className="section-titletwo mb-3">
                  With NOVA’s NFT Membership Passes, fans become more than just participants—they become owners.
                </p>
                <p className="paracontent mb-3 text-white">
                  With web2's streaming services and exclusive
                  memberships, you’re renting access
                  temporarily, and when you’re done, you’re left
                  with nothing. Web3 changes the game,
                  allowing fans to be not just users but owners.
                </p>
                <p className="paracontent text-white">
                  Each NFT Membership Pass is more than an
                  access key; it’s a unique, verifiable digital
                  asset that combines the benefits of
                  ownership and collectibility.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectiontwelve bgimg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={7}>
              <h2 className="section-title text-center text-lightgreen fw600">
                What Sets NOVA Memberships Apart
              </h2>
            </Col>
          </Row>
          <div className="sectiontwelvebox">
            <div className="sectiontwelve_grid">
              {
                membership.map((mem) => (
                  <div className="sectiontwelve_gridbox" key={mem.memberhead}>
                    <div>
                      <Image src={mem.memberimg} alt={mem.memberhead} className="img-fluid sectiontwelve_gridimg" />
                    </div>
                    <div>
                      <p className="paracontent sectiontwelve_gridhead">{mem.memberhead}</p>
                      <p className="paracontent sectiontwelve_griddesc">
                        {mem.memberdesc}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </Container>
      </section>
      <section className="sectionthirteen bglines bg-lightgreen-lines">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={9}>
              <div className="blackbox">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={10}>
                    <h2 className="section-title text-center text-lightgreen fw600">
                      Fan Ownership
                    </h2>
                    <p className="paracontent mt-3 text-center text-white">
                      NOVA gives fans the unique opportunity to invest in the success of their favorite creators. By owning a Collectable Token-Gated NFT Membership Pass, fans become more than just supporters—they become stakeholders in the creator’s journey.
                    </p>
                  </Col>
                </Row>
                <div className="mt-4">
                  <BoxContents data={fanownership} oddgrid={fanownership.length % 2 !== 0} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionfourteen bgimg">
        <Container>
          <div className="sectionfourteenbox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.features} alt="DeFi Features" className="img-fluid featuresimg" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title section-titlebig text-mediumpurple fw600 mb-2">DeFi Features</h2>
                <p className="section-titletwo mb-3">
                  Unlocking the Full Value of <span className="d-block text-lightgreen">NOVA Memberships</span>
                </p>
                <p className="paracontent text-white">
                  NOVA takes memberships to the
                  next level by combining exclusive
                  access with the power of
                  decentralized finance (DeFi). With
                  our innovative DeFi features, your
                  NFT Membership Passes aren’t just
                  keys to exclusive content—they’re
                  valuable assets that can generate
                  financial rewards.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionfiveteen sectionblackbg">
        <Container className="containertwo">
          <div className="blackbox">
            <FlowBoxContents data={flowboxcontents} />
          </div>
        </Container>
      </section>
      <section className="sectionsixteen bgimg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="blackbox blackboxlightbg">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={8}>
                    <p className="paracontent text-center blackboxlightcontent">
                      From powerful AI tools to ad-free
                      social features, NOVA solves your
                      daily digital needs while prioritizing

                      simplicity and privacy
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={9}>
                    <p className="paracontent text-center blackboxendcontent">
                      <span className="text-lightgreen">
                        Unlock the full potential of the Internet with <span className="text-purple">NOVA</span>
                      </span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionseventeen bglines">
        <Container>
          <div className="sectionseventeenbox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.trueownership} alt="True Ownership of Your Assets" className="img-fluid ownershipimg" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title text-black fw600 mb-3">True Ownership of Your Assets</h2>
                <p className="paracontent text-black">
                  With NOVA, you take full control of your
                  financial and digital assets. You hold the
                  keys whether it’s your cryptocurrency
                  assets or membership passes. Seamlessly
                  manage, spend, and trade your assets
                  without restrictions or middlemen, all
                  backed by advanced security. This is what
                  true ownership looks like.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectioneightteen bglines">
        <Container>
          <div className="sectioneightteenbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <div className="pe-lg-5">
                  <h2 className="section-title text-black fw600 mb-3">Social Features Built for Web3</h2>
                  <p className="paracontent text-black">
                    Web3 isn’t just about transactions; it’s
                    about connections. NOVA provides
                    powerful social tools like token-gated live
                    audio spaces, video rooms & group chats,
                    making it easier than ever to engage with
                    your communities and collaborate with
                    like-minded individuals.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.socialfeatures} alt="Social Features Built for Web3" className="img-fluid" width={800} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionnineteen bglines">
        <Container>
          <div className="sectionnineteenbox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.aiassist} alt="AI Assistant" className="img-fluid" width={800} />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <div className="ps-lg-5">
                  <h2 className="section-title text-black fw600 mb-3">AI Assistant</h2>
                  <p className="paracontent text-black">
                    NOVA’s AI is a powerful two-in-one tool,
                    combining the capabilities of an advanced
                    LLM with the functionality of AI Agents.
                    Whether you need help generating content,
                    managing DeFi operations, or completing a
                    variety of everyday tasks, NOVA’s AI is here
                    to simplify your web3 experience and
                    handle the work for you.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectiontwenty bglines">
        <Container>
          <div className="sectiontwentybox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <div className="pe-lg-5">
                  <h2 className="section-title text-black fw600 mb-3">
                    Seamless Experience without Bots, Spam, or Ads
                  </h2>
                  <p className="paracontent text-black">
                    Tired of bots, spam, and cluttered
                    community spaces? NOVA ensures your
                    experience is free from distractions, with
                    token-gated access that keeps interactions
                    meaningful and high-quality. Enjoy a
                    platform designed for genuine connections no bots, no spam, and no ads.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.botsspam} alt="Seamless Experience without Bots, Spam, or Ads" className="img-fluid" width={800} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectiontwentyone bglines">
        <Container>
          <div className="sectiontwentyonebox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.dataprivacy} alt="Data Privacy & Digital Identity" className="img-fluid" width={800} />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <div className="ps-lg-5">
                  <h2 className="section-title text-black fw600 mb-3">Data Privacy & Digital Identity</h2>
                  <p className="paracontent text-black">
                    With NOVA, you own your data, digital
                    identity, and assets—unlike web2 platforms
                    that track your activity and build profiles
                    for targeted ads. NOVA doesn’t access or
                    share your information, giving you
                    complete control and privacy in the web3
                    world.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectiontwentytwo bglines">
        <Container>
          <div className="sectiontwentytwobox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <div className="pe-lg-5">
                  <h2 className="section-title text-black fw600 mb-3">
                    DApp Store and Web3 Browser
                  </h2>
                  <p className="paracontent text-black">
                    Explore a wide array of decentralized
                    applications with NOVA’s DApp Store,
                    seamlessly integrated with our web3 browser.
                    From DeFi apps like Polytrade and Polymarket to
                    gaming platforms and more, NOVA brings the
                    best of web3 directly to your fingertips. Interact,
                    trade, and grow—all within a single, accessible
                    platform designed to connect you with the full
                    potential of decentralized technology.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.botsspam} alt="DApp Store and Web3 Browser" className="img-fluid" width={800} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectiontwentythree bgimg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="blackbox blackboxlightbg">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={8}>
                    <p className="paracontent text-center blackboxlightcontent mb-0">
                      At NOVA, sharing, connecting,
                      and earning all happen
                      seamlessly within one platform,
                      empowering users to unlock the
                      full potential of web3
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectiontwentyfour sectionblackbg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8}>
              <h2 className="section-title text-center">
                Explore the powerful features that make NOVA your ultimate web3 solution
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="sectiontwentyfourbox">
                {
                  explorebox.map((eb, i) => (
                    <div className={`stwentyfour_gradientbox ${"stwentyfour_gradientbox" + (i + 1)}`} key={eb.datahead}>
                      <div className="stwentyfour_gradientboxfront">
                        <Image src={eb.dataimg} alt={eb.datahead} className="img-fluid stwentyfour_gradientboximg" />
                        <p className="paracontent stwentyfour_gradientboxhead">{eb.datahead}</p>
                      </div>
                      <p className="paracontent stwentyfour_gradientboxdesc">
                        {eb.datadesc}
                      </p>
                    </div>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectiontwentyfive bgimg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="blackbox blackboxlightbg">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={8}>
                    <p className="paracontent text-center blackboxlightcontent">
                      We're just getting started. NOVA is
                      more than a platform—it’s a growing
                      ecosystem designed to evolve
                      alongside the needs of its
                      community.
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={10}>
                    <p className="paracontent text-center blackboxendcontent text-mediumpink">
                      Here’s a glimpse of what’s coming next to expand your
                      experience and empower your journey.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectiontwentysix sectionblackbg">
        <Container className="containertwo">
          <div className="blackbox">
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={6}>
                <h2 className="section-title text-center">
                  <span className="text-lightpurple">Ecosystem Expansion : The Future of</span> <span className="text-lightgreen">NOVA</span>
                </h2>
              </Col>
            </Row>
            <div className="sectiontwentysixbox mt-5 gridboxthree">
              <BoxContents data={ecosystem} />
            </div>
          </div>
        </Container>
      </section>
      <section className="sectiontwentyseven bglines">
        <Container>
          <div className="sectiontwentysevenbox sectionblackbg">
            <div className="sectiontwentyseveninnerbox">
              <Row className="align-items-center">
                <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                  <h2 className="section-title mb-3">One Platform. Endless Possibilities</h2>
                  <p className="paracontent text-white mb-3">
                    NOVA was created by a team of web3 investors, creators, and influencers who understand the challenges and opportunities of the decentralized world. It’s not just a platform—it’s a movement to make web3 accessible, empowering, and transformative for all users
                  </p>
                  <p className="paracontent text-lightviolet fw500 mb-3">
                    Join NOVA Today and Shape the Future of Web3
                  </p>
                  <button type="button" className="btn sitebtn lightskyvioletbtn">
                    Download
                    <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                  </button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <div className="text-center">
                    <video className="sectiontwentysevenvid" autoPlay={true} loop={true} muted={true}>
                      <source src="/assets/images/twomobiles.mp4" type="video/mp4" />
                      <track src="javascript:;" kind="captions"></track>
                    </video>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section className="sectiontwentyeight sectionblackbg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={6}>
              <h2 className="section-title text-center">Frequently Asked Questions</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10}>
              <div className="blackbox mt-5">
                <div className="sectiontwentyeightbox">
                  <Accordion defaultActiveKey="0">
                    {
                      faq.map((fa, i) => (
                        <Accordion.Item eventKey={i} key={fa.datahead}>
                          <Accordion.Header>
                            <span>0{i + 1}</span>
                            {fa.datahead}
                          </Accordion.Header>
                          <Accordion.Body>
                            <p className="paracontent">
                              {fa.datadesc}
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))
                    }
                  </Accordion>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={10}>
              <div className="borderbox text-center mt-5">
                <p className="paracontent borderboxdesc text-white mb-3">Start Using NOVA for Free and Keep 100% of What You Earn</p>
                <button type="button" className="btn sitebtn m-auto">
                  Download
                  <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default page;
