import { validatePhoneNumber } from './validation';
describe('validatePhoneNumber', () => {
    test('validatePhoneNumber trả về boolean', () => {
        expect(validatePhoneNumber('0783210873')).toBe(true);
        expect(validatePhoneNumber('078321087a')).toBe(false);
    });
});
