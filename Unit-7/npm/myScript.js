//import { compareAsc, format } from 'date-fns';
const {format} = require('date-fns');

const myFormat = format(new Date(2014, 1, 11), 'yyyy-MM-dd');
console.log(myFormat);