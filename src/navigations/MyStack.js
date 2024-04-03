// MyStack.js
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Posts from "../screens/Posts";
import Detail from "../screens/Detail";
import ContactsScreen from "../screens/ContactsScreen";
import MusicPlayerScreen from "../screens/MusicPlayerScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Detail" component={Detail}/>
                <Stack.Screen name="Posts" component={Posts}/>
                <Stack.Screen name="ContactsScreen" component={ContactsScreen}/>
                <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export {MyStack};
