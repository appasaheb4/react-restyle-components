import { calculateAmount } from './calculation.util';
describe('calculateAmount', () => {
    it('should calculate net and discounted amount from grossAmount and discountPercent', () => {
        const result = calculateAmount({
            grossAmount: 200,
            netAmount: 0,
            discountedAmount: 0,
            discountPercent: 10,
        }, 'discountPercent');
        expect(result.grossAmount).toBe(200);
        expect(result.discountedAmount).toBe(20);
        expect(result.netAmount).toBe(180);
        expect(result.discountPercent).toBe(10);
    });
    it('should calculate discountedAmount and discountPercent from grossAmount and netAmount', () => {
        const result = calculateAmount({
            grossAmount: 200,
            netAmount: 180,
            discountedAmount: 0,
            discountPercent: 0,
        }, 'netAmount');
        expect(result.grossAmount).toBe(200);
        expect(result.discountedAmount).toBe(20);
        expect(result.netAmount).toBe(180);
        expect(result.discountPercent).toBe(10);
    });
    it('should calculate netAmount and discountPercent from grossAmount and discountedAmount', () => {
        const result = calculateAmount({
            grossAmount: 200,
            netAmount: 0,
            discountedAmount: 20,
            discountPercent: 0,
        }, 'discountedAmount');
        expect(result.grossAmount).toBe(200);
        expect(result.discountedAmount).toBe(20);
        expect(result.netAmount).toBe(180);
        expect(result.discountPercent).toBe(10);
    });
    it('should calculate grossAmount and discountedAmount from netAmount and discountPercent', () => {
        const result = calculateAmount({
            grossAmount: 0,
            netAmount: 180,
            discountedAmount: 0,
            discountPercent: 10,
        }, 'discountPercent');
        // This will use 'gross-discountPercent' mode, but grossAmount is 0, so all will be 0
        expect(result.grossAmount).toBe(0);
        expect(result.discountedAmount).toBe(0);
        expect(result.netAmount).toBe(0);
        expect(result.discountPercent).toBe(10);
    });
});
