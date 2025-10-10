export const deliveryOptions = [{
    id: '1',
    deliryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) =>  {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    }); 
    
    return deliveryOption || deliveryOptions[0];
}