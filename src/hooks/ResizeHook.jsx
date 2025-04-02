import { useEffect, useState } from 'react';

const ResizeHook = () => {

    if (typeof window === undefined) {
        return "";
    }

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [width]);

    return width;
}

export default ResizeHook;