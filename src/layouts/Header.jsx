"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import Images from '@/Images';
import { usePathname } from 'next/navigation';


const Header = () => {

    const [headerbg, setHeaderbg] = useState(0);

    // useEffect(() => {
    //     const scrollfunc = () => {
    //         setHeaderbg(document.documentElement.scrollTop);
    //     }
    //     window.addEventListener("scroll", scrollfunc);

    //     return () => {
    //         window.removeEventListener("scroll", scrollfunc);
    //     }
    // }, [headerbg]);

    const [headlinks] = useState([
        {
            path: "/community",
            name: "Community"
        },
        {
            path: "/creators",
            name: "Creators"
        },
        {
            path: "/fans",
            name: "Fans"
        },
        {
            path: "/dao",
            name: "DAOs"
        },
        {
            path: "/wallet",
            name: "Wallet"
        },
        {
            path: "/marketplace",
            name: "Marketplace"
        },
        {
            path: "/about",
            name: "About"
        },
    ]);

    // const pathname = usePathname();

    // useEffect(() => {
    //     let location = pathname.slice(1);
    //     document.querySelector("body").className = `${location ? location : "home"}page`;
    // }, [pathname]);

    return (
        <header className={`header ${headerbg > 50 ? "headerscroll" : ""}`}>
            {/* <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Images.logo} alt="Logo" className="img-fluid logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle>
                        <span className="lines"></span>
                        <span className="lines"></span>
                        <span className="lines"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            {
                                headlinks.map((headli) => (
                                    <Link href={headli.path} key={headli.name} className="nav-link">{headli.name}</Link>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <Navbar key="lg" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Images.logo} alt="Logo" className="img-fluid logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg">
                        <span className="lines"></span>
                        <span className="lines"></span>
                        <span className="lines"></span>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                <Image src={Images.logo} alt="Logo" className="img-fluid logo" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto">
                                {
                                    headlinks.map((headli) => (
                                        <Link href={headli.path} key={headli.name} className="nav-link" replace>{headli.name}</Link>
                                    ))
                                }
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;