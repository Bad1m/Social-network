import { Text } from "react-native";
import { useFonts } from "expo-font";
import { MyStack } from "./src/navigations/MyStack";

const App = () => {
  const [fontsLoaded] = useFonts({
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  return !fontsLoaded ? <Text>Loading...</Text> : <MyStack />;
};

export default App;
