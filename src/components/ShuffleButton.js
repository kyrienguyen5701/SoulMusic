import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ShuffleButton = ({title}) => {
  return (
    <View
      style={{
        marginTop: 2,
        paddingLeft: '26%',
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
