import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { GlobalStyles } from '../../../constants';

function ImageCarousel({ images }) {
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
                {images.map((image) => {
                    return (
                        <View style={styles.slide1} key={image}>
                            <Image
                                source={{
                                    uri: `${image}`,
                                }}
                                style={styles.image}
                            />
                        </View>
                    );
                })}
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
