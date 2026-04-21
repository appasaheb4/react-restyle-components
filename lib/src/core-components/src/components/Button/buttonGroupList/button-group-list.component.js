import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../Icon/Icon';
import { Tooltip } from '../../Tooltip';
import { cn } from '../../../utils';
const defaultTriggerIconProps = { size: 22, color: '#454cbf' };
export function ButtonGroupList({ options, value, onChange, triggerIcon = 'BsJournalBookmark', triggerIconProps, tooltipContent, tooltipProps, disabled = false, className, style, triggerClassName, triggerButtonStyle, dropdownClassName, dropdownStyle, triggerAriaLabel = 'Open options', listboxAriaLabel = 'Options', }) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef(null);
    const triggerPropsMerged = {
        ...defaultTriggerIconProps,
        ...triggerIconProps,
    };
    useEffect(() => {
        if (!open)
            return;
        const onDocMouseDown = (e) => {
            const el = rootRef.current;
            if (el && !el.contains(e.target)) {
                setOpen(false);
            }
        };
        const onKeyDown = (e) => {
            if (e.key === 'Escape')
                setOpen(false);
        };
        document.addEventListener('mousedown', onDocMouseDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onDocMouseDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);
    const baseTrigger = (_jsx("button", { type: 'button', "aria-expanded": open, "aria-haspopup": 'listbox', "aria-label": triggerAriaLabel, disabled: disabled, onClick: () => !disabled && setOpen((o) => !o), className: cn('flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-white text-grey shadow-1 transition hover:border-meta-5 hover:bg-meta-2/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-meta-5/50 dark:border-strokedark dark:bg-boxdark dark:text-meta-9 dark:hover:bg-meta-4/30', disabled && 'cursor-not-allowed opacity-50', triggerClassName), style: triggerButtonStyle, children: _jsx(Icon, { nameIcon: triggerIcon, propsIcon: {
                size: triggerPropsMerged.size,
                color: triggerPropsMerged.color,
            } }) }));
    const trigger = tooltipContent != null && tooltipContent !== '' ? (_jsx(Tooltip, { ...tooltipProps, content: tooltipContent, children: baseTrigger })) : (baseTrigger);
    return (_jsxs("div", { ref: rootRef, className: cn('relative z-[99] mr-2', className), style: style, children: [trigger, open && !disabled && (_jsx("div", { role: 'listbox', "aria-label": listboxAriaLabel, className: cn('animate-guide-menu-panel absolute right-0 top-full mt-2 w-56 origin-top overflow-hidden rounded-xl border border-stroke bg-white shadow-4 ring-1 ring-black/5 dark:border-strokedark dark:bg-boxdark dark:ring-white/10', dropdownClassName), style: dropdownStyle, children: options.map((opt, i) => (_jsxs("button", { type: 'button', role: 'option', "aria-selected": value === opt.value, style: { animationDelay: `${40 * i}ms` }, className: cn('animate-guide-menu-item flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-meta-2/60 dark:hover:bg-meta-4/40', value === opt.value
                        ? 'bg-primary/10 font-medium text-primary'
                        : 'text-content dark:text-meta-9'), onClick: () => {
                        onChange(opt.value);
                        setOpen(false);
                    }, children: [_jsx(Icon, { nameIcon: opt.nameIcon, propsIcon: {
                                size: 16,
                                color: value === opt.value ? '#454cbf' : '#6A727F',
                            } }), _jsx("span", { children: opt.label })] }, String(opt.value)))) }))] }));
}
export const LIBRARY_GUIDE_OPTIONS = [
    { value: 'noneGuide', label: 'No Guide', nameIcon: 'BsSlashCircle' },
    {
        value: 'operationalGuide',
        label: 'Operational Guide',
        nameIcon: 'BsClipboardCheck',
    },
    {
        value: 'technicalGuide',
        label: 'Technical Guide',
        nameIcon: 'BsCpu',
    },
];
export function ButtonGuideList({ options = LIBRARY_GUIDE_OPTIONS, tooltipContent = 'LIMSPlus Guide — documentation mode', ...rest }) {
    return (_jsx(ButtonGroupList, { options: options, tooltipContent: tooltipContent, ...rest }));
}
