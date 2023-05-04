import { View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../../../components/Buttons/LargeButton';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles';
import FieldInput from '../../../components/FieldInput';
import DateInput from '../../../components/DateInput';
import Select from '../../../components/Select';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../../store/slices/authSlice';
import { storage } from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const genders = [
    {
        id: 0,
        label: 'Nam',
        value: 'Male',
    },
    {
        id: 1,
        label: 'Nữ',
        value: 'Female',
    },
    {
        id: 2,
        label: 'Khác',
        value: 'Indefinite',
    },
];

const SignUp = () => {
    const navigation: any = useNavigation();
    const dispatch = useDispatch();
    const nextStep = async () => {
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
    const user = useSelector((state: any) => state.auth.user);
    const [fullname, setFullname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [gender, setGender] = useState(genders[0].value);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        await handleImagePicked(result);
    };

    const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        await handleImagePicked(result);
    };

    const handleImagePicked = async (pickerResult: any) => {
        try {
            console.log('Uploading');
            if (!pickerResult.canceled) {
                await uploadImageAsync(pickerResult.assets[0].uri);
            }
        } catch (e) {
            console.log(e);
            alert('Upload failed, sorry :(');
        } finally {
            console.log('Uploaded');
        }
    };

    async function uploadImageAsync(uri: string) {
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });

        const fileRef = ref(storage, `avatar/${Date.now()}-${user.phone}`);
        // @ts-ignore
        await uploadBytes(fileRef, blob).then(async (snapshot) => {
            console.log('Uploaded a blob or file!');
            await getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setImageUrl(downloadURL);
            });
        });

        // We're done with the blob, close and release it
        // @ts-ignore
        blob.close();
    }

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
