import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Image, TouchableOpacity, View, Text} from 'react-native';
import {Song} from 'components/Song';
import {useDispatch} from 'react-redux';
import {chosenSong} from 'redux/reducer';

// @ts-ignore
const SearchResult = (props: {song: Song; playlist: Array<Song>}) => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(chosenSong(props))}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            marginBottom: 0,
          }}>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${props.song.id}/hqdefault.jpg`,
            }}
            style={{
              width: '45%',
              height: 100,
              borderRadius: 5,
            }}
          />
          <View
            style={{
              paddingLeft: 7,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 17,
                width: Dimensions.get('screen').width / 2,
                color: '#ffffff',
              }}
              ellipsizeMode="tail"
              numberOfLines={3}>
              {props.song.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#D87777',
                width: Dimensions.get('screen').width / 2,
                marginTop: 7,
              }}
              numberOfLines={2}>
              {props.song.chanel}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchResult;
