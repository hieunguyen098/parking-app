import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAccount = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('account');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log('Lỗi storage');
    }
};

export const removeAccount = async () => {
    try {
        await AsyncStorage.removeItem('account');
    } catch (e) {
        console.log('Lỗi storage');
    }
};
