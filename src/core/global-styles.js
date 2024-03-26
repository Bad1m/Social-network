import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textRegular: {
    fontFamily: "MontserratRegular",
  },
  textSemiBold: {
    fontFamily: "MontserratSemiBold",
  },
  textMedium: {
    fontFamily: "MontserratMedium",
  },
});
