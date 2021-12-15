import React, { FC } from 'react';
import { R } from '../resources/R';
import { Image, StyleSheet, View } from 'react-native';

export const ProfileMenu: FC = () => {
    return (
        <View style={styles.container}>
            <Image source={R.image.mountainsProfileMenu} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: R.color.smokyWhite,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: R.color.white,
        position: 'absolute',
        bottom: 110,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
    },
    textSkip: {
        color: R.color.white,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
    },
    buttonSkip: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
});
