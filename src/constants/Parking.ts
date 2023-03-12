export enum ParkingMethodId {
    GET_CHECKIN_PARKING_QR = 'get_checkin_parking_qr',
    GET_VEHICLE_IS_PARKING = 'get_vehicles',
    GET_VEHICLE_DETAIL = 'get_vehicle',
    GET_VOUCHERS = 'get_vouchers',
    GET_CHECKOUT_PARKING_QR = 'get_checkout_parking_qr',
}

export enum QRType {
    CHECK_IN = 'check_in',
    CHECK_OUT = 'check_out',
}

export const TIMEOUT_REFRESH_QR = 60 * 1000;
