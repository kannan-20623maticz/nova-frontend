'use client'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import Images from '@/Images';
import Lottie from 'lottie-react';
import FooterBlackbox from '@/components/FooterBlackbox';

const page = () => {

    const [footblackbox] = useState([
        {
            datahead: "Join the platform that empowers creators, fans, and communities to connect, grow, and thrive. Start your journey today and help shape the future of the web.",
            datadesc: "Get Started with NOVA"
        }
    ]);

    return (
        <main className="aboutpage">
            <section className="sectionone bannersection">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={12} lg={6} className="mb40">
                            <div className="bannerbox">
                                <h1 className="banner-title">
                                    Built for the Community, by the Community
                                </h1>
                                <p className="paracontent mb-4">
                                    At NOVA, we believe web3 can transform how people
                                    create, connect, and earn. That’s why we built the first
                                    all-encompassing social ecosystem, empowering
                                    creators, fans, and communities to thrive together.
                                </p>
                                <button type="button" className="btn sitebtn blackbtn mt-4">
                                    Download
                                    <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
                                </button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="bannerimgbox">
                                <Lottie animationData={Images.about} loop={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sectiontwo blackbg">
                <Container className="containertwo">
                    <div className="borderbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={9}>
                                <p className="borderboxhead centerhead text-center text-darkorange">Connection Through Creation</p>
                                <div className="sectionvidbox text-center">
                                    <video className="novawalletvid" autoPlay={true} loop={true} muted={true}>
                                        <source src="/assets/images/wallet/walletnova.mp4" type="video/mp4" />
                                        <track src="javascript:;" kind="captions"></track>
                                    </video>
                                </div>
                                <p className="paracontent text-grey text-center mb-3">
                                    NOVA is more than a platform—it’s a space where creators and fans come together to inspire, connect, and grow. For creators, it’s a powerful tool to share their passions, ideas, and stories while building authentic relationships with their audience. For fans, it’s a vibrant community where they can engage with the creators they love, connect with like-minded individuals, and explore new ideas that fuel their own passions.
                                </p>
                                <p className="paracontent text-grey text-center">
                                    At NOVA, we believe creativity is a universal language. Fans can discover content that inspires them, learn from creators, and even take the leap to become creators themselves. By blurring the line between fan and creator, NOVA empowers everyone to be part of a collaborative, creative ecosystem where inspiration flows both ways. Together, we’re building a platform that nurtures creativity, sparks ideas, and transforms passions into purpose.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="sectionthree blackbg">
                <Container className="containertwo">
                    <div className="borderbox">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={9}>
                                <p className="borderboxhead centerhead text-center text-lightgreen">Giving Back</p>
                                <div className="sectionvidbox text-center">
                                    <video className="novawalletvid" autoPlay={true} loop={true} muted={true}>
                                        <source src="/assets/images/botspamvid.mp4" type="video/mp4" />
                                        <track src="javascript:;" kind="captions"></track>
                                    </video>
                                </div>
                                <p className="paracontent text-grey text-center mb-3">
                                    At NOVA, we’re not just building a platform for the digital world—we’re committed to positively impacting the physical one too. As conscious creators and developers, we recognize the responsibility that comes with innovation. That’s why we’re working toward initiatives supporting society and the environment, from donating to charities to funding sustainability efforts.
                                </p>
                                <p className="paracontent text-grey text-center">
                                    While these features won’t be available at launch, they reflect our vision of a future where technology uplifts not just communities online but also the world around us. NOVA is about more than transactions—it’s about transformation.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="sectionfour p-0">
                <FooterBlackbox page="about" data={[
        {
            datahead: "Join the platform that empowers creators, fans, and communities to connect, grow, and thrive. Start your journey today and help shape the future of the web.",
            datadesc: "Get Started with NOVA"
        }
    ]
    } />
            </section>
        </main>
    )
}

export default page;

// 'use client';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';
// import { Col, Container, Row } from 'react-bootstrap';
// import Images from '@/Images';

// // Fix: Dynamically import Lottie and FooterBlackbox to prevent SSR errors
// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// const FooterBlackbox = dynamic(() => import('@/components/FooterBlackbox'), { ssr: false });

// const Page = () => {
//     return (
//         <main className="aboutpage">
//             <section className="sectionone bannersection">
//                 <Container>
//                     <Row className="align-items-center">
//                         <Col xs={12} sm={12} md={12} lg={6} className="mb40">
//                             <div className="bannerbox">
//                                 <h1 className="banner-title">Built for the Community, by the Community</h1>
//                                 <p className="paracontent mb-4">
//                                     At NOVA, we believe web3 can transform how people
//                                     create, connect, and earn...
//                                 </p>
//                                 <button type="button" className="btn sitebtn blackbtn mt-4">
//                                     Download
//                                     <Image src={Images.download} alt="Down Arrow" className="img-fluid" />
//                                 </button>
//                             </div>
//                         </Col>
//                         <Col xs={12} sm={12} md={12} lg={6}>
//                             <div className="bannerimgbox">
//                                 <Lottie animationData={Images.about} loop={true} />
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             <section className="sectionfour p-0">
//                 <FooterBlackbox page="about" data={[{ datahead: "...", datadesc: "..." }]} />
//             </section>
//         </main>
//     );
// }

// export default Page;
