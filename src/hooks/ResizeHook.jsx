import { useEffect, useState } from 'react';

const ResizeHook = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {

        if (typeof window === "undefined") {
            return;
        }

        setWidth(window.innerWidth);

        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return width;
}

export default ResizeHook;