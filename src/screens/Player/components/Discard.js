import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Discard = ({discard}) => {
  return (
    <TouchableOpacity onPress={discard}>
      <Image
        style={{width: 27, height: 26, marginLeft: 20}}
        source={require('assets/nutxx.png')}
      />
    </TouchableOpacity>
  );
};

export default Discard;
