import { StyleSheet, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../../../components/Buttons/LargeButton';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles';
import FieldInput from '../../../components/FieldInput';
import DateInput from '../../../components/DateInput';
import Select from '../../../components/Select';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../../store/slices/authSlice';

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
    const dispatch = useDispatch();
    const nextStep = () => {
        dispatch(
            authActions.updateSignupForm({
                fullname,
                birthday,
                email,
                image_url,
                gender,
            }),
        );
        navigation.navigate('CreatePassword');
    };
    const [fullname, setFullname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [image_url, setImage_url] = useState('');
    const [gender, setGender] = useState(-1);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage_url(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage_url(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={takePhoto}>
                    <Image
                        source={image_url ? { uri: image_url } : require('../../../../assets/images/default-avt-0.png')}
                        style={styles.avatar}
                    />
                </Pressable>
                <Pressable style={styles.editAvatarBtn} onPress={pickImage}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../../../assets/images/edit-icon.png')}
                    />
                </Pressable>
            </View>
            <View style={styles.form}>
                <FieldInput
                    value={fullname}
                    setValue={setFullname}
                    placeHolder="Họ tên"
                    iconPosition="none"
                    keyboardType="text"
                />
                <DateInput
                    value={birthday}
                    
                    setValue={setBirthday}
                    placeHolder="Ngày sinh"
                    source={require('../../../../assets/images/calendar-icon.png')}
                    iconPosition="right"
                    keyboardType="text"
                />
                <FieldInput
                    value={email}
                    setValue={setEmail}
                    placeHolder="Email"
                    source={require('../../../../assets/images/mail-icon.png')}
                    iconPosition="right"
                    keyboardType="email-address"
                />
                <Select value={gender} setValue={setGender} data={genders} />
            </View>
            <LargeButton onPress={nextStep} title="Tiếp tục" style={styles.continueButton} />
        </View>
    );
};

export default SignUp;
