import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/style';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
    },
    continueButton: {
        marginBottom: 24,
        borderRadius: 100,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    form: {
        width: '100%',
    },
    editAvatarBtn: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: GlobalStyles.colors.primaryOrange,
        padding: 5,
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    group: {
        width: '100%',
    },
    forgotPasswordBtn: {
        fontSize: 16,
        color: GlobalStyles.colors.primaryOrange,
        textAlign: 'center',
        marginTop: 10,
    },
    textCenter: {
        fontSize: 16,
        textAlign: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fingerprintContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    fingerprintBtn: { fontSize: 16, paddingLeft: 8 },
});

export default styles;
