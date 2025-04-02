"use client";

import React, { useCallback, useEffect, useState } from "react";

import Image from 'next/image';
import { Accordion, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic';
import Link from 'next/link';
// import Lottie from 'lottie-react';
import BoxContents from '@/components/BoxContents';
import FlowBoxContents from '@/components/FlowBoxContents';
import { Newsletter, getCms } from "../action/cmsAction";

const Lottieimg = dynamic(() => import('lottie-react'), { ssr: false });

import Images from '@/Images';
import Loader from "@/components/Loader";
import ResizeHook from "@/hooks/ResizeHook";

const page = () => {
  const [cmsData, setCmsData] = useState("");
  console.log("cms", cmsData);
  const [email, setEmail] = useState("")
  console.log("dscdscd", email);
  const [error, setError] = useState("")


  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [sectiontwoborderbox] = useState([
    {
      boximg: Images.roundimgone,
      boxhead: "Default Header",
      boxdesc: ""
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

  const [listsboxesone] = useState([
    {
      listboximg: Images.listimgone,
    },
    {
      listboximg: Images.listimgtwo,
    },
    {
      listboximg: Images.listimgseven,
    },
  ]);

  const [listsboxesonesec] = useState([
    {
      listboximg: Images.listimgone,
    },
    {
      listboximg: Images.listimgthree,
    },
    {
      listboximg: Images.listimgfive,
    },
    {
      listboximg: Images.listimgseven,
    },
  ]);

  const [listsboxestwo] = useState([
    {
      listboximg: Images.listimgtwo,
    },
    {
      listboximg: Images.listimgfive,
    },
  ]);

  const [listsboxestwosec] = useState([
    {
      listboximg: Images.listimgtwo,
    },
    {
      listboximg: Images.listimgtwo,
    },
    {
      listboximg: Images.listimgsix
    },
  ]);

  const [listsboxesthree] = useState([
    {
      listboximg: Images.listimgthree,
    },
    {
      listboximg: Images.listimgsix,
    },
  ]);


  // const [earnownli] = useState([
  //   {
  //     content: "Earn with USDC and SOL."
  //   },
  //   {
  //     content: "Spend with debit card."
  //   },
  //   {
  //     content: "Tip your favorite creators or influencers."
  //   },
  // ]);

  // const [tokenMember] = useState([
  //   {
  //     tokencontent: "Create your Passion in Nova",
  //   },
  //   {
  //     tokencontent: "Connect with your peers & build your community",
  //   },
  //   {
  //     tokencontent: "Sell or auction your own NFT Membership Passes in Marketplace",
  //   },
  //   {
  //     tokencontent: "Offer Exclusive content, Group Chat, Video Rooms, Audio Spaces",
  //   },
  // ]);

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

  const [exploreimgs] = useState([
    {
      id: 0,
      value: "one"
    },
    {
      id: 1,
      value: "two"
    },
    {
      id: 2,
      value: "three"
    },
    {
      id: 3,
      value: "four"
    },
    {
      id: 4,
      value: "five"
    },
    {
      id: 5,
      value: "six"
    },
    {
      id: 6,
      value: "seven"
    },
    {
      id: 7,
      value: "eight"
    },
    {
      id: 8,
      value: "nine"
    },
  ]);



  // console.log("cmsData_cmsData_frontend",cmsData?.content[0]);

  const getCmsData = async () => {
    try {
      const getData = await getCms({ page: "HomePage" });
      console.log("frontend_getData_cms", getData);
      if (getData.status) {
        setCmsData(getData.data.data);
        setStatus(getData.status);
        getData.status && dataShows();
        // setIsLoading(false);
      }
    } catch (e) {
      console.log("getCmsData_err", e);
    }
  }

  const submit = async () => {

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;
    if (email == "" || email == undefined || email == null) {
      setError("REQUIRED")
    } else if (!(emailRegex.test(email))) {
      setError("Invalid email")
    } else {
      setError("")
    }
    const getData = await Newsletter({ email: email.toLocaleLowerCase() });



  }


  useEffect(() => {
    getCmsData()
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const dataShows = useCallback(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [status]);


  if (typeof window !== undefined) {
    var width = ResizeHook();
  }

  if (status) {
    var firstBoxes;
    var secondBoxes;
    var thirdBoxes;

    var ecoSystemOne;
    var ecoSystemTwo;
    var ecoSystemThree;

    if (width > 1200) {
      (firstBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 3 === 0));
      (secondBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 3 === 1));
      (thirdBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 3 === 2));
      
      (ecoSystemOne = cmsData?.content[13]?.card.filter((_, index) => index % 3 === 0));
      (ecoSystemTwo = cmsData?.content[13]?.card.filter((_, index) => index % 3 === 1));
      (ecoSystemThree = cmsData?.content[13]?.card.filter((_, index) => index % 3 === 2));
    }

    if (width < 1199) {
      (firstBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 2 === 0));
      (secondBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 2 !== 0));
    }

    if (width < 767) {
      width < 767 && (firstBoxes = cmsData?.content[3]?.card);
    }

    // width > 1200 && (firstBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 3 === 0));
    // width < 1199 && (firstBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 2 === 0));
    // width > 1200 && (secondBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 3 === 1));
    // width < 1199 && (secondBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 2 !== 0));
    // width > 1200 && (thirdBoxes = cmsData?.content[3]?.card.filter((_, index) => index % 3 === 2));

  }





  if (isLoading) {
    return <Loader />;
  }




  return (
    <main className="homepage">
      <section className="sectionone bannersection">
        <Image src={Images.bannerbg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={6} className="mb40">
              <div className="bannerbox">
                <h1 className="banner-title">
                  {/* <p>{cmsData?.content?.[0]?.heading || "Loading"}</p>         */}
                  {cmsData && cmsData?.content[0]?.heading}

                </h1>
                <p className="paracontent">
                  {cmsData && cmsData?.content[0]?.description}                </p>
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
                <Image src={Images.bannerimg} alt="The World's First Web3 AI-Powered Social Super App" className="img-fluid bannerimg" loading="eager" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectiontwo sectionblackbg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8}>
              <h2 className="section-title text-center">{cmsData && cmsData?.content[1]?.heading}</h2>
            </Col>
          </Row>
          {console.log('testtttttt', cmsData?.content)}
          <div className="sectiontwotopbox">
            <Image src={Images.secondbg} alt="cover" className="img-fluid sectionbgimg" fill />
            <div className="blackbox boxgrid">
              {
                (cmsData?.content?.[1]?.card?.length > 0)
                  ?
                  cmsData?.content?.[1]?.card?.map((data, ind) => (
                    <div className={`borderbox ${["bots", "data"].some(text => sectiontwoborderbox[ind].boxhead.toLowerCase().includes(text)) ? "videobox" : ""}`} key={sectiontwoborderbox[ind].boxhead}>
                      <div className={`${["bots", "data"].some(text => sectiontwoborderbox[ind].boxhead.toLowerCase().includes(text)) ? "videoboxdiv" : ""}`}>
                        <Image src={sectiontwoborderbox[ind].boximg} alt={sectiontwoborderbox[ind].boxhead} className="img-fluid borderboximg" />
                        <p className="borderboxhead paracontent">{data?.heading}</p>
                        <p className="borderboxdesc paracontent">
                          {data.description}
                        </p>
                      </div>
                      {
                        ["bots", "data"].some(text => sectiontwoborderbox[ind].boxhead.toLowerCase().includes(text)) && <video autoPlay={true} loop={true} muted={true} controls={false}>
                          <source src={`/assets/images/${sectiontwoborderbox[ind].boxhead.toLowerCase().includes("bots") ? "botspamvid" : "twomobiles"}.mp4`} type="video/mp4" />
                          <track src="javascript:;" kind="captions"></track>
                        </video>
                      }
                    </div>
                  ))
                  :
                  <></>
              }
            </div>
          </div>
        </Container>
      </section>
      <section className="sectionthree bglines">
        <Container>
          <div className="sectionthreebox sectionblackbg">
            <div className="sectionthreeinnerbox">
              <Image src={Images.greybg} alt={cmsData && cmsData?.content[2]?.heading ? cmsData?.content[2]?.heading : "Moniterbg"} className="img-fluid sectionbgimg" fill />
              <Row className="align-items-center positionbox">
                <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                  <h2 className="section-title mb-3">{cmsData && cmsData?.content[2]?.heading}</h2>
                  <p className="paracontent mb-3 text-white">
                    {cmsData && cmsData?.content[2]?.description}                  </p>

                  <p className="paracontent text-pink mb-3">
                    {cmsData && cmsData?.content[2]?.subHeading}
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
              <Col xs={12} sm={12} md={12} lg={7} xl={6}>
                <h2 className="section-title text-center">
                  {cmsData && cmsData?.content[3]?.heading}
                </h2>
              </Col>
            </Row>
            <div className="listsbox stars mt-5">
              <Accordion>
                <div>
                  {
                    firstBoxes.map((libox, index) => (
                      <Accordion.Item eventKey={libox.heading} key={libox.heading} className="borderbox">
                        <Accordion.Header>
                          <div className="d-flex align-items-center gap20">
                            <Image src={width < 767 ? listsboxes[index].listboximg : width < 1199 ? listsboxesonesec[index].listboximg : listsboxesone[index].listboximg} alt={libox.heading} className="img-fluid borderboximg" />
                            <p className="paracontent text-lightgreen fw500 borderboxhead">{libox.heading}</p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="paracontent text-white my-3 fw500">{libox.subHeading}</p>
                          <div
                            dangerouslySetInnerHTML={{ __html: libox.sunediter }}
                            className="listboxul"
                          >

                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))
                  }
                </div>
                {
                  width > 767 && <div>
                    {
                      secondBoxes && secondBoxes.map((libox, index) => (
                        <Accordion.Item eventKey={libox.heading} key={libox.heading} className="borderbox">
                          <Accordion.Header>
                            <div className="d-flex align-items-center gap20">
                              <Image src={width < 1199 ? listsboxestwosec[index].listboximg : listsboxestwo[index].listboximg} alt={libox.heading} className="img-fluid borderboximg" />
                              <p className="paracontent text-lightgreen fw500 borderboxhead">{libox.heading}</p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p className="paracontent text-white my-3 fw500">{libox.subHeading}</p>
                            <div
                              dangerouslySetInnerHTML={{ __html: libox.sunediter }}
                              className="listboxul"
                            >

                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))
                    }
                  </div>
                }

                {
                  thirdBoxes && <div>
                    {
                      thirdBoxes && thirdBoxes.map((libox, index) => (
                        <Accordion.Item eventKey={libox.heading} key={libox.heading} className="borderbox">
                          <Accordion.Header>
                            <div className="d-flex align-items-center gap20">
                              <Image src={listsboxesthree[index].listboximg} alt={libox.heading} className="img-fluid borderboximg" />
                              <p className="paracontent text-lightgreen fw500 borderboxhead">{libox.heading}</p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p className="paracontent text-white my-3 fw500">{libox.subHeading}</p>
                            <div
                              dangerouslySetInnerHTML={{ __html: libox.sunediter }}
                              className="listboxul"
                            >

                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))
                    }
                  </div>
                }


                {/* <Row className="justify-content-center">
                  {
                    (cmsData?.content?.[3]?.card?.length > 0) ?
                      cmsData?.content[3]?.card?.map((libox, index) => (
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
                          <div className="borderbox">
                            <Accordion.Item eventKey={index} className="borderbox">
                              <Accordion.Header>
                                <div className="d-flex align-items-center gap20">
                                  <Image src={listsboxes[index].listboximg} alt={listsboxes[index].listboxhead} className="img-fluid borderboximg" />
                                  <p className="paracontent text-lightgreen fw500 borderboxhead">{libox.heading}</p>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <p className="paracontent text-white my-3 fw500">{libox.subHeading}</p>
                                <div
                                  dangerouslySetInnerHTML={{ __html: libox.sunediter }}
                                  className="listboxul"
                                >

                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
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
                      )) : ""
                  }
                </Row> */}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
      <section className="sectionfive bglines">
        <Image src={Images.mobilessectionbg} alt="cover" className="img-fluid sectionbgimg" fill />
        <div className="sectionfivebg">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={11} xxl={10}>
                <div className="sectionfivebluebox">
                  <Image src={Images.mobilesbg} alt="cover" className="img-fluid sectionbgimg" fill />
                  <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={8}>
                      <h2 className="section-title text-center">
                        {cmsData && cmsData?.content[4]?.heading}
                      </h2>
                      <p className="paracontent text-white text-center mt-2">
                        {cmsData && cmsData?.content[4]?.description}
                      </p>
                    </Col>
                  </Row>
                  <div className="text-center sectionfivecenterimg">
                    <Lottieimg animationData={Images.threemobiles} loop={true} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="sectionsix bglines">
        <Image src={Images.centercirclebg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8}>
              <h2 className="section-title text-center fw700">
                The NOVA Ecosystem
              </h2>
            </Col>
          </Row>
          <div className="sectionsix_centerbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={2} xl={3} className="mb40 d-none d-lg-block">
                <p className="paracontent sectionsix_centerboxhead text-skybluetwo fntoswald">Mint & Sell</p>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6} className="mb40">
                <div className="sectionsix_centerboximgbox">
                  <Lottieimg animationData={Images.ecosystemarrows} loop={true} />
                  {/* <Image src={Images.ecosystemcircle} alt="NOVA Ecosystem" className="img-fluid sectionsix_centerboximg" /> */}
                  <p className="paracontent sectionsix_centerboxhead sectionsix_centerboxheadone text-skybluetwo fntoswald d-lg-none">Mint & Sell</p>
                  <p className="paracontent sectionsix_centerboxhead sectionsix_centerboxheadtwo text-purpletwo fntoswald d-lg-none">Create & <br /> Connect</p>
                  <p className="paracontent sectionsix_centerboxhead sectionsix_centerboxheadthree text-yellowtwo fntoswald d-lg-none">Earn & Own</p>

                  <p className="paracontent sectionsix_centercontent one">MEMBERSHIP <br /> MARKETPLACE</p>
                  <p className="paracontent sectionsix_centercontent two">WALLET</p>
                  <p className="paracontent sectionsix_centercontent three">
                    SOCIAL <br /> COMMUNITY <br /> & CREATOR <br /> HUB
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={2} xl={3} className="d-none d-lg-block">
                <p className="paracontent sectionsix_centerboxhead text-purpletwo fntoswald">Create & Connect</p>
              </Col>
            </Row>
          </div>
          <p className="paracontent sectionsix_centerboxhead d-none d-lg-block text-yellowtwo fntoswald">Earn & Own</p>
        </Container>
      </section>
      <section className="sectionseven">
        <Image src={Images.mintsellbg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <div className="sectionsevenbox blackbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title mb-2">{cmsData && cmsData?.content[4]?.card[0]?.heading} </h2>
                <p className="paracontent text-skybluetwo text-uppercase fw500 mb-3">
                  {cmsData && cmsData?.content[4]?.card[0]?.subHeading}                </p>
                <p className="paracontent mb-4 text-white">
                  {cmsData && cmsData?.content[4]?.card[0]?.description}
                </p>
                <Link href="/" className="btn sitebtn rotateicon skybluetwobtn">
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
                <h2 className="section-title mb-2">{cmsData && cmsData?.content[4]?.card[1]?.heading}</h2>
                <p className="paracontent text-purpletwo text-uppercase fw500 mb-3">
                  {cmsData && cmsData?.content[4]?.card[1]?.subHeading}                </p>
                <p className="paracontent mb-4 text-white">
                  {cmsData && cmsData?.content[4]?.card[1]?.description}
                </p>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  <Link href="/community" className="btn sitebtn purpleoutlinebtn">
                    Community
                    <Image src={Images.whiteright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                  <Link href="/creators" className="btn sitebtn purpleoutlinebtn">
                    Creators
                    <Image src={Images.whiteright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                  <Link href="/fans" className="btn sitebtn purpleoutlinebtn">
                    Fans
                    <Image src={Images.whiteright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                  <Link href="/dao" className="btn sitebtn purpleoutlinebtn">
                    DAO’s
                    <Image src={Images.whiteright} alt="Right Arrow" className="img-fluid" />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionnine stars novaearn">
        <Image src={Images.earnownbg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <div className="sectionninebox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title mb-2">{cmsData && cmsData?.content[4]?.card[2]?.heading}</h2>
                <p className="paracontent text-yellowtwo text-uppercase fw500 mb-3">
                  {cmsData && cmsData?.content[4]?.card[2]?.subHeading}
                </p>
                <p className="paracontent text-white">
                  {cmsData && cmsData?.content[4]?.card[2]?.description}
                </p>
                {/* <ul className="mt-3 mb-4 sectionnine_earnownul"> */}
                {/* {
                    earnownli.map((eo, i) => (
                      <li className="starlist" key={i}>
                        <p className="paracontent text-lightgreen">{eo.content}</p>
                      </li>
                    ))
                  } */}
                {
                  // <li className="starlist"> 

                  <div className="listboxul"

                    dangerouslySetInnerHTML={{ __html: cmsData && cmsData?.content[4]?.card[2]?.sunediter }}

                  ></div>


                  // </li>
                }

                {/* </ul> */}
                <Link href="/" className="btn sitebtn yellowtwobtn">
                  Learnmore
                  <Image src={Images.blackright} alt="Download" className="img-fluid" />
                </Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.earnown} alt="Earn & Own" className="img-fluid earnownimg" width={500} />
                  {/* <video className="earnownvid" autoPlay={true} loop={true} muted={true}>
                    <source src="/assets/images/earnown.mp4" type="video/mp4" />
                    <track src="javascript:;" kind="captions"></track>
                  </video> */}
                  {/* <Lottieimg animationData={Images.earnown} loop={true} /> */}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionten bglines">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8} xl={7}>
              <h2 className="section-title text-center fw600">
                {cmsData && cmsData?.content[5]?.heading}               </h2>
            </Col>
          </Row>
          <div className="sectiontenbox blackbox">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={7}>
                <ul className="sectiontenboxul">
                  {
                    (cmsData?.content?.[5]?.card?.length > 0) ?

                      cmsData?.content[5]?.card?.map((tm, i) => (
                        <li className="sectiontenboxli" key={i}>
                          <span className="sectiontenboxnum">{i + 1}</span>
                          <p className="sectiontenboxdesc paracontent">{tm.heading}</p>
                        </li>
                      )) : ""
                  }
                </ul>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Lottieimg animationData={Images.mobilewithman} loop={true} className="personimg" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectioneleven">
        <Image src={Images.newerabg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <div className="sectionelevenbox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.neweraimg} alt="A New Era of Memberships" className="img-fluid neweraimg" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title section-titlebig text-lightgreen mb-2"> {cmsData && cmsData?.content[6]?.heading}  </h2>
                <p className="section-titletwo mb-3">
                  {cmsData && cmsData?.content[6]?.subHeading}                 </p>
                <p className="paracontent mb-3 text-white">
                  {cmsData && cmsData?.content[6]?.description}
                </p>

              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectiontwelve">
        <Image src={Images.membershipbg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={7}>
              <h2 className="section-title text-center text-lightgreen fw600">
                {cmsData && cmsData?.content[7]?.heading}               </h2>
            </Col>
          </Row>
          <div className="sectiontwelvebox">
            <div className="sectiontwelve_grid">
              {
                (cmsData?.content?.[7]?.card?.length > 0) ? cmsData?.content[7]?.card?.map((mem, index) => (
                  <div className="sectiontwelve_gridbox" key={index}>
                    <div>
                      <Image src={membership[index].memberimg} alt={membership[index].memberhead} className="img-fluid sectiontwelve_gridimg" />
                    </div>
                    <div>
                      <p className="paracontent sectiontwelve_gridhead">{mem.heading}</p>
                      <p className="paracontent sectiontwelve_griddesc">
                        {mem.description}
                      </p>
                    </div>
                  </div>
                )) : ""
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
                      {cmsData && cmsData?.content[8]?.heading}                       </h2>
                    <p className="paracontent mt-3 text-center text-white">
                      {cmsData && cmsData?.content[8]?.description}                             </p>
                  </Col>
                </Row>
                <div className="mt-4">
                  {console.log('fefewfallll', cmsData?.content?.[8]?.card, fanownership)}
                  <BoxContents data={(cmsData && cmsData?.content[8]?.card.length > 0) ? cmsData?.content[8]?.card : []} image={fanownership} oddgrid={fanownership.length % 2 !== 0} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionfourteen">
        <Image src={Images.featuresbg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <div className="sectionfourteenbox">
            <Row className="align-items-center row-reverse">
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="text-center">
                  <Image src={Images.features} alt="DeFi Features" className="img-fluid featuresimg" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                <h2 className="section-title section-titlebig text-mediumpurple fw600 mb-2">  {cmsData && cmsData?.content[9]?.heading}   </h2>
                <p className="section-titletwo mb-3">
                  <span className="d-block">  {cmsData && cmsData?.content[9]?.subHeading}   </span>
                </p>
                <p className="paracontent text-white">
                  {cmsData && cmsData?.content[9]?.description}
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="sectionfiveteen sectionblackbg">
        <Container className="containertwo">
          <div className="blackbox">
            {/* <FlowBoxContents data={flowboxcontents} /> */}
            <FlowBoxContents data={(cmsData && cmsData?.content[9]?.card.length > 0) ? cmsData && cmsData?.content[9].card : []} image={flowboxcontents} />

          </div>
        </Container>
      </section>
      <section className="sectionsixteen">
        <Image src={Images.blackboxbg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="blackbox blackboxlightbg">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={8}>
                    <p className="paracontent text-center blackboxlightcontent">
                      {cmsData && cmsData?.content[10]?.description}
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={9}>
                    <p className="paracontent text-center blackboxendcontent">
                      {/* <span className="text-lightgreen">
                        Unlock the full potential of the Internet with <span className="text-purple">NOVA</span>
                      </span> */}
                      <span className="text-lightgreen">
                        {cmsData && cmsData?.content[10]?.heading}
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
                <h2 className="section-title text-black fw600 mb-3"> {cmsData && cmsData?.content[10]?.card[0]?.heading}  </h2>
                <p className="paracontent text-black">
                  {cmsData && cmsData?.content[10]?.card[0]?.description}
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
                  <h2 className="section-title text-black fw600 mb-3">{cmsData && cmsData?.content[10]?.card[1]?.heading} </h2>
                  <p className="paracontent text-black">
                    {cmsData && cmsData?.content[10]?.card[1]?.description}

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
                  <h2 className="section-title text-black fw600 mb-3">{cmsData && cmsData?.content[10]?.card[2]?.heading} </h2>
                  <p className="paracontent text-black">
                    {cmsData && cmsData?.content[10]?.card[2]?.description}
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
                    {console.log("new_home", cmsData && cmsData?.content[10]?.card[3]?.heading)}
                    {cmsData && cmsData?.content[10]?.card[3]?.heading}
                  </h2>
                  <p className="paracontent text-black">
                    {cmsData && cmsData?.content[10]?.card[3]?.description}
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
                  <h2 className="section-title text-black fw600 mb-3">{cmsData && cmsData?.content[10]?.card[4]?.heading} </h2>
                  <p className="paracontent text-black">
                    {cmsData && cmsData?.content[10]?.card[4]?.description}
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
                    {cmsData && cmsData?.content[10]?.card[5]?.heading}
                  </h2>
                  <p className="paracontent text-black">
                    {cmsData && cmsData?.content[10]?.card[5]?.description}
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
      <section className="sectiontwentythree">
        <Image src={Images.blackboxonebg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="blackbox blackboxlightbg">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={8}>
                    <p className="paracontent text-center blackboxlightcontent mb-0">
                      {cmsData && cmsData?.content[11]?.description}

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
                {cmsData && cmsData?.content[11]?.heading}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={12} xl={9}>
              <div className="sectiontwentyfourbox">
                {

                  (cmsData?.content?.[11]?.card?.length > 0) ?
                    cmsData?.content?.[11]?.card?.map((eb, i) => (
                      <div className="stwentyfour_gradientbox" key={eb.heading}>
                        <Image src={Images[`explorebg${exploreimgs[i].id === i && exploreimgs[i].value}`]} alt="cover" className="img-fluid sectionbgimg" fill />
                        <div className="stwentyfour_gradientboxfront">
                          <Image src={explorebox[i].dataimg} alt={explorebox[i].datahead} className="img-fluid stwentyfour_gradientboximg" />
                          <p className="paracontent stwentyfour_gradientboxhead">{eb.heading}</p>
                        </div>
                        <p className="paracontent stwentyfour_gradientboxdesc">
                          {eb.description}
                        </p>
                      </div>
                    )) : ""
                }
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectiontwentyfive">
        <Image src={Images.expowerjourney} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="blackbox blackboxlightbg">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={8}>
                    <p className="paracontent text-center blackboxlightcontent">
                      {cmsData && cmsData?.content[12]?.description}
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={10}>
                    <p className="paracontent text-center blackboxendcontent text-mediumpink">
                      {cmsData && cmsData?.content[12]?.heading}                      </p>
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
                  {/* <span className="text-lightpurple">Ecosystem Expansion : The Future of</span> <span className="text-lightgreen">NOVA</span> */}
                  <span className="text-lightpurple">{cmsData && cmsData?.content[13]?.heading}  </span> <span className="text-lightgreen"></span>

                </h2>
              </Col>
            </Row>
            <div className="sectiontwentysixbox mt-5 gridboxthree">
              {/* <BoxContents data={ecosystem} /> */}
              <BoxContents data={(cmsData && cmsData?.content[13]?.card.length > 0) ? cmsData?.content[13]?.card : []} image={ecosystem} page="homepage" />
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
                  <h2 className="section-title mb-3">{cmsData && cmsData?.content[14]?.heading} </h2>
                  <p className="paracontent text-white mb-3">
                    {cmsData && cmsData?.content[14]?.description}                   </p>
                  <p className="paracontent text-lightviolet fw500 mb-3">
                    {cmsData && cmsData?.content[14]?.subHeading}                   </p>
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
              <h2 className="section-title text-center">{cmsData && cmsData?.content[15]?.heading} </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10}>
              <div className="blackbox mt-5">
                <div className="sectiontwentyeightbox">
                  <Accordion defaultActiveKey="0">
                    {
                      (cmsData?.content?.[15]?.card?.length > 0) ?
                        cmsData?.content?.[15]?.card?.map((fa, i) => (
                          <Accordion.Item eventKey={i} key={fa.heading}>
                            <Accordion.Header>
                              <span>0{i + 1}</span>
                              {fa.heading}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="paracontent">
                                {fa.description}
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        )) : ""
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
      <section className="sectiontwentynine">
        <Image src={Images.blackboxonebg} alt="cover" className="img-fluid sectionbgimg" fill />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10}>
              <div className="blackbox blackboxlightbg">
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={8}>
                    <div className="sectiontwentyninebox">
                      <Image src={Images.subscribe} alt="Subscribe Newsletter" className="img-fluid sectiontwentynineboximg mb-4" />
                      <p className="paracontent text-lightgreen sectiontwentynineboxhead mb-2">Subscribe Newsletter</p>
                      <p className="paracontent text-white sectiontwentynineboxdesc mb-4">
                        Sign up to our newsletter to receive the latest updates
                      </p>
                      <Form className="sectiontwentyninebox_subscribeform">
                        <InputGroup className="mb-3">
                          <Form.Control
                            aria-label="Subscribe Newsletter"
                            aria-describedby="news"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <InputGroup.Text id="news" >
                            <button type="button" className="btn sitebtn greenbtn fw600" onClick={() => submit()} >Subscribe</button>
                          </InputGroup.Text>


                        </InputGroup>
                      </Form>
                      <p className="paracontent text-grey">We promise not to spam you !</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default page;
