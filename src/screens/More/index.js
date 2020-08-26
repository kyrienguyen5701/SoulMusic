import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Dimensions, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const width_screen = Dimensions.get('window').width;

const Informations = () => {
  return (
    <LinearGradient
      style={{
        height: '100%',
        flex: 1,
        paddingLeft: 16,
      }}
      colors={['#0C08C4', '#030239', '#000000']}>
      <View style={{marginTop: 41}}>
        <Text style={{fontSize: 30, color: '#ffffff'}}>More</Text>
        <Text style={{fontSize: 20, color: '#ffffff', marginTop: 30}}>
          Trending in{' '}
        </Text>
        <Text
          style={{fontSize: 16, color: '#D87777', marginTop: 10, opacity: 0.7}}>
          VIETNAM
        </Text>
        <Text style={{fontSize: 20, color: '#ffffff', marginTop: 30}}>
          Do you love SoulMusic
        </Text>
        <Text
          style={{fontSize: 16, color: '#D87777', marginTop: 10, opacity: 0.7}}>
          Rate us 5 stars
        </Text>
        <Text style={{fontSize: 20, color: '#ffffff', marginTop: 30}}>
          Follow us
        </Text>
        <Text
          style={{fontSize: 16, color: '#D87777', marginTop: 10, opacity: 0.7}}>
          Report issues , say thanks , suggest feature...
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Informations;
