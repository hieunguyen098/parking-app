import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import FieldInput from '../../components/FieldInput';
import DateInput from '../../components/DateInput';
import Select from '../../components/Select';
import BottomButton from '../../components/Buttons/BottomButton';
import { useQuery, useQueryClient } from 'react-query';
import { useFocusEffect } from '@react-navigation/native';
import { getUser } from '../../services/user.api';

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

const EditProfile = () => {
    const [fullname, setFullname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState(-1);
    const queryClient = useQueryClient();
    const {
        data: userInfo,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => {
            return getUser();
        },
        retry: false,
        select: (data) => (data.data ? data.data[0] : null),
        onSuccess: (data) => {
            setFullname(data.name);
            setBirthday(data.birthDay);
            setEmail(data.email);
            setGender(data.gender);
        },
    });
    useFocusEffect(
        React.useCallback(() => {
            queryClient.invalidateQueries('userInfo');
        }, []),
    );

    const updateProfile = () => {
        console.log(birthday);
    };
    return (
        <>
            <View style={styles.container}>
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
                    source={require('../../../assets/images/calendar-icon.png')}
                    iconPosition="right"
                    keyboardType="text"
                />
                <FieldInput
                    value={email}
                    setValue={setEmail}
                    placeHolder="Email"
                    source={require('../../../assets/images/mail-icon.png')}
                    iconPosition="right"
                    keyboardType="email-address"
                />
                <Select value={gender} setValue={setGender} data={genders} />
            </View>
            <BottomButton title="Cập nhật" onPress={updateProfile} />
        </>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
});
