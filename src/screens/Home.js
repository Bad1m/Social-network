import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {ScrollView, TextInput} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import Posts from "../screens/Posts";
import styles from "./styles";
import PostSlider from '../screens/PostSlider'

export default class Home extends React.Component {
    state = {
        popularSelected: true,
    };

    onTabPressed = () => {
        this.setState({popularSelected: !this.state.popularSelected});
    };

    handleLogout = () => {
        this.props.navigation.navigate("Register");
    };

    render() {
        const contact = {
            photo: require("../images/p2.jpg"),
            name: "Ксения Батор",
            city: "Киев, Украина",
            photosCount: 280,
            subcribersCount: 2.107,
            subscriptionsCount: 104,
            collectionName: "Природные коллекции",
            collectionCover: require("../images/7.jpg"),
            collectionPhotosCount: 1003,
        };
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContainer}
            >
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("ContactsScreen")}
                            style={styles.settingsContainer}
                        >
                            <Image
                                source={require("../images/Untitled.png")}
                                style={{width: 20, height: 20}}
                            />
                            <Text style={styles.settingsText}>Контакты</Text>
                        </TouchableOpacity>

                        <View>
                            <TouchableOpacity onPress={this.handleLogout} activeOpacity={0.8}>
                                <Text
                                    style={{
                                        color: "#ffffff",
                                        letterSpacing: 1.5,
                                    }}
                                >
                                    Регистрация
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.title}>Поиск фото</Text>

                    <View style={styles.searchBarContainer}>
                        <TextInput
                            placeholder="Найти вдохновение"
                            style={styles.searchBarInput}
                        />
                        <Icon name="magnifying-glass" size={15} color="#9ca1a2"/>
                    </View>
                </View>

                <View style={styles.scrollViewContent}>
                    <View style={styles.style1}>
                        <View style={{flexDirection: "row", paddingTop: 20}}>
                            <TouchableOpacity
                                onPress={this.onTabPressed}
                                style={{
                                    borderBottomColor: this.state.popularSelected
                                        ? "#044244"
                                        : "#FFF",
                                    borderBottomWidth: 4,
                                    paddingVertical: 6,
                                }}
                            >
                                <Text
                                    style={{
                                        color: this.state.popularSelected ? "#044244" : "#9ca1a2",
                                    }}
                                >
                                    ПОПУЛЯРНЫЕ
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.onTabPressed}
                                style={{
                                    borderBottomColor: this.state.popularSelected
                                        ? "#FFF"
                                        : "#044244",
                                    borderBottomWidth: 4,
                                    paddingVertical: 6,
                                    marginLeft: 30,
                                }}
                            >
                                <Text
                                    style={{
                                        color: this.state.popularSelected ? "#9ca1a2" : "#044244",
                                    }}
                                >
                                    НЕДАВНИЕ
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <Posts
                                onPress={() =>
                                    this.props.navigation.navigate("Detail", {contact})
                                }
                                name="Макс Батор"
                                profile={require("../images/p1.jpg")}
                                photo={require("../images/5.jpg")}
                            />
                            <View style={styles.style4}></View>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <View style={styles.style5}></View>
                            <Posts
                                onPress={() =>
                                    this.props.navigation.navigate("Detail", {contact})
                                }
                                name="Эрика Берка"
                                profile={require("../images/p2.jpg")}
                                photo={require("../images/6.jpg")}
                            />
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <Posts
                                onPress={() =>
                                    this.props.navigation.navigate("Detail", {contact})
                                }
                                name="Макс Батор"
                                profile={require("../images/p1.jpg")}
                                photo={require("../images/3.jpg")}
                            />
                            <View style={styles.style6}></View>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <PostSlider
                                onPress={() => this.props.navigation.navigate('Detail', {contact})} name="Max Bator"
                                        profile={require('../images/p3.jpg')} photo={require('../images/8.jpg')}/>
                            <View style={styles.style7}></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
