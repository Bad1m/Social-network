import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";

export default class Detail extends React.Component {
  state = {
    collectionSelected: true,
    isSubcribed: false,
  };
  onTabPressed = () => {
    this.setState({ collectionSelected: !this.state.collectionSelected });
  };
  onSubcribePressed = (name) => {
    this.setState({ isSubcribed: !this.state.isSubcribed });
    const message = this.state.isSubcribed
      ? `Вы отписались от обновлений пользователя ${name}`
      : `Вы подписались на обновления пользователя ${name}`;
    Alert.alert("Уведомление", message);
  };

  render() {
    const { route } = this.props;
    const { contact } = route.params;
    return (
      <View
        style={{
          backgroundColor: "#044244",
          height: "100%",
        }}
      >
        <View
          style={{
            paddingHorizontal: 40,
            backgroundColor: "#FFF",
            height: "50%",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                width: "50%",
              }}
            >
              <Icon name="chevron-left" size={24} color="#044244" />
            </TouchableOpacity>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
              }}
            >
              <Icon name="dots-two-vertical" size={24} color="#044244" />
            </View>
          </View>

          <Image
            source={contact.photo}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              alignSelf: "center",
              marginVertical: 20,
            }}
          />
          <Text
            style={{
              fontSize: 22,
              color: "#044244",
              alignSelf: "center",
            }}
          >
            {contact.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#9ca1a2",
              alignSelf: "center",
            }}
          >
            {contact.city}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: "#044244",
                  alignSelf: "center",
                }}
              >
                {contact.photosCount}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#9ca1a2",
                  alignSelf: "center",
                }}
              >
                фото
              </Text>
            </View>

            <View style={{ marginHorizontal: 40 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#044244",
                  alignSelf: "center",
                }}
              >
                {contact.subcribersCount}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#9ca1a2",
                  alignSelf: "center",
                }}
              >
                подписчиков
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: "#044244",
                  alignSelf: "center",
                }}
              >
                {contact.subscriptionsCount}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#9ca1a2",
                  alignSelf: "center",
                }}
              >
                подписок
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.onSubcribePressed(contact.name)}
            style={{
              backgroundColor: this.state.isSubcribed ? "grey" : "#044244",
              padding: 10,
              marginTop: 10,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>
              {this.state.isSubcribed ? "ОТПИСАТЬСЯ" : "ПОДПИСАТЬСЯ"}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
            paddingTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={this.onTabPressed}
            style={{
              borderBottomColor: this.state.collectionSelected
                ? "#FFF"
                : "#044244",
              borderBottomWidth: 4,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                color: this.state.collectionSelected ? "#FFF" : "#9ca1a2",
              }}
            >
              КОЛЛЕКЦИИ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.onTabPressed}
            style={{
              borderBottomColor: this.state.collectionSelected
                ? "#044244"
                : "#FFF",
              borderBottomWidth: 4,
              paddingVertical: 6,
              marginLeft: 30,
            }}
          >
            <Text
              style={{
                color: this.state.collectionSelected ? "#9ca1a2" : "#FFF",
              }}
            >
              ИЗБРАННОЕ
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#728c8e",
              height: 260,
              width: 280,
              marginHorizontal: 40,
              borderRadius: 30,
              marginTop: 30,
            }}
          >
            <ImageBackground
              source={contact.collectionCover}
              style={{
                width: 280,
                height: 180,
              }}
              imageStyle={{
                borderRadius: 30,
              }}
            >
              <View
                style={{
                  width: "100%",
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 25,
                    borderRadius: 10,
                    padding: 8,
                    marginRight: 20,
                    backgroundColor: "#6f8d90",
                  }}
                >
                  <Icon name="edit" size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
            </ImageBackground>

            <View
              style={{
                paddingVertical: 20,
                paddingHorizontal: 30,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 15,
                }}
              >
                {contact.collectionName}
              </Text>
              <Text
                style={{
                  color: "#dedede",
                  fontSize: 12,
                }}
              >
                {contact.collectionPhotosCount} фото
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 180,
              backgroundColor: "#FFF",
              width: 20,
              marginLeft: -20,
              marginTop: 70,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          ></View>
        </View>
      </View>
    );
  }
}
