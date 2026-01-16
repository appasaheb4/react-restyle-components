import * as _ from 'lodash';
export const debounce = _.debounce((fun) => {
    fun();
}, 1000);
export const calculateHoursDifference = (date1, date2) => {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffInMs / (1000 * 60 * 60));
};
export const calculateHoursDifferenceDecimal = (date1, date2) => {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return diffInMs / (1000 * 60 * 60);
};
