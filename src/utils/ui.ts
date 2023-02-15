import { Alert } from 'react-native';

export const onAlert = (title: string, description: string, onAccept: any) =>
    Alert.alert(title, description, [
        {
            text: 'Hủy',
            style: 'cancel',
        },
        { text: 'Xác nhận', onPress: () => onAccept() },
    ]);
