import { StyleSheet, Platform } from 'react-native';
import { GlobalStyles } from '../../../../constants/style';

export const CELL_SIZE = 10;
export const CELL_BORDER_RADIUS = 100;
export const DEFAULT_CELL_BG_COLOR = '#d9d9d9';
export const NOT_EMPTY_CELL_BG_COLOR = '#fff';
export const ACTIVE_CELL_BG_COLOR = GlobalStyles.colors.secondary;

const styles = StyleSheet.create({
    codeFiledRoot: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: GlobalStyles.colors.veryLightGrey,
        borderRadius: 20,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.veryLightGrey,
    },
    codeFiledRootTargeted: {
        backgroundColor: GlobalStyles.colors.lightOrange,
        borderColor: GlobalStyles.colors.primaryOrange,
    },
    cell: {
        marginHorizontal: 8,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        fontSize: 0,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default styles;
