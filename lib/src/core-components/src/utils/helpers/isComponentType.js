"use strict";import i from"react";export const isComponentType=(t,r)=>i.isValidElement(t)?t.type===r||t.type.target===r:!1;
