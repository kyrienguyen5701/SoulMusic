import React, {useState} from 'react';
import {ActivityIndicator, FlatList, TextInput, View, TouchableOpacity} from 'react-native';
import SearchResult from 'screens/Search/components/SearchResult';
import {Song} from 'components/Song';
import { findSubstring } from './strFunctions';
import LinearGradient from "react-native-linear-gradient";

const SearchBar = () => {

    const [value, setValue] = useState('');
    const [source, setSource] = useState([])
    const [results, setResults] = useState([]);
    const [loading,setLoading] = useState(false);
    const fetchData = () => {
        if (value != '') {
            setLoading(true);
            fetch('https://5f22da500e9f660016d8893d.mockapi.io/SoulMusic/Api/Songs')
                .then((res) => {return res.json()})
                .then((res) => {
                    setResults(res.filter((song: Song) => findSubstring(song.title, value)));
                    setSource(res);
                })
                .catch((error) => console.log("Error: ", error))
                .finally(() => {setLoading(false)})
        }
    }

    return (
        <LinearGradient colors={['#0C08C4', '#030239', '#000000']}>
            <View style={{
                height: '100%'
            }}>
                <View style={{
                    marginTop: 10
                }}>
                    <TouchableOpacity style={{
                        height: 50
                    }}>
                        <TextInput
                            style={{
                                fontSize: 20,
                                backgroundColor: '#FBF579',
                                color: '#005995',
                                flex: 1,
                                marginHorizontal: 10,
                            }}
                            placeholder={'Search music'}
                            placeholderTextColor={'rgba(0, 89, 149, 0.4)'}
                            value={value.toLowerCase()}
                            onChangeText={text => setValue(text)}
                            onSubmitEditing={fetchData}
                            autoFocus={true}
                        />
                    </TouchableOpacity>

                    {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null }
                    <FlatList
                        keyExtractor={(item, index) => index}
                        data={results}
                        renderItem={({item})=>{
                            return <SearchResult
                                song={item}
                                playlist={source}
                            />
                        }}
                    />
                </View>
            </View>
        </LinearGradient>
    );
}

export default SearchBar;
