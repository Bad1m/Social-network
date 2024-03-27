import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "@expo/vector-icons/Entypo";
import { Video, ResizeMode } from 'expo-av'

export default class PostVideo extends React.Component{
    state={
        liked:false
    }



    render(){

        const video = require('../videos/background.mp4')

        const {name,profile, onPress } = this.props

        return(
            <View>
               <TouchableOpacity
                   onPress = {onPress}
                   style={{
                   flexDirection:"row",
                   paddingTop:25,
                   alignItems:"center"
                }}>
                    <View style={{width:"20%"}}>
                            <Image
                                source={profile}
                                style={{
                                    width:45,
                                    height:45,
                                    borderRadius:13
                                }}
                                />
                    </View>
                    <View style={{
                        width:"60%"
                    }}>
                        <Text style={{
                            fontSize:14,
                            color:"#044244"
                        }}>{name}</Text>

                        <Text style={{
                            fontSize:12,
                            color:"#9ca1a2"
                        }}>
                            1 min ago
                        </Text>
                    </View>
                    <View style={{
                        width:"20%",
                        alignItems:"flex-end"
                    }}>
                        <Icon
                            name="sound-mix"
                            color="#044244"
                            size={20}
                        />
                    </View>
               </TouchableOpacity>
               <View
                   style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20,
                   position: 'relative',
               }}>
                   <Video
                       style={styles.video}
                       source={video}
                       useNativeControls
                       resizeMode={ResizeMode.CONTAIN}
                       isLooping

                   />
               </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: 250,
        height: 250,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});