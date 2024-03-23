// ContactsScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";

const contactsData = [
  {
    id: 1,
    name: "Джон Смит",
    photo: { uri: "https://i.ibb.co/6XBZgw6/kachok-s-noutbukom-mem-6.jpg" },
    city: "Бостон, США",
    photosCount: 25,
    subcribersCount: 40,
    subscriptionsCount: 30,
    collectionName: "Компьютеры",
    collectionCover: require("../images/pc.jpg"),
    collectionPhotosCount: 20,
  },
  {
    id: 2,
    name: "Джонатан Смит",
    photo: { uri: "https://i.ibb.co/xDWFbV6/images.jpg" },
    city: "Нью-Йорк, США",
    photosCount: 95,
    subcribersCount: 60,
    subscriptionsCount: 30,
    collectionName: "Собаки",
    collectionCover: require("../images/dogs.jpg"),
    collectionPhotosCount: 40,
  },
  {
    id: 3,
    name: "Ли Джонсон",
    photo: { uri: "https://i.ibb.co/TP77r73/kachok-s-noutbukom-mem-4.jpg" },
    city: "Пекин, Китай",
    photosCount: 20,
    subcribersCount: 10,
    subscriptionsCount: 30,
    collectionName: "Котики",
    collectionCover: require("../images/cats.jpg"),
    collectionPhotosCount: 100,
  },
];

const ContactItem = ({ contact, onPress }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => onPress(contact)}
  >
    <Image source={contact.photo} style={styles.photo} />
    <Text style={styles.name}>{contact.name}</Text>
  </TouchableOpacity>
);

const ContactsScreen = ({ navigation }) => {
  const renderContactItem = ({ item }) => (
    <ContactItem
      contact={item}
      onPress={(contact) => navigation.navigate("Detail", { contact })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsData}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ paddingBottom: 20 }}>
        <Button
          title={"Закрыть"}
          color={"green"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
  },
});

export default ContactsScreen;
