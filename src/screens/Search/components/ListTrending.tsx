import React from 'react';
import {Song} from 'components/Song';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {chosenSong} from 'redux/reducer';
import {width_screen} from 'components/Device';
import {createRecent} from 'components/Data';

const ListTrending = (props: {song: Song; playlist: Array<Song>}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(chosenSong(props));
          createRecent(props.song);
        }}
        style={{
          marginRight: 12,
          marginHorizontal: 12,
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.song.id}/hqdefault.jpg`,
          }}
          style={{
            width: width_screen * 0.3,
            height: width_screen * 0.2,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 15,
            marginBottom: 20,
          }}>
          <Text
            numberOfLines={2}
            style={{
              width: width_screen * 0.6,
              fontSize: 16,
              color: '#FFFFFF',
              opacity: 0.8,
            }}>
            {props.song.title}
          </Text>
          <Text style={{color: '#D87777', marginVertical: 5, fontSize: 12}}>
            {props.song.channel}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListTrending;
