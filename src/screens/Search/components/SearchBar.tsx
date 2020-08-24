import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Button,
} from 'react-native';
import SearchResult from 'screens/Search/components/SearchResult';
import {Song} from 'components/Song';
import {findSubstring} from './strFunctions';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import DefaultSearch from '../DefaultSearch';
import {NavigationContainer} from '@react-navigation/native';

export const width_screen = Dimensions.get('window').width;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [source, setSource] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    if (value != '') {
      setLoading(true);
      fetch('https://5f22da500e9f660016d8893d.mockapi.io/SoulMusic/Api/Songs')
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setResults(
            res.filter(
              (song: Song) =>
                findSubstring(song.title, value) ||
                findSubstring(song.chanel, value),
            ),
          );
          setSource(res);
        })
        .catch((error) => console.log('Error: ', error))
        .finally(() => {
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  };
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#0C08C4', '#030239', '#000000']}>
      <View
        style={{
          height: '100%',
        }}>
        <View
          style={{
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', marginTop: 30, flex: 1}}>
            <TouchableOpacity
              style={{
                height: 50,
              }}>
              <TextInput
                style={{
                  fontSize: 18,
                  backgroundColor: '#0C08C3',

                  marginHorizontal: 10,
                  borderRadius: 10,
                  width: width_screen * 0.78,
                  borderColor: '#F57A8E',
                  height: 50,
                }}
                placeholder={'Search music'}
                placeholderTextColor={'#8D5555'}
                value={value.toLowerCase()}
                onChangeText={(text) => setValue(text)}
                onSubmitEditing={fetchData}
                autoFocus={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 60,
                height: 50,
                marginHorizontal: 10,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}
              onPress={() => navigation.goBack()}>
              <Text
                style={{
                  fontSize: 13,
                  color: 'white',
                  textAlignVertical: 'center',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator
              style={{marginTop: 100}}
              size="large"
              color="white"
            />
          ) : null}
          {results.length === 0 ? (
            <Text
              style={{
                marginTop: 80,
                textAlign: 'center',
                color: '#D87777',
              }}>
              No Results
            </Text>
          ) : (
            <FlatList
              style={{marginTop: 100}}
              keyExtractor={(item, index) => index.toString()}
              data={results}
              renderItem={({item}) => {
                return <SearchResult song={item} playlist={source} />;
              }}
            />
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

export default SearchBar;
