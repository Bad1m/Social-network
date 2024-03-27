import React from 'react';
import {View,Text,Image} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
import {FlatListSlider} from "react-native-flatlist-slider";

const images = [
    {
        image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
    {
        image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    },
    {
        image:'https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        image:'https://images.unsplash.com/photo-1682687219612-b12805df750d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default class Posts extends React.Component{
    state={
        liked:false
    }
    render(){

        const {name,profile, onPress } = this.props

        return(
            <View>
               <View style={{
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
               </View>
               <View
                   style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20,
                   position: 'relative',
               }}>
                   <FlatListSlider
                       data={images}
                       timer={10000}
                       onPress={onPress}
                       indicatorContainerStyle={{position:'absolute', bottom: 20}}
                       indicatorActiveColor={'#3c636c'}
                       indicatorInActiveColor={'#ffffff'}
                       indicatorActiveWidth={30}
                       animation
                   >
                   </FlatListSlider>
               </View>

            </View>
        )
    }
}