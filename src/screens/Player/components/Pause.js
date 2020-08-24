import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Pause = ({paused, pause, height = 50, width = 50}) => {
  return (
    <TouchableOpacity onPress={pause}>
      {paused ? (
        <Image
          source={require('assets/play-button.png')}
          style={{height: height, width: width}}
        />
      ) : (
        <Image
          source={require('assets/pause.png')}
          style={{height: height, width: width}}
        />
      )}
    </TouchableOpacity>
  );
};

export default Pause;
