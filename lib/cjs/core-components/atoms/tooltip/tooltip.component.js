"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const react_1 = __importDefault(require("react"));
const Material = __importStar(require("@mui/material"));
const Tooltip = ({ tooltipText, position = 'bottom-start', children, }) => {
    const positionRef = react_1.default.useRef({
        x: 0,
        y: 0,
    });
    const popperRef = react_1.default.useRef(null);
    const areaRef = react_1.default.useRef(null);
    const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };
    return (react_1.default.createElement(Material.Tooltip, { title: tooltipText, placement: "bottom-start", arrow: true, PopperProps: {
            popperRef,
            anchorEl: {
                getBoundingClientRect: () => {
                    return new DOMRect(positionRef.current.x, areaRef.current.getBoundingClientRect().y + 22, 0, 0);
                },
            },
        } },
        react_1.default.createElement(Material.Box, { ref: areaRef, onMouseMove: handleMouseMove }, children)));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=tooltip.component.js.map