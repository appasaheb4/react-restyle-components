"use strict";import e from"react";import{isComponentType as i}from"./isComponentType";export const getChildByType=(o,r)=>e.Children.toArray(o).find(t=>i(t,r));
