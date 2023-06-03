export enum PaymentMethod {
    ZALOPAY = 'ZALOPAY',
    MOMO = 'MOMO',
    VNPAY = 'VNPAY',
}
export const ACCEPTED_METHOD = [
    {
        id: 0,
        name: 'MoMo',
        key: PaymentMethod.MOMO,
    },
    {
        id: 1,
        name: 'VNPay',
        key: PaymentMethod.VNPAY,
    },
    {
        id: 2,
        name: 'ZaloPay',
        key: PaymentMethod.ZALOPAY,
    },
];
