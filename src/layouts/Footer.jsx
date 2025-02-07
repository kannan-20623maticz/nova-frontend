"use client";
import Images from '@/Images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerbox">
                <Container>
                    <Row className="footerrow">
                        <Col xs={12} sm={12} md={6} lg={4} className="mb-4 mb-lg-0">
                            <Image src={Images.footlogo} alt="Nova" className="img-fluid footlogo" />
                            <p className="footer-text">
                                The World’s First AI-Powered Social Wallet &  Super App
                            </p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <div className="footlinkflex">
                                <div className="footlinks">
                                    <p className="footlinkhead">Company</p>
                                    <ul className="footlink-ul">
                                        <li className="footlink-li">
                                            <Link href="/community" className="footlink-text">Community</Link>
                                        </li>
                                        <li className="footlink-li">
                                            <Link href="/creators" className="footlink-text">Creators</Link>
                                        </li>
                                        <li className="footlink-li">
                                            <Link href="/fans" className="footlink-text">Fans</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footlinks">
                                    <p className="footlinkhead">Resources</p>
                                    <ul className="footlink-ul">
                                        <li className="footlink-li">
                                            <Link href="/dao" className="footlink-text">DAO</Link>
                                        </li>
                                        <li className="footlink-li">
                                            <Link href="/wallet" className="footlink-text">Wallet</Link>
                                        </li>
                                        <li className="footlink-li">
                                            <Link href="/marketplace" className="footlink-text">Marketplace</Link>
                                        </li>
                                        <li className="footlink-li">
                                            <Link href="/about" className="footlink-text">About</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p className="foot-text">© 2025 Nova. All rights reserved.</p>
        </footer>
    )
}

export default Footer;