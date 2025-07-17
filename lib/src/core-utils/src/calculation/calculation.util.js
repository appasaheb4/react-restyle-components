/**
 * Maps the changed AmountKey to the correct AmountMode.
 * You can adjust this mapping as per your business logic.
 */
function getAmountModeByKey(key) {
    switch (key) {
        case 'grossAmount':
            return 'gross-net';
        case 'netAmount':
            return 'gross-net';
        case 'discountedAmount':
            return 'gross-discounted';
        case 'discountPercent':
            return 'gross-discountPercent';
        default:
            return 'gross-net';
    }
}
/**
 * Calculates all amount fields based on the last changed key.
 * @param amounts The amounts object.
 * @param changedKey The key that was last changed.
 */
export function calculateAmount(amounts, changedKey) {
    const mode = getAmountModeByKey(changedKey);
    return calculateAmountByKey(amounts, mode);
}
export const calculateAmountByKey = (amounts, mode) => {
    const { grossAmount, netAmount, discountedAmount, discountPercent } = amounts;
    switch (mode) {
        case 'gross-discountPercent': {
            const discountedAmountCalc = (grossAmount * discountPercent) / 100;
            const netAmountCalc = grossAmount - discountedAmountCalc;
            return {
                grossAmount: Number(grossAmount?.toFixed(2)),
                netAmount: Number(netAmountCalc?.toFixed(2)),
                discountedAmount: Number(discountedAmountCalc?.toFixed(2)),
                discountPercent: Number(discountPercent?.toFixed(2)),
            };
        }
        case 'gross-net': {
            const discountedAmountCalc = grossAmount - netAmount;
            const discountPercentCalc = (discountedAmountCalc / grossAmount) * 100;
            return {
                grossAmount: Number(grossAmount?.toFixed(2)),
                netAmount: Number(netAmount?.toFixed(2)),
                discountedAmount: Number(discountedAmountCalc?.toFixed(2)),
                discountPercent: Number(discountPercentCalc?.toFixed(2)),
            };
        }
        case 'net-discountPercent': {
            const grossAmountCalc = netAmount / (1 - discountPercent / 100);
            const discountedAmountCalc = grossAmountCalc - netAmount;
            return {
                grossAmount: Number(grossAmountCalc?.toFixed(2)),
                netAmount: Number(netAmount?.toFixed(2)),
                discountedAmount: Number(discountedAmountCalc?.toFixed(2)),
                discountPercent: Number(discountPercent?.toFixed(2)),
            };
        }
        case 'gross-discounted': {
            const netAmountCalc = grossAmount - discountedAmount;
            const discountPercentCalc = (discountedAmount / grossAmount) * 100;
            return {
                grossAmount: Number(grossAmount?.toFixed(2)),
                netAmount: Number(netAmountCalc?.toFixed(2)),
                discountedAmount: Number(discountedAmount?.toFixed(2)),
                discountPercent: Number(discountPercentCalc?.toFixed(2)),
            };
        }
        case 'net-discounted': {
            const grossAmountCalc = netAmount + discountedAmount;
            const discountPercentCalc = (discountedAmount / grossAmountCalc) * 100;
            return {
                grossAmount: Number(grossAmountCalc?.toFixed(2)),
                netAmount: Number(netAmount?.toFixed(2)),
                discountedAmount: Number(discountedAmount?.toFixed(2)),
                discountPercent: Number(discountPercentCalc?.toFixed(2)),
            };
        }
        default:
            return {
                grossAmount,
                netAmount,
                discountedAmount,
                discountPercent,
            };
    }
};
