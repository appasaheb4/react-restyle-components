// import { useId as useReachId } from '@reach/auto-id';
import { useId as useReactId } from 'react';
const PREFIX = 'tech-abl-ui';
export const useId = (prefix, id) => {
    const randId = `${PREFIX}-${prefix}-${useReactId()}`;
    return id ?? randId;
};
