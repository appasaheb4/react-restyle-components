import { useEffect, useState } from 'react';
export const useCurrentAccordionIndex = (ref) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    useEffect(() => {
        let node = ref.current;
        let index = 1;
        while (node && (node = node.previousElementSibling)) {
            index++;
        }
        setCurrentIndex(index);
    }, []);
    return currentIndex;
};
