import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Previous = ({back}) => {
  return (
    <TouchableOpacity
      onPress={back}
      style={{width: 30, height: 30, marginRight: 25}}>
      <Image source={require('assets/previous.png')} />
    </TouchableOpacity>
  );
};

export default Previous;
