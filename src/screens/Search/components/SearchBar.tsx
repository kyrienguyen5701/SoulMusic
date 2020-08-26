import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import SearchResult from 'screens/Search/components/SearchResult';
import {Song} from 'components/Song';
import {findSubstring} from './strFunctions';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Recent from "screens/Playlists/Recent";
import {useDispatch, useSelector} from "react-redux";
import {getRecents} from "components/Data";
import {tempRecents} from "redux/reducer";

export const width_screen = Dimensions.get('window').width;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [source, setSource] = useState([]);
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
    const refresh = useSelector(state => state.refresh);
    const dispatch = useDispatch();
  const fetchData = () => {
    if (value != '') {
      setLoading(true);
      fetch('https://5f22da500e9f660016d8893d.mockapi.io/SoulMusic/Api/Songs')
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setSource(res);
          setResults(
            res.filter(
              (song: Song) =>
                findSubstring(song.title, value) ||
                findSubstring(song.channel, value),
            ),
          );
        })
        .catch((error) => console.log('Error: ', error))
        .finally(() => {
          setLoading(false);
          setDisplay(true);
        });
    } else {
      setResults([]);
    }
  };
    const updateRecents = useCallback(
        () => {getRecents(source => {
            const cloneSrc = JSON.parse(JSON.stringify(source));
            console.log("Noob UwU");
            dispatch(tempRecents(Object.values(cloneSrc).reverse()))
            // setRecents(Object.values(cloneSrc).reverse())
        })}, [refresh]
    )
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
                  color: 'white',
                  marginHorizontal: 10,
                  borderRadius: 10,
                  width: width_screen * 0.78,
                  borderColor: '#F57A8E',
                  height: 50,
                }}
                placeholder={'Search music'}
                placeholderTextColor={'#8D5555'}
                value={value}
                onChangeText={(text) => setValue(text)}
                onSubmitEditing={fetchData}
                onFocus={() => setDisplay(false)}
                autoFocus={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 60,
                height: 50,
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
          {display ? (
            results.length === 0 ? (
              <Text
                style={{
                  marginTop: 80,
                  textAlign: 'center',
                  color: '#D87777',
                }}>
                No result
              </Text>
            ) : (
              <FlatList
                style={{marginTop: 100}}
                keyExtractor={(item, index) => index.toString()}
                data={results}
                renderItem={({item}) => {
                  return <SearchResult data={{song: item, playlist: source}} updateRecents={updateRecents} />;
                }}
              />
            )
          ) : null}
        </View>
      </View>
    </LinearGradient>
  );
};

export default SearchBar;
