import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import OfferItem from './components/OfferItem';

test('test offer item', () => {
    const component = (
        <NavigationContainer>
            <OfferItem
                item={{
                    image: 'https://hostingviet.vn/data/tinymce/tin%20tuc%202019/voucher-la-gi.jpg',
                    title: 'Nhận ngay vouher giảm giá lên tới 50%',
                }}
            />
        </NavigationContainer>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
