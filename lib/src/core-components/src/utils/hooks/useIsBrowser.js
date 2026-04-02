import { useEffect, useState } from 'react';
// sometimes components cannot be rendered on the server.
// so using `useEffect` ensures that the code is only rendered on the client side
// use this hook to avoid hydration errors
export const useIsBrowser = () => {
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    return isBrowser;
};
