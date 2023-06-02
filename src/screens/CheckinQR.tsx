import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {GlobalStyles, QRType} from '../constants';
import {LinearGradient} from 'expo-linear-gradient';
import Line from '../components/Line';
import QrCode from '../components/QrCode';
import {useFocusEffect, useIsFocused, useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import socket, {joinRoom, leaveRoom, setStatus} from "../services/socket/qr_status_socket";

const Qr = () => {
  const navigation: any = useNavigation();
  const user = useSelector((state: any) => state.auth.user);
  const [roomId, setRoomId] = useState(user.phone + "_" + Date.now().toString())

  const [
    qrStatusSocket,
    setQrStatusSocket
  ] = useState(socket)

  const navHome = (status: any, message: any) => {
    Alert.alert("Đỗ xe", statusState.statusMessage)
    navigation.navigate('Home', {
      showNotify: true,
      notifyCode: status? status.toString(): "",
      notifyMessage: message? message.toString(): "",
    })
  }

  const [
    statusState,
    setStatusState
  ] = useState({
    status: undefined,
    statusMessage: undefined
  })

  const isFocused = useIsFocused();

  useFocusEffect(
      useCallback(() => {
        if (isFocused) {
          console.log("vào trang")
        } else {
          console.log("rời trang")
          leaveRoom(roomId)
          setRoomId("")
          setStatusState({
            status: undefined,
            statusMessage: undefined
          })
        }
      }, [isFocused])
  )

  useFocusEffect(
      useCallback(() => {
        if (roomId != "") {
          console.log("mã phòng", roomId)
          qrStatusSocket.connect()
          setTimeout(() => {
            joinRoom(roomId)
          }, 1000)
          setStatus(setStatusState, roomId)
        }
      }, [roomId])
  )

  useFocusEffect(
      useCallback(() => {
        console.log("state", statusState)
        if (statusState.status == 1) {
          navHome(statusState.status, statusState.statusMessage)
        }
      }, [statusState])
  )

  return (
      <LinearGradient
          colors={[GlobalStyles.colors.primaryOrange, GlobalStyles.colors.primaryOrange50]}
          style={styles.container}
          start={[0.5, 0]}
          end={[0.5, 1]}
      >
        <View style={styles.qrContainer}>
          <QrCode qrType={QRType.CHECK_IN} socketKey={roomId}/>
          <Line borderStyle="dashed" color={GlobalStyles.colors.lightGrey}/>
          <Text style={styles.title}>Quét mã để gửi xe</Text>
        </View>
      </LinearGradient>
  );
};

export default Qr;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primaryOrange,
    flex: 1,
    padding: 20,
  },
  qrContainer: {
    backgroundColor: '#fff',
    borderRadius: 22,
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: GlobalStyles.colors.primaryOrange,
  },
});
