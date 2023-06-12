import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {GlobalStyles} from '../../../constants';
import FieldInput from '../../../components/FieldInput';
import moment from "moment";

const TicketSubscribeDetails = ({locationDetail, number, setNumber}: any) => {

  const getCurrentDay = () => {
    return moment(new Date()).format('DD/MM/YYYY');
  }

  const getAdditionDay = (x: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + x);
    return moment(date).format('DD/MM/YYYY');
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Giá vé : <Text style={styles.price}>{locationDetail.monthTicket}</Text>
        </Text>
        <Text style={styles.title}>Số tháng đăng ký:</Text>
        <FieldInput
            setValue={setNumber}
            onChange={setNumber}
            value={number}
            placeHolder="Nhập số tháng muốn đăng ký"
            keyboardType="numeric"
        />
        {!isNaN(parseInt(number)) && <View style={styles.dateWrapper}>
          <Text style={styles.title}>Thời hạn sử dụng: {parseInt(number)} tháng</Text>
          <Text style={styles.info}>
            Từ ngày <Text style={styles.date}>{getCurrentDay()}</Text> đến hết ngày {' '}
            <Text style={styles.date}>{getAdditionDay(parseInt(number))}</Text>.
          </Text>
        </View>}
      </View>
  );
};

export default TicketSubscribeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 12,
  },
  price: {
    color: GlobalStyles.colors.primaryOrange,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dateWrapper: {
    marginTop: 12,
  },
  info: {
    fontSize: 16,
  },
  date: {
    fontWeight: '700',
  },
  buttonContainer: {},
});
