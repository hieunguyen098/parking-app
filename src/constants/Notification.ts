export const LIMIT_NUMBER_OLD_NOTIFICATION = 15;

export enum NotificationMethodId {
    GET_NOTIFICATIONS = 'get-notifications',
    GET_NEW_NOTIFICATIONS = 'get_new_notifications',
    GET_OLD_NOTIFICATIONS = 'get_old_notifications',
}

export enum NotificationType {
    ALL = 'ALL',
    PARKING = 'PARKING',
    REQUEST = 'REQUEST',
    MONTH_TICKET = 'MONTH_TICKET',
}


export const MAX_TIME_DISPLAY = 90;
export const TIME_DISPLAY_SUCCESS = 3;
export const TIME_DISPLAY_ERROR = 3;

export enum NotifType {
    LOADING,
    FAILED,
    SUCCESS,
    RETRY,
    LICENSE_FAILED,
    QR_FAILED,
}

export enum NotifMessage {
    LOADING = 'Vui lòng chờ trong giây lát',
    FAILED = 'Có lỗi xảy ra, vui lòng quét lại',
    SUCCESS = 'Thành công',
    RETRY = 'D1t m3 m4y ngu vua thoi, đưa xe vô vị trí',
    LICENSE_FAILED = 'Djt m3 may cướp xe à',
    QR_FAILED = 'Đéo biết lỗi gì, quét lại',
}

