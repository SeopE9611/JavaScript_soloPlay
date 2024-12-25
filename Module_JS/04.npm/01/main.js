// main.mjs

import { format }  from 'date-fns';
import { add } from './calculator.js';

const dateString = format(new Date(2024,12,24), 'MM/dd/yyyy')

console.log(dateString);
console.log(add(1,2));
