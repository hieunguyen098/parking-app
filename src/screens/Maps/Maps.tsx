import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Maps = () => {
    const origin = { latitude: 37.3318456, longitude: -122.0296002 };
    const destination = { latitude: 37.771707, longitude: -122.4053769 };
    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapViewDirections origin={origin} destination={destination} apikey={'chua lay duoc'} />
            </MapView>
        </View>
    );
};

export default Maps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
