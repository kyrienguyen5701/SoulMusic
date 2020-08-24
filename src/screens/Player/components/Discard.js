import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Discard = ({discard}) => {
  return (
    <TouchableOpacity onPress={discard}>
      <Image style={{width: 24, height: 24 , marginLeft:20}} source={require('assets/x.png')} />
    </TouchableOpacity>
  );
};

export default Discard;
