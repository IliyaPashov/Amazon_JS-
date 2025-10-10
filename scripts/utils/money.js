export function formatCurrency(priceCents) {
    return (Meth.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;