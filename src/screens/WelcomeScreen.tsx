import React, { FC } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { R } from '../resources/R';
import Carousel from 'react-native-snap-carousel';

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
export const WelcomeScreen: FC = () => {
    const data = [
        {
            image: R.image.welcomeNight,
            text: R.string.welcomeNightText,
        },
        {
            image: R.image.welcomeDay,
            text: R.string.welcomeDayText,
        },
        {
            image: R.image.welcomeSunset,
            text: R.string.welcomeSunsetText,
        },
        {
            image: R.image.welcomeSunrise,
            text: R.string.welcomeSunriseText,
        },
    ];
    // @ts-ignore
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
                <TouchableOpacity style={styles.buttonSkip}>
                    <Text style={styles.textSkip}>{R.string.skip}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View style={[styles.container]}>
            <Carousel
                data={data}
                renderItem={_renderItem}
                sliderWidth={maxWidth}
                sliderHeight={maxHeight}
                inactiveSlideScale={1}
                layout={'tinder'}
                layoutCardOffset={30}
                itemWidth={maxWidth}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
