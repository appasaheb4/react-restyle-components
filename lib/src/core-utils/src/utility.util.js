import * as _ from 'lodash';
export const debounce = _.debounce((fun) => {
    fun();
}, 1000);
