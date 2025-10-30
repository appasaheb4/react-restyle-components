import { useEffect } from 'react';
import { useId } from './useId';
export const useDisableBackgroundScroll = (shouldDisableScroll, backgroundElement) => {
    const className = useId('disable-scroll');
    useEffect(() => {
        if (!shouldDisableScroll)
            return;
        backgroundElement ??= document.body;
        backgroundElement.classList.add(className);
        return () => {
            backgroundElement?.classList.remove(className);
        };
    }, [shouldDisableScroll, backgroundElement]);
};
/** @deprecated Prefer `useDisableBackgroundScroll` instead */
export const useDisableBodyScroll = useDisableBackgroundScroll;
