import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ParkingTicketPrice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <View style={styles.emptyItem}></View>
        <View style={styles.labelItem}><Text style={styles.labelText}>Giá bắt đầu</Text></View>
        <View style={styles.labelItem}><Text style={styles.labelText}>Giá phụ thu</Text></View>
      </View>
      <View style={styles.dayContainer}>
        <View style={styles.emptyItem}><Text>T2</Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Trong 4h đầu: <Text style={styles.priceText}>2.000 VND</Text> </Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Sau 4h đầu:  <Text style={styles.additionalPriceText}>2.000 VND/h </Text></Text></View>
      </View>
      <View style={styles.dayContainer}>
        <View style={styles.emptyItem}><Text>T3</Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Trong 4h đầu: <Text style={styles.priceText}>2.000 VND</Text> </Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Sau 4h đầu : <Text style={styles.additionalPriceText}>2.000 VND/h </Text> </Text></View>
      </View><View style={styles.dayContainer}>
        <View style={styles.emptyItem}><Text>T4</Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Trong 4h đầu: <Text style={styles.priceText}>2.000 VND</Text> </Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Sau 4h đầu : <Text style={styles.additionalPriceText}>2.000 VND/h </Text> </Text></View>
      </View><View style={styles.dayContainer}>
        <View style={styles.emptyItem}><Text>T5</Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Trong 4h đầu: <Text style={styles.priceText}>2.000 VND</Text> </Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Sau 4h đầu: <Text style={styles.additionalPriceText}>2.000 VND/h </Text> </Text></View>
      </View><View style={styles.dayContainer}>
        <View style={styles.emptyItem}><Text>T6</Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Trong 4h đầu: <Text style={styles.priceText}>2.000 VND</Text> </Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Sau 4h đầu: <Text style={styles.additionalPriceText}>2.000 VND/h </Text> </Text></View>
      </View><View style={styles.dayContainer}>
        <View style={styles.emptyItem}><Text>T7</Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Trong 4h đầu: <Text style={styles.priceText}>2.000 VND</Text> </Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Sau 4h đầu: <Text style={styles.additionalPriceText}>2.000 VND/h </Text> </Text></View>
      </View>
      <View style={styles.dayContainer}>
        <View style={styles.emptyItem}><Text>CN</Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Trong 4h đầu: <Text style={styles.priceText}>2.000 VND</Text> </Text></View>
        <View style={styles.dayItem}><Text style={styles.itemText}>Sau 4h đầu: <Text style={styles.additionalPriceText}>2.000 VND/h </Text> </Text></View>
      </View>
    </View>
  )
}

export default ParkingTicketPrice

const styles = StyleSheet.create({
  container: {

  },
  labelContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    backgroundColor: "green"
  },
  labelItem: {
    width: "45%",

  },
  labelText: { color: 'white' },
  emptyItem: {
    width: "10%"
  },
  dayContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'

  },
  dayItem: {
    width: "45%"

  },
  itemText: {

  },
  priceText: {
    color: "#14bf3d"
  },
  additionalPriceText: {
    color: "#AE1E88"
  }
})