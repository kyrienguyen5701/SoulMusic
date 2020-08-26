import React, {useCallback} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInput, FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Song} from 'components/Song';
import {useNavigation} from '@react-navigation/native';
import Genre from './Genre';
import SearchBar from '../Search/components/SearchBar';

export const width_screen = Dimensions.get('window').width;

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

const DefaultSearch = () => {
  const navigation = useNavigation();
  const onGoSearchBar = useCallback(() => {
    navigation.navigate('SearchBar');
  }, []);

  return (
    <LinearGradient colors={['#0C08C4', '#030239', '#000000']}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: '100%',
          }}>
          <View
            style={{
              marginHorizontal: 16,
            }}>
            <Text
              style={{
                fontSize: 30,
                marginTop: 41,
                color: '#FFFFFF',
              }}>
              Search
            </Text>
          </View>

          <TouchableOpacity onPress={onGoSearchBar}>
            <View
              style={{
                marginTop: 28,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <Text
                style={{
                  borderRadius: 10,
                  backgroundColor: '#0C08C3',
                  opacity: 0.6,
                  padding: 10,
                  height: 50,
                  fontSize: 18,
                  color: '#8D5555',
                  textAlignVertical: 'center',
                }}>
                Search music
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 16,
            }}>
            <Text style={styles.trend}>Trending in Vietnam</Text>
          </View>
          <ImageBackground
            source={require('assets/Rectangle99.png')}
            style={styles.container}>
            <View style={styles.container}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({item}) => (
                  <TouchableOpacity style={{height: 70, borderRadius: 10}}>
                    <Text key={item.top} style={styles.top}>
                      #{item.top}
                    </Text>

                    <Image
                      key={item.id}
                      source={{
                        uri: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
                      }}
                      style={styles.minImage}
                    />
                    <View style={styles.component}>
                      <Text
                        numberOfLines={2}
                        key={item.title}
                        style={styles.title}>
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
            <Text
              style={{
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 12,
                padding: 13,
                opacity: 0.7,
              }}>
              See all
            </Text>
          </ImageBackground>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 30,
              marginTop: 30,
              marginHorizontal: 16,
            }}>
            Genre
          </Text>
          <Genre />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#0C08C3',
    opacity: 0.6,
    borderColor: '#F57A8E',
    height: 50,
  },
  minImage: {
    width: 80,
    height: 50,
    marginLeft: ((width_screen - 30) % 2) + 45,
    marginTop: 15,
    borderRadius: 5,
  },
  trend: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderRadius: 10,
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
    marginLeft: 145,
    marginTop: 15,
    position: 'absolute',
  },
  title: {
    position: 'absolute',
    lineHeight: 15,
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: ((width_screen - 30) % 2) - 8,
  },
  channel: {
    marginVertical: 33,
    color: '#D87777',
    fontSize: 11.5,
    marginLeft: ((width_screen - 30) % 2) - 8,
  },
});

export default DefaultSearch;
