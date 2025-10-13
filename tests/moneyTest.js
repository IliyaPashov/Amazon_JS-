import {formatCurrency} from '../scripts/utils/money.js';

console.log ('test suite:format ');
console.log('converting cents to dollars');
if (formatCurrency(2095) === '20.95') {
    console.log('passed');

} else {
    console.log('failed');
}

console.log('work with 0');
 
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}
console.log('rounging tests up to the nearest cent');
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
    console.log('failed');
}
    console.log ('verry good')
  if (formatCurrency(2000.4) === '20.0') {
  console.log('passed');
}else {
    console.log('failed');
} 

describe('test suite: Format curency', () => {
    it('converting cents to dollars', () => {
        expect(formatCurrency(2095)).toBe('20.95');
    });
});