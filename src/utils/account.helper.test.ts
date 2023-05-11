import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccount, removeAccount } from './account.helper';

const itemData = {
    key: 'account',
    value: {
        phoneNumber: '0123456789',
    },
};

describe('asyncStorage', () => {
    beforeAll(async () => {
        const jsonValue1 = JSON.stringify(itemData.value);
        await AsyncStorage.setItem(itemData.key, jsonValue1);
    });
    test('asyncStorage trả về boolean', async () => {
        const res = await getAccount();
        expect(res).toStrictEqual(itemData.value);
    });
    test('remove storage ', async () => {
        await removeAccount();
        const res = await getAccount();

        expect(res).toStrictEqual(null);
    });
});
