/* eslint-disable unicorn/prefer-math-trunc */
import * as _ from 'lodash';
export function uuidv4(len) {
    return _.repeat('x', len).replace(/[xy]/g, function (c) {
        const r = (Math.random() * len) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(len);
    });
}
