const isEmpty = (xs) => xs.length === 0;
const take = (n) => (xs) => xs.slice(0, n);
const drop = (n) => (xs) => xs.slice(n);
const chunk = (n) => (xs) => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
/**
 * Converts a number to words using the Indian numbering system (supports lakh, crore, arab, etc.).
 */
export const numToWords = (n) => {
    const a = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const b = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    const g = [
        '',
        'thousand',
        'lakh',
        'crore',
        'arab',
        'kharab',
        'neel',
        'padma',
        'shankh',
    ];
    // Plural forms for units
    const gPlural = [
        '',
        'thousand',
        'lakhs',
        'crores',
        'arabs',
        'kharabs',
        'neels',
        'padmas',
        'shankhs',
    ];
    if (typeof n === 'number')
        n = String(n);
    if (n === '0')
        return 'zero';
    // Indian chunking: last 3 digits, then every 2 digits
    const chunkIndian = (xs) => {
        if (xs.length <= 3)
            return [xs];
        const last3 = xs.slice(xs.length - 3);
        const rest = xs.slice(0, xs.length - 3);
        const pairs = [];
        while (rest.length > 0) {
            pairs.unshift(rest.splice(-2));
        }
        return [...pairs, last3];
    };
    // Convert a group (1 or 2 or 3 digits) to words
    const groupToWords = (group) => {
        let numVal = Number(group.join(''));
        if (numVal === 0)
            return '';
        if (group.length === 3) {
            // 3 digits: hundreds
            let [h, t, o] = group.map(Number);
            let str = '';
            if (h)
                str += a[h] + ' hundred ';
            let lastTwo = t * 10 + o;
            if (lastTwo) {
                if (str)
                    str += 'and ';
                if (lastTwo < 20)
                    str += a[lastTwo];
                else
                    str += b[t] + (o ? '-' + a[o] : '');
            }
            return str.trim();
        }
        else if (group.length === 2) {
            // 2 digits
            let [t, o] = group.map(Number);
            if (t === 0)
                return a[o];
            if (t * 10 + o < 20)
                return a[t * 10 + o];
            return b[t] + (o ? '-' + a[o] : '');
        }
        else if (group.length === 1) {
            return a[Number(group[0])];
        }
        return '';
    };
    const digits = Array.from(n);
    const groups = chunkIndian(digits);
    const words = groups
        .map((group, i, arr) => {
        // Only pad the last group (units) to 3 digits, others to 2
        if (i === arr.length - 1) {
            while (group.length < 3)
                group.unshift('0');
        }
        else {
            while (group.length < 2)
                group.unshift('0');
        }
        return groupToWords(group);
    })
        .map((word, i, arr) => {
        const unitIdx = arr.length - 1 - i;
        // Use plural for units if value > 1 and unit is not ''
        const groupValue = Number(groups[i].join(''));
        const unit = groupValue > 1 && g[unitIdx] ? gPlural[unitIdx] : g[unitIdx];
        return word ? `${word} ${unit}`.trim() : '';
    })
        .filter(Boolean)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
    return words;
};
