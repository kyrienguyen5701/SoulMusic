import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Directions, TouchableOpacity} from 'react-native-gesture-handler';

const miniPlayer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}>
      <View  
      style={{
        marginTop: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        height:70,
        width: '100%',
        
      }}>
        <Image
          style={styles.minImage}
          source={require('../../assets/maxresdefault.jpg')}
        />
        <Text style={styles.title}>
          TOULIVER x BINZ - "BIGCITYBOI" (Official Music Video)
        </Text>
        <TouchableOpacity style={{flex:1}}>
          <Image
            style={styles.play}
            source={require('assets/play-button.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1}}>
          <Image
            style={styles.close}
            source={require('assets/x.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  minImage: {
    height: 50,
    marginLeft: 15,
    width:75,
    marginTop: 9,
  },

  title: {
    lineHeight: 15,
    color: '#ffffff',
    marginLeft: 10,
    width: 260,
    padding: 20,
    height:70,
  },
  play: {
    color: '#ffffff',
    width: 30,
    height: 30,
    marginTop:20
  },
  close:{
    width: 30,
    height: 30,
    marginTop:20,
    marginLeft:50
  }
});

export default miniPlayer;
