import { useState, useCallback, useEffect } from 'react';
export const useHoverState = (disabled = false) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const onMouseOver = useCallback(() => {
        setIsHovered(true);
    }, []);
    const onMouseOut = useCallback(() => {
        setIsHovered(false);
    }, []);
    const onMouseDown = useCallback(() => {
        setIsActive(true);
    }, []);
    const onMouseUp = useCallback(() => {
        setIsActive(false);
    }, []);
    useEffect(() => {
        const event = () => {
            if (isActive) {
                onMouseUp();
            }
        };
        document.addEventListener('mouseup', event);
        return () => {
            document.removeEventListener('mouseup', event);
        };
    }, [isActive, onMouseUp]);
    const hoverState = disabled
        ? 'disabled'
        : isActive
            ? 'active'
            : isHovered
                ? 'hover'
                : 'default';
    return { hoverState, onMouseOver, onMouseOut, onMouseDown, onMouseUp };
};
