import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HistoryList from './components/HistoryList';

test('test histoy item', () => {
    const component = (
        <NavigationContainer>
            <HistoryList />
        </NavigationContainer>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
