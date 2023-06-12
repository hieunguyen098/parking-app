export enum ParkingMethodId {
    GET_CHECKIN_PARKING_QR = 'check-in',
    GET_CHECKOUT_PARKING_QR = 'check-out',
    GET_VEHICLE_IS_PARKING = 'get-vehicles',
    GET_VEHICLE_DETAIL = 'get-vehicle',
    GET_VOUCHERS = 'get-vouchers',
    ASSIGN_PARKING = 'assign-parking',
}

export enum QRType {
    CHECK_IN = 'check_in',
    CHECK_OUT = 'check_out',
}

export const TIMEOUT_REFRESH_QR = 60 * 1000;
