"use client";

import React, { createContext, useEffect, useState } from 'react';

export const PageContext = createContext(null);

const GlobalContext = ({ children }) => {

    const [urlname, setUrlname] = useState("");
    // const [url, setUrl] = useState(window.location.pathname);
    // const location = useLocation();

    // useEffect(() => {
    //     alert("HEllo");
    //     let curPageUrl = window.location.pathname;
    //     let curUrl = curPageUrl.slice(1);
    //     let finCurUrl = document.querySelector("body").classList.add(`${curUrl ? curUrl : "home"}`);
    //     setUrlname(finCurUrl);
    // }, [url]);

    const pageUrl = () => {
        let curPageUrl = window.location.pathname;
        let curUrl = curPageUrl.slice(1);
        document.querySelector("body").className = `${curUrl ? curUrl + "page" : "homepage"}`;
        // setUrlname(finCurUrl);
    }
    

    return (
        <PageContext.Provider value={{urlname, pageUrl}}>
            {children}
        </PageContext.Provider>
    )
}

export default GlobalContext;