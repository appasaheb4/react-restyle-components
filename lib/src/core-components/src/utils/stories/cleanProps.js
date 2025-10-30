export function cleanProps(object) {
    return Object.entries(object)
        .filter(([, val]) => val !== undefined)
        .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
}
