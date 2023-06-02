import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import LargeButton from '../components/Buttons/LargeButton';
import { GlobalStyles } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { generalActions } from '../../store/slices/generalSlice';

const PopupStatus = ({ isSuccess, title, description }: { isSuccess: boolean; title: string; description: string }) => {
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(generalActions.hideAlert());
    };
    const alert = useSelector((state: any) => state.general.alert);

    return (
        <Modal isVisible={alert.show}>
            <View style={styles.centeredView}>
                <Image
                    source={
                        alert.isSuccess
                            ? require('../../assets/images/success_logo.png')
                            : require('../../assets/images/error_logo.png')
                    }
                    style={styles.image}
                />
                <Text style={styles.title}>{alert.title}</Text>
                <Text style={styles.description}>{alert.description}</Text>
                <LargeButton title="Xác nhận" onPress={toggleModal} />
            </View>
        </Modal>
    );
};

export default PopupStatus;

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 40,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: GlobalStyles.colors.primaryOrange,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
    },
});
