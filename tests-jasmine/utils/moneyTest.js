import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: Format curency', () => {
    it('converting cents to dollars', () => {
        expect(formatCurrency(2095)).toBe('20.95');
    });

    it('work with 0', () => {
        expect(formatCurrency(0)).toBe('0.00');
    });
    it ('rounging tets up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toBe('20.01');
    });
    it ('rounging tets down to the nearest cent', () => {
        expect(formatCurrency(2000.4)).toBe('20.00');
    });
});