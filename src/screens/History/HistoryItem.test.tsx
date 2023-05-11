import React from 'react';
import HistoryItem from './components/HistoryItem';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

// test('renders home', () => {

//     const tree = renderer.create(

//         <HistoryItem item={{
//             id: '15',
//             type: 'parking',
//             title: 'Thanh toán phí gửi xe',
//             place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
//             time: '17:05 - 27/11/2022',
//             price: '-2.000đ',
//         }} />
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });

test('test histoy item', () => {
    const component = (
        <NavigationContainer>
            <HistoryItem
                item={{
                    id: '15',
                    type: 'parking',
                    title: 'Thanh toán phí gửi xe',
                    place: 'Nhà xe Trường Đại học Bách Khoa Tp.HCM',
                    time: '17:05 - 27/11/2022',
                    price: '-2.000đ',
                }}
            />
        </NavigationContainer>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
