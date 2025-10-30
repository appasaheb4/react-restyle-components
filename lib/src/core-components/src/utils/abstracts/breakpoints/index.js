export var Size;
(function (Size) {
    Size[Size["SM"] = 375] = "SM";
    Size[Size["MD"] = 768] = "MD";
    Size[Size["MD2"] = 1024] = "MD2";
    Size[Size["LG"] = 1280] = "LG";
    Size[Size["XL"] = 1440] = "XL";
    Size[Size["XXL"] = 1920] = "XXL";
})(Size || (Size = {}));
export const breakpoints = {
    // For backward compatibility
    smMax: `max-width: 425px`,
    mdMin: `min-width: 426px`,
    lgMin: `min-width: 769px`,
    // Media queries for breakpoints
    xs: `@media (max-width: ${Size.SM - 1}px)`,
    sm: `@media (min-width: ${Size.SM}px)`,
    smOnly: `@media (min-width: ${Size.SM}px) and (max-width: ${Size.MD - 1}px)`,
    md: `@media (min-width: ${Size.MD}px)`,
    mdOnly: `@media (min-width: ${Size.MD}px) and (max-width: ${Size.LG - 1}px)`,
    md2: `@media (min-width: ${Size.MD2}px)`,
    md2Only: `@media (min-width: ${Size.MD2}px) and (max-width: ${Size.LG - 1}px)`,
    lg: `@media (min-width: ${Size.LG}px)`,
    lgOnly: `@media (min-width: ${Size.LG}px) and (max-width: ${Size.XL - 1}px)`,
    xl: `@media (min-width: ${Size.XL}px)`,
    xlOnly: `@media (min-width: ${Size.XL}px) and (max-width: ${Size.XXL - 1}px)`,
    xxl: `@media (min-width: ${Size.XXL}px)`,
};
