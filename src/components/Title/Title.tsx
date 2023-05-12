import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants';

const Title = ({ title, style, seeMore = true, onSeeMore = () => {} }: any) => {
    const [expend, setExpend] = useState(seeMore)
    return (
        <View style={styles.titleContainer}>
            <Text style={[styles.title, style]}>{title}</Text>
            {seeMore && (
                <View>
                    <Pressable style={styles.seeMoreContainer} onPress={() => {onSeeMore(); setExpend(!expend);}}>
                        <Text style={styles.seeMoreTitle}>{expend ? "Xem thêm" : "Thu gọn"}</Text>
                        <AntDesign
                            name="doubleright"
                            size={12}
                            color={GlobalStyles.colors.primaryOrange}
                            style={styles.seeMoreIcon}
                        />
                    </Pressable>
                </View>
            )}
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
    seeMoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seeMoreTitle: {
        fontSize: 16,
        color: GlobalStyles.colors.primaryOrange,
        fontWeight: '600',
    },
    seeMoreIcon: {
        marginLeft: 4,
    },
});
