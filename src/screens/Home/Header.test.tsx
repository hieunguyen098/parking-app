import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HeaderSearchInput from './components/HeaderSearchInput';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from '../../../store';
test('test header search input', () => {
    const component = (
        <Provider store={store}>
            <NavigationContainer>
                <Header />
            </NavigationContainer>
        </Provider>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
