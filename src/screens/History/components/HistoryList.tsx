import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import HistoryItem from './HistoryItem';
import {useFetchHistory} from "../../../hooks/useFetchHistory";
import {useSelector} from "react-redux";
import {HistoryType} from "../../../constants/History";
import {useFocusEffect} from "@react-navigation/native";

const HistoryList = ({type}: {type: string}) => {
  const user = useSelector((state: any) => state.auth.user);

  const [
    loading,
    histories,
    firstLoadHistory,
    loadOldHistory
  ] = useFetchHistory(type, user.phone)

  useFocusEffect(
      useCallback(() => {
        firstLoadHistory().then();
      }, [type])
  )

  return (
      <View style={styles.container}>
          <HistoriesList
              histories={histories}
              loadOldHistory={() => {}}
              firstLoadHistory={firstLoadHistory}
              loading={loading}
          />
      </View>
  );
};

const HistoriesList = ({histories, loadOldHistory, firstLoadHistory, loading}: any) => {
  return <FlatList
      data={histories}
      renderItem={({item, index}) => {
        return (
            <HistoryItem item={item}
                         style={index === histories.length - 1 ? {borderBottomWidth: 0} : {}}/>
        );
      }}
      keyExtractor={(item, index) => String(index)}
      onEndReached={loadOldHistory}
      onRefresh={firstLoadHistory}
      refreshing={loading}
      style={styles.contentContainer}
      ListEmptyComponent={<Text style={styles.emptyContainer}>Không có lịch sử giao dịch</Text>}
      ListFooterComponent={loading ? <ActivityIndicator size={1}/> : null}
  />
}

export default HistoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    addingHorizontal: 16,
    marginBottom: 8
  },
  emptyContainer: {
    color: "gray",
    margin: 20,
    textAlign: "center",
    fontSize: 20
  }
});
