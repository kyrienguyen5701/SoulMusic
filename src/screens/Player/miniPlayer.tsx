import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Song} from "components/Song";

const miniPlayer = (props: Song) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}>
      <View
      style={{
        marginTop: 600,
        backgroundColor: '#030239',
        flexDirection: 'row',
        height:70,
        width: '100%',

      }}>
        <Image
          style={styles.minImage}
          source={{uri: `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`}}
        />
        <Text numberOfLines={2}
        style={styles.title}>
          {props.title}
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
    marginLeft: 10,
    width:75,
    marginTop: 9,
  },

  title: {
    lineHeight: 15,
    color: '#ffffff',
    marginLeft: -5,
    width: 200,
    padding: 20,
    height:70,
    fontSize:12
  },
  play: {
    color: '#ffffff',
    width: 25,
    height: 25,
    marginTop:20,
    marginLeft:-5
  },
  close:{
    width:22,
    height: 24,
    marginTop:20,
    marginLeft:30
  }
});

export default miniPlayer;
