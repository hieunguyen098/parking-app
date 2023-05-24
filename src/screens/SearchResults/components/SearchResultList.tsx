import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchResultItem from './SearchResultItem';

const data = [
    {
        key: '1',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Fnhaxebachkhoa.png?alt=media&token=e04a91ab-14e9-4c57-b4ff-1bfe434af704',
        name: 'Trường Đại Học Bách Khoa TP.HCM',
        distance: '1km',
        place: 'Dĩ An, Bình Dương',
    },
    {
        key: '2',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sparking-app.appspot.com/o/parking%2Ftrung-tam-thuong-m-i.jpg?alt=media&token=8190218c-a3ce-4066-bbc5-205e0843302e',
        name: 'Trung tâm thương mại GigaMall',
        distance: '10km',
        place: 'Phạm Văn Đồng, Thủ Đức, Tp Hồ Chí Minh',
    }
];

const SearchResultList = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => {
                return <SearchResultItem item={item} />;
            }}
            keyExtractor={(item) => item.key}
            style={styles.contentContainer}
        />
    );
};

export default SearchResultList;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
});
