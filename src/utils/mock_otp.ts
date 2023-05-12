import { Alert } from 'react-native';

export const otpSMS = (title: string, description: string, onAccept: any) =>
    Alert.alert(title, description, [
      { text: 'Xác nhận',
        onPress: () => onAccept()
      },
    ]);
