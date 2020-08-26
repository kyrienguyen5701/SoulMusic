import React, {useRef} from 'react';
import {Image, Animated, Easing} from 'react-native';

const Disk = ({
  uri,
  // paused,
  radius = 60,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      source={{uri: uri}}
      style={{
        width: 70,
        height: 70,
        borderRadius: radius,
        resizeMode: 'cover',
        transform: [
          {
            rotate: spin,
          },
        ],
        marginTop: 5,
      }}
    />
  );
};

export default Disk;
