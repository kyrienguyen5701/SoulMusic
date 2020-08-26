import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {width_screen} from './Device';

const ShuffleButton = ({title}) => {
  return (
    <View
      style={{
        marginTop: 5,
        paddingLeft: (width_screen - 170) / 2,
      }}>
      <TouchableOpacity
        style={{
          width: 170,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#D87777',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#ffffff',
            fontSize: 16,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShuffleButton;
