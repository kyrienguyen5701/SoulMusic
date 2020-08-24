import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {SongData, Song} from 'components/Song';
import Recent from 'screens/Playlists/Recent';
import LinearGradient from 'react-native-linear-gradient';
import {getRecents} from 'components/Data';
import ListGenre from './ListGenre';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {width_screen} from 'components/Device';

const data = [
  {
    id: 'jgZkrA8E5do',
    title: 'TOULIVER x BINZ - -BIGCITYBOI- (Official Music Video)',
    channel: 'Binz Da Poet',
    url:
      'http://42.112.17.21:8077/TOULIVER%20x%20BINZ%20-%20-BIGCITYBOI-%20(Official%20Music%20Video).mp4',
    genre: 'V-Pop',
    top: 1,
  },
  {
    id: 'K-a8s8OLBSE',
    title: 'Taylor Swift - cardigan (Official Music Video)',
    channel: 'Taylor Swift',
    url:
      'http://42.112.17.21:8077/Taylor%20Swift%20-%20cardigan%20(Official%20Music%20Video).mp4',
    genre: 'Pop',
    top: 2,
  },
  {
    id: 'Ujb-gvqsoi0',
    title: "Red Velvet - IRENE & SEULGI 'Monster' MV",
    channel: 'SMTOWN',
    url:
      "http://42.112.17.21:8077/Red%20Velvet%20-%20IRENE%20&%20SEULGI%20'Monster'%20MV.mp4",
    genre: 'K-Pop',
    top: 3,
  },
  {
    id: 'LZN4I3K8SC0',
    title:
      'Cứ Chill Thôi - Chillies (Official Music Video) ft Suni Hạ Linh & Rhymastic',
    channel: 'Chillies',
    url:
      'http://42.112.17.21:8077/C%E1%BB%A9_Chill_Th%C3%B4i_Chillies_Official_Music_Video_ft_Suni_H%E1%BA%A1_Linh_&_Rhymastic.mp4',
    genre: 'V-Pop',
    top: 4,
  },
  {
    id: 'HlN2BXNJzxA',
    title: "CHUNG HA 청하 'Gotta Go (벌써 12시)' Official MV",
    channel: 'MNH Entertainment',
    url:
      "http://42.112.17.21:8077/CHUNG_HA_%EC%B2%AD%ED%95%98_'Gotta_Go_%EB%B2%8C%EC%8D%A8_12%EC%8B%9C'_Official_MV.mp4",
    genre: 'K-Pop',
    top: 5,
  },
];

const DefaultPlaylists = () => {
  const [recentSongs, setRecentSongs] = useState({});
  useCallback(
    () =>
      getRecents((source: React.SetStateAction<{}>) => setRecentSongs(source)),
    [recentSongs],
  );
  console.log('recentSongs', recentSongs);
  console.log(data);

  return (
    <LinearGradient
      colors={['#0C08C4', '#030239', '#000000']}
      style={{
        height: '100%',
        flex: 1,
        paddingHorizontal: 16,
      }}>
      <ScrollView>
        <View
          style={{
            marginTop: 41,
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#ffffff',
            }}>
            Playlist
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#D87777',
            }}>
            Recently played
          </Text>
        </View>
        <View>
          <FlatList
            data={SongData.slice(0, 10)}
            horizontal={true}
            renderItem={({item}) => {
              return <Recent song={item} playlist={SongData.slice(0, 10)} />;
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 40,
            fontSize: 20,
            color: '#D87777',
          }}>
          Favorite Songs
        </Text>
        <Image />
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  height: 80,
                  borderRadius: 10,
                  marginVertical: 10,
                }}>
                <Text key={item.top} style={styles.top}>
                  {item.top}
                </Text>

                <Image
                  key={item.id}
                  source={{
                    uri: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
                  }}
                  style={styles.minImage}
                />
                <View style={styles.component}>
                  <Text numberOfLines={2} key={item.title} style={styles.title}>
                    {item.title}
                  </Text>

                  <Text key={item.channel} style={styles.channel}>
                    {item.channel}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  minImage: {
    width: 100,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  trend: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  container: {
    marginRight: 15,
    marginTop: 20,
    borderRadius: 10,
    flex: 1,
  },
  top: {
    fontSize: 14,
    position: 'absolute',
    marginTop: 29,
    marginLeft: ((width_screen - 30) % 2) + 9,
    color: '#FFFFFF',
  },
  component: {
    width: '60%',
    height: 76,
    marginLeft: 135,
    marginTop: 15,
    position: 'absolute',
    marginBottom: 100,
  },
  title: {
    position: 'absolute',
    lineHeight: 15,
    color: '#FFFFFF',
    fontSize: 13,
    marginLeft: ((width_screen - 30) % 2) - 8,
  },
  channel: {
    marginVertical: 33,
    color: '#D87777',
    fontSize: 11.5,
    marginLeft: ((width_screen - 30) % 2) - 8,
  },
});
export default DefaultPlaylists;
