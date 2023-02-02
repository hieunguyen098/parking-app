import { StyleSheet, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../../components/Buttons/LargeButton';
import FieldInput from './components/FieldInput';
import DateInput from './components/DateInput';
import Select from './components/Select';
import * as ImagePicker from 'expo-image-picker';
import { GlobalStyles } from '../../constants/style';

const genders = [
    {
        id: 0,
        label: 'Nam',
        value: 1,
    },
    {
        id: 1,
        label: 'Nữ',
        value: 0,
    },
    {
        id: 2,
        label: 'Khác',
        value: -1,
    },
];
const SignUp = () => {
    const navigation: any = useNavigation();
    const nextStep = () => {
        navigation.navigate('CreatePassword');
    };
    const [image, setImage] = useState('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={takePhoto}>
                    <Image
                        source={image ? { uri: image } : require('../../../assets/images/default-avt-0.png')}
                        style={styles.avatar}
                    />
                </Pressable>
                <Pressable style={styles.editAvatarBtn} onPress={pickImage}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../../assets/images/edit-icon.png')}
                    />
                </Pressable>
            </View>
            <View style={styles.form}>
                <FieldInput placeHolder="Họ tên" iconPosition="none" keyboardType="text" />
                <DateInput
                    placeHolder="Ngày sinh"
                    source={require('../../../assets/images/calendar-icon.png')}
                    iconPosition="right"
                    keyboardType="text"
                />
                <FieldInput
                    placeHolder="Email"
                    source={require('../../../assets/images/mail-icon.png')}
                    iconPosition="right"
                    keyboardType="email-address"
                />
                <Select data={genders} />
            </View>
            <LargeButton onPress={nextStep} type="primary" title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    continueButton: {
        marginBottom: 24,
        borderRadius: 100,
    },
    avatar: {
        width: 200,
        height: 200,
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
        width: 40,
        height: 40,
        borderRadius: 5,
    },
});
