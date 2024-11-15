import React from "react";
import * as Material from "@mui/material";
import "../../../tc.css";
export const Tooltip = ({
  tooltipText,
  position = "bottom-start",
  children,
}) => {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);
  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };
    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  return React.createElement(
    Material.Tooltip,
    {
      title: tooltipText,
      placement: "bottom-start",
      arrow: true,
      PopperProps: {
        popperRef,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionRef.current.x,
              areaRef.current.getBoundingClientRect().y + 22,
              0,
              0,
            );
          },
        },
      },
    },
    React.createElement(
      Material.Box,
      { ref: areaRef, onMouseMove: handleMouseMove },
      children,
    ),
  );
};
