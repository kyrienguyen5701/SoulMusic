import React, {useState} from 'react';
import {ActivityIndicator, FlatList, TextInput, View} from 'react-native';
import SearchResult from 'screens/Search/components/SearchResult';

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDdjtaMDodDz39XWWwAVE-YBS9ABpozVxA

const SearchBar = () => {

    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const [loading,setLoading] = useState(false);
    const fetchData = () => {
        setLoading(true);
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDdjtaMDodDz39XWWwAVE-YBS9ABpozVxA`)
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setResults(data.items);
            console.log(data);
        })
    }

    return (
        <View style={{
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            backgroundColor: '#FBF579',
            opacity: .7,
        }}>
            <TextInput
                style={{
                    fontSize: 20,
                    color: '#005995',
                    flex: 1,
                    marginHorizontal: 8,
                    height: 40
                }}
                placeholder={'Search music'}
                placeholderTextColor={'rgba(0, 89, 149, 0.4)'}
                value={value}
                onChangeText={text => setValue(text)}
                onSubmitEditing={fetchData}
            />
            {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null }
            <FlatList
                data={results}
                renderItem={({item})=>{
                    return <SearchResult
                        id={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
            />
        </View>

    );
}

export default SearchBar;
