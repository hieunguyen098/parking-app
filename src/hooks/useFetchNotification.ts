import React, { useEffect, useState } from 'react';
import { getNotifications, getOldNotifications } from '../services/notification.api';
import {useSelector} from "react-redux";

export function useFetchNotification(type: string) {
    const user = useSelector((state: any) => state.auth.user);

    const [loading, setLoading] = useState(false);
    const [notifications, setNotifications] = useState<any[]>([]);
    const getAllNotification = async () => {
        setLoading(true);
        const data = await getNotifications(user.phone, type);
        // @ts-ignore
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
