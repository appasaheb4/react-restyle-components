/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState, useImperativeHandle } from 'react';
import { TimerSVG } from '../../../library/assets/svg';
import '../../../tc.module.css';
// eslint-disable-next-line react/display-name
export const Timer = React.forwardRef(({ onClear }, ref) => {
    const width = 15;
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('10');
    useEffect(() => {
        const sec = parseInt(second);
        const min = parseInt(minute);
        const countDown = setInterval(() => {
            if (min === 0 && sec === 0) {
                setMinute('00');
                setSecond('00');
                clearInterval(countDown);
                onClear && onClear();
            }
            else {
                let secondstTmp = (sec - 1).toString();
                if (secondstTmp.length === 1) {
                    secondstTmp = '0'.concat(secondstTmp);
                }
                setSecond(secondstTmp);
                if (sec === 0) {
                    setSecond('59');
                    const m = (min - 1).toString();
                    setMinute('0' + m);
                }
            }
        }, 1000);
        return () => {
            clearInterval(countDown);
        };
    });
    useImperativeHandle(ref, () => ({
        updateState() {
            setMinute('02');
            setSecond('00');
        },
        resetTimer() {
            // eslint-disable-next-line no-console
            const sec = parseInt(second);
            const min = parseInt(minute === '00' ? '02' : minute);
            const countDown = setInterval(() => {
                // eslint-disable-next-line no-console
                if (min === 0 && sec === 0) {
                    setMinute('00');
                    setSecond('00');
                    clearInterval(countDown);
                    onClear && onClear();
                }
                else {
                    let secondstTmp = (sec - 1).toString();
                    if (secondstTmp.length === 1) {
                        secondstTmp = '0'.concat(secondstTmp);
                    }
                    setSecond(secondstTmp);
                    if (sec === 0) {
                        setSecond('59');
                        const m = (min - 1).toString();
                        setMinute('0' + m);
                    }
                }
            }, 1000);
            return () => {
                clearInterval(countDown);
            };
        },
    }));
    return (React.createElement("div", { className: "flex flex-row items-center" },
        React.createElement(TimerSVG, { width: width, height: width, fill: "#E7503D" }),
        React.createElement("div", { className: "ml-2 flex flex-row" },
            React.createElement("span", null,
                minute,
                ":"),
            React.createElement("span", null, second))));
});
