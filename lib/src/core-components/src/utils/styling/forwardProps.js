import isPropValid from '@emotion/is-prop-valid';
// from styled-components docs: https://styled-components.com/docs/faqs#shouldforwardprop-is-no-longer-provided-by-default
export const dontForwardProps = () => ({
    shouldForwardProp: (propName, target) => {
        if (typeof target === 'string') {
            return isPropValid(propName);
        }
        return true;
    },
});
