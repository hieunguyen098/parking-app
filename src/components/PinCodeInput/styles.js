import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/style';

export const CELL_SIZE = 50;
export const CELL_BORDER_RADIUS = 10;
export const DEFAULT_CELL_BG_COLOR = GlobalStyles.colors.veryLightGrey;
export const NOT_EMPTY_CELL_BG_COLOR = '#fff';
export const ACTIVE_CELL_BG_COLOR = GlobalStyles.colors.veryLightGrey;

const styles = StyleSheet.create({
    codeFiledRoot: {
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    cell: {
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: GlobalStyles.colors.lightGrey,
        borderRadius: CELL_BORDER_RADIUS,
    },
    focusCell: {
        borderColor: '#000',
    },
    alert: {
        color: GlobalStyles.colors.lightRed,
        marginBottom: 10,
    },
});

export default styles;
