import React from 'react';
import {Image, Animated, Easing} from 'react-native';

const Disk = ({
    uri,
    // paused,
    radius = 60
}) => {

    const spinValue = new Animated.Value(0)

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <Animated.Image
            source={{uri: uri}}
            style={{
                height: radius * 2,
                width: radius * 2,
                borderRadius: radius,
                resizeMode: 'cover',
                transform: [{
                    rotate: spin
                }]
            }}
        />
    )
}

export default Disk;
