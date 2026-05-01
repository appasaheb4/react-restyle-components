import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import s from '../../../tc.module.css';
import { Icon } from '../../Icon/Icon';
import { Tooltip } from '../../Tooltip';
import { cn } from '../../../utils';
const defaultTriggerIconProps = { size: 22, color: '#454cbf' };
export function ButtonGroupList({ options, value, onChange, triggerIcon = 'BsJournalBookmark', triggerIconProps, tooltipContent, tooltipProps, onBaseClick, disabled = false, className, style, triggerClassName, triggerButtonStyle, dropdownClassName, dropdownStyle, triggerAriaLabel = 'Open options', listboxAriaLabel = 'Options', }) {
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
    const baseTrigger = (_jsx("button", { type: 'button', "aria-expanded": open, "aria-haspopup": 'listbox', "aria-label": triggerAriaLabel, disabled: disabled, onClick: (e) => {
            if (disabled)
                return;
            onBaseClick?.(e);
            setOpen((o) => !o);
        }, className: cn(s['flex'], s['h-10'], s['w-10'], s['items-center'], s['justify-center'], s['rounded-xl'], s['border'], s['border-stroke'], s['bg-white'], s['text-grey'], s['shadow-1'], s['transition'], s['hover:border-meta-5'], 'hover:bg-meta-2/40', s['focus:outline-none'], s['focus-visible:ring-2'], 'focus-visible:ring-meta-5/50', 'dark:border-strokedark dark:bg-boxdark dark:text-meta-9 dark:hover:bg-meta-4/30', disabled && s['cursor-not-allowed'], disabled && s['opacity-50'], triggerClassName), style: triggerButtonStyle, children: _jsx(Icon, { nameIcon: triggerIcon, propsIcon: {
                size: triggerPropsMerged.size,
                color: triggerPropsMerged.color,
            } }) }));
    const trigger = tooltipContent != null && tooltipContent !== '' ? (_jsx(Tooltip, { ...tooltipProps, content: tooltipContent, children: baseTrigger })) : (baseTrigger);
    return (_jsxs("div", { ref: rootRef, className: cn(s['relative'], s['mr-2'], className), style: style, children: [trigger, open && !disabled && (_jsx("div", { role: 'listbox', "aria-label": listboxAriaLabel, className: cn('animate-guide-menu-panel', s['absolute'], s['right-0'], s['top-full'], s['mt-2'], s['w-56'], s['origin-top'], s['overflow-hidden'], s['rounded-xl'], s['border'], s['border-stroke'], s['bg-white'], s['shadow-4'], s['ring-1'], s['z-99'], 'ring-black/5 dark:border-strokedark dark:bg-boxdark dark:ring-white/10', dropdownClassName), style: dropdownStyle, children: options.map((opt, i) => (_jsxs("button", { type: 'button', role: 'option', "aria-selected": value === opt.value, style: { animationDelay: `${40 * i}ms` }, className: cn('animate-guide-menu-item', s['flex'], s['w-full'], s['items-center'], s['gap-2'], s['px-3'], 'py-2.5', s['text-left'], s['text-sm'], s['transition-colors'], s['first:rounded-t-xl'], s['last:rounded-b-xl'], 'hover:bg-meta-2/60 dark:hover:bg-meta-4/40', value === opt.value
                        ? cn('bg-primary/10', s['font-medium'], s['text-primary'])
                        : cn(s['text-content'], 'dark:text-meta-9')), onClick: () => {
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
