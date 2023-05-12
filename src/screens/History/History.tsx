import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import HistoryList from './components/HistoryList';
import {HistoryType} from "../../constants/History";
import IconWithBottomText from "../../components/IconWithBottomText/IconWithBottomText";
import {FontAwesome5} from "@expo/vector-icons";
import {GlobalStyles} from "../../constants";

const types = [
  {
    key: HistoryType.ALL,
    value: "TẤT CẢ",
  },
  {
    key: HistoryType.PARKING,
    value: "GỬI XE",
  },
  {
    key: HistoryType.MONTH_TICKET,
    value: "VÉ THÁNG"
  },
];

const History = () => {
  const [onFilter, setOnFilter] = useState(false)
  const [type, setType] = useState("")

  const showFilter = () => {
    setOnFilter(!onFilter)
  }

  const selectFilter = (key: string) => {
    if (key != type) {
      setType(key)
      setTimeout(() => setOnFilter(false), 1000)
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.searchContainer}>
            <SearchInput placeholder=" Tìm kiếm lịch sử"/>
          </View>
          <View style={styles.iconContainer}>
            <IconWithBottomText title="Bộ lọc" name="filter" onPress={showFilter}
                                Icon={FontAwesome5}/>
          </View>
        </View>
        {onFilter && <View style={styles.filterOption}>
          {types && types.length > 0 && types.map(item =>
              <Text
                  key={item.key}
                  style={item.key == type ? {
                    ...styles.optionButton,
                    ...styles.onOptionSelected
                  } : styles.optionButton}
                  onPress={() => selectFilter(item.key)}
              >{item.value}</Text>
          )}
        </View>}
        <View style={styles.historyContainer}>
          <HistoryList type={type}/>
        </View>
      </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
  },
  iconContainer: {
    marginLeft: 16,
  },
  filterOption: {
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionButton: {
    width: "30%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    backgroundColor: GlobalStyles.colors.lightGrey,
    borderRadius: 8,
  },
  onOptionSelected: {
    backgroundColor: GlobalStyles.colors.primaryOrange,
  },
  historyContainer: {flex: 1},
});
