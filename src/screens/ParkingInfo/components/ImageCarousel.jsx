import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { GlobalStyles } from '../../../constants/style';

function ImageCarousel() {
    return (
        <View style={{ height: 200 }}>
            <Swiper
                style={styles.wrapper}
                loop={false}
                activeDot={
                    <View
                        style={{
                            backgroundColor: GlobalStyles.colors.primaryOrange,
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                        }}
                    />
                }
                dotStyle={{
                    backgroundColor: '#FFFFFF',
                }}
            >
                <View style={styles.slide1}>
                    <Image
                        source={{
                            uri: 'https://img.freepik.com/free-photo/empty-parking-lots-aerial-view_1127-4052.jpg?w=900&t=st=1675847283~exp=1675847883~hmac=d2a36bac3914c56d587c66bfcba8720b20ef44abe9fe4dad30a55062588eef6e',
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.slide1}>
                    <Image
                        source={{
                            uri: 'https://img.freepik.com/free-photo/parking-entrance_1150-10839.jpg?w=996&t=st=1675848228~exp=1675848828~hmac=5962173fa20749187216f2b7e2d05b9549cd2b8f397b0b8a7589a0b188040a7c',
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.slide1}>
                    <Image
                        source={{
                            uri: 'https://img.freepik.com/free-photo/full-car-parking-lot-mall_1268-14318.jpg?w=996&t=st=1675849232~exp=1675849832~hmac=3fe6175cd6ebb4b943df23e13192cb7c9bfeb492baa8291fcc654ad43a5f9c36',
                        }}
                        style={styles.image}
                    />
                </View>
            </Swiper>
        </View>
    );
}

export default ImageCarousel;

const styles = StyleSheet.create({
    wrapper: {},
    slide1: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
