import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import { Container } from 'reactstrap';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const ModalConfirm = ({ visible = false, title = 'Confirm', message, submitTitle = 'Send', closeTitle = 'Close', isClick = true, isClose = true, animationDuration = 200, classNames = {}, styles = {}, onClick, onClose, }) => {
    const [showModal, setShowModal] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    useEffect(() => {
        if (visible) {
            setShowModal(true);
            // Trigger animation after mount
            requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        }
        else if (showModal) {
            handleCloseAnimation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);
    const handleCloseAnimation = useCallback(() => {
        setIsClosing(true);
        setIsAnimating(false);
        setTimeout(() => {
            setShowModal(false);
            setIsClosing(false);
        }, animationDuration);
    }, [animationDuration]);
    const handleClose = useCallback(() => {
        handleCloseAnimation();
        setTimeout(() => {
            onClose && onClose();
        }, animationDuration);
    }, [handleCloseAnimation, onClose, animationDuration]);
    const handleSubmit = useCallback(() => {
        handleCloseAnimation();
        setTimeout(() => {
            onClick();
        }, animationDuration);
    }, [handleCloseAnimation, onClick, animationDuration]);
    // Animation styles
    const overlayAnimationStyle = {
        opacity: isAnimating ? 1 : 0,
        transition: `opacity ${animationDuration}ms ease-out`,
        backdropFilter: isAnimating ? 'blur(4px)' : 'blur(0px)',
        WebkitBackdropFilter: isAnimating ? 'blur(4px)' : 'blur(0px)',
    };
    const contentAnimationStyle = {
        opacity: isAnimating ? 1 : 0,
        transform: isAnimating
            ? 'scale(1) translateY(0)'
            : 'scale(0.95) translateY(-10px)',
        transition: `opacity ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out`,
    };
    return (_jsx(_Fragment, { children: _jsx(Container, { children: showModal && (_jsxs(_Fragment, { children: [_jsx("div", { className: cn(s['fixed'], s['inset-0'], s['z-40'], s['bg-black'], classNames.overlay), style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            ...overlayAnimationStyle,
                            ...styles.overlay,
                        }, onClick: handleClose }), _jsx("div", { className: cn(s['flex'], s['justify-center'], s['items-center'], s['overflow-x-hidden'], s['overflow-y-auto'], s['fixed'], s['inset-0'], s['z-50'], s['outline-none'], s['focus:outline-none'], s['p-4'], classNames.container), style: styles.container, children: _jsx("div", { className: cn(s['relative'], s['w-full'], classNames.wrapper), style: {
                                maxWidth: '28rem',
                                ...contentAnimationStyle,
                                ...styles.wrapper,
                            }, children: _jsxs("div", { className: cn(s['border-0'], s['rounded-lg'], s['shadow-lg'], s['relative'], s['flex'], s['flex-col'], s['w-full'], s['bg-white'], s['outline-none'], s['focus:outline-none'], classNames.content), style: {
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '16px',
                                    ...styles.content,
                                }, children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['p-4'], s['border-b'], s['border-solid'], s['border-gray-300'], classNames.header), style: {
                                            borderTopLeftRadius: '16px',
                                            borderTopRightRadius: '16px',
                                            background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
                                            ...styles.header,
                                        }, children: [_jsx("h3", { className: cn(s['text-xl'], s['font-semibold'], classNames.title), style: {
                                                    color: '#1e293b',
                                                    margin: 0,
                                                    ...styles.title,
                                                }, children: title }), _jsx("button", { className: cn(s['flex'], s['items-center'], s['justify-center'], s['border-0'], s['outline-none'], s['focus:outline-none'], classNames.closeButton), style: {
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '8px',
                                                    backgroundColor: 'transparent',
                                                    color: '#64748b',
                                                    fontSize: '24px',
                                                    lineHeight: 1,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.15s ease',
                                                    ...styles.closeButton,
                                                }, onMouseEnter: (e) => {
                                                    e.currentTarget.style.backgroundColor = '#fee2e2';
                                                    e.currentTarget.style.color = '#dc2626';
                                                }, onMouseLeave: (e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                    e.currentTarget.style.color = '#64748b';
                                                }, onClick: handleClose, "aria-label": "Close modal", children: _jsx("span", { style: { marginTop: '-2px' }, children: "\u00D7" }) })] }), _jsx("div", { className: cn(s['flex'], s['p-4'], classNames.body), style: {
                                            padding: '24px',
                                            ...styles.body,
                                        }, children: _jsx("div", { className: cn(s['flex'], s['w-full']), children: typeof message === 'string' ? (_jsx("span", { style: {
                                                    color: '#475569',
                                                    fontSize: '15px',
                                                    lineHeight: 1.6,
                                                }, children: message })) : (message) }) }), _jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-end'], s['p-4'], s['border-t'], s['border-solid'], s['border-gray-300'], classNames.footer), style: {
                                            borderBottomLeftRadius: '16px',
                                            borderBottomRightRadius: '16px',
                                            backgroundColor: '#f8fafc',
                                            gap: '12px',
                                            flexWrap: 'wrap',
                                            ...styles.footer,
                                        }, children: [isClose && (_jsx("button", { className: cn(classNames.cancelButton), type: "button", style: {
                                                    backgroundColor: '#e2e8f0',
                                                    color: '#475569',
                                                    fontWeight: 600,
                                                    fontSize: '14px',
                                                    padding: '10px 20px',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.15s ease',
                                                    minWidth: '100px',
                                                    ...styles.cancelButton,
                                                }, onMouseEnter: (e) => {
                                                    e.currentTarget.style.backgroundColor = '#cbd5e1';
                                                }, onMouseLeave: (e) => {
                                                    e.currentTarget.style.backgroundColor = '#e2e8f0';
                                                }, onClick: handleClose, children: closeTitle })), isClick && (_jsx("button", { className: cn(classNames.submitButton), type: "button", style: {
                                                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    fontSize: '14px',
                                                    padding: '10px 20px',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.15s ease',
                                                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                                                    minWidth: '100px',
                                                    ...styles.submitButton,
                                                }, onMouseEnter: (e) => {
                                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                                    e.currentTarget.style.boxShadow =
                                                        '0 6px 16px rgba(34, 197, 94, 0.4)';
                                                }, onMouseLeave: (e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow =
                                                        '0 4px 12px rgba(34, 197, 94, 0.3)';
                                                }, onClick: handleSubmit, children: submitTitle }))] })] }) }) })] })) }) }));
};
