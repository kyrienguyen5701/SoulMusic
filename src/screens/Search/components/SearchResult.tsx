import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Dimensions, Image, TouchableOpacity, View, Text} from "react-native";
import {Song} from "Song.ts";

const SearchResult = (props: Song) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={ () => navigation.navigate("Player",{
                id: props.id,
                title:props.title
            })}>
            <View style={{
                flexDirection:"row",
                margin:10,
                marginBottom:0
            }}>
                <Image
                    source={{uri:`https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`}} //high-quality thumbnail uri
                    style={{
                        width: "45%",
                        height: 100
                    }} />
                <View style={{
                    paddingLeft: 7
                }}>
                    <Text style={{
                        fontSize:17,
                        width:Dimensions.get("screen").width/2,
                        color: '#FBF579'
                    }}
                          ellipsizeMode="tail"
                          numberOfLines={3}
                    >
                        {props.title}
                    </Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#FBF579'
                    }}>
                        {props.channel}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default SearchResult;
