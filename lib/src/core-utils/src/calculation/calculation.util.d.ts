type Amounts = {
    grossAmount: number;
    netAmount: number;
    discountedAmount: number;
    discountPercent: number;
};
type AmountKey = 'grossAmount' | 'netAmount' | 'discountedAmount' | 'discountPercent';
type AmountMode = 'gross-net' | 'gross-discountPercent' | 'net-discountPercent' | 'gross-discounted' | 'net-discounted';
/**
 * Calculates all amount fields based on the last changed key.
 * @param amounts The amounts object.
 * @param changedKey The key that was last changed.
 */
export declare function calculateAmount(amounts: Amounts, changedKey: AmountKey): {
    grossAmount: number;
    netAmount: number;
    discountedAmount: number;
    discountPercent: number;
};
export declare const calculateAmountByKey: (amounts: Amounts, mode: AmountMode) => {
    grossAmount: number;
    netAmount: number;
    discountedAmount: number;
    discountPercent: number;
};
export {};
