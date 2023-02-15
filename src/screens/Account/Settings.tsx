import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../../constants/style';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation: any = useNavigation();
    const [isEnabledFingerprint, setIsEnabledFingerprint] = useState(false);
    const [isEnabledFace, setIsEnabledFace] = useState(false);
    const toggleSwitchFingerprint = () => setIsEnabledFingerprint((previousState) => !previousState);
    const toggleSwitchFace = () => setIsEnabledFace((previousState) => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.listButton}>
                <Pressable
                    onPress={() => navigation.navigate('ChangePassword')}
                    style={styles.button}
                    android_ripple={{ color: GlobalStyles.colors.lightGrey100 }}
                >
                    <Text style={styles.text}>Đổi mật khẩu</Text>
                </Pressable>
                <View style={styles.toggleButton}>
                    <Text style={styles.text}>Xác thực vân tay</Text>
                    <Switch
                        trackColor={{
                            false: GlobalStyles.colors.lightGrey100,
                            true: GlobalStyles.colors.primaryOrange,
                        }}
                        style={{ padding: 0 }}
                        thumbColor={isEnabledFingerprint ? '#fff' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchFingerprint}
                        value={isEnabledFingerprint}
                    />
                </View>
                <View style={styles.toggleButton}>
                    <Text style={styles.text}>Xác thực khuôn mặt</Text>
                    <Switch
                        trackColor={{
                            false: GlobalStyles.colors.lightGrey100,
                            true: GlobalStyles.colors.primaryOrange,
                        }}
                        thumbColor={isEnabledFace ? '#fff' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchFace}
                        value={!isEnabledFace}
                    />
                </View>
            </View>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    listButton: {
        backgroundColor: '#fff',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 18,
    },
    text: {
        fontSize: 18,
    },
    toggleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
});
