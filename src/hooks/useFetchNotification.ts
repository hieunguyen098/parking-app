import React, { useEffect, useState } from 'react';
import { getNotifications, getOldNotifications } from '../services/notification.api';

export function useFetchNotification(type: string) {
    const [loading, setLoading] = useState(false);
    const [notifications, setNotifications] = useState<any[]>([]);
    const getAllNotification = async () => {
        setLoading(true);
        const data = await getNotifications(type);
        setNotifications(data.data);
        setLoading(false);
    };
    const lazyLoad = async () => {
        setLoading(true);
        const data = await getOldNotifications(type);
        setNotifications([...notifications, ...data.data]);
        setLoading(false);
    };
    useEffect(() => {
        getAllNotification().then();
    }, []);

    return [loading, notifications, lazyLoad];
}
