import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeScreen from "./src/screens/homeScreen";
import detailScreen from "./src/screens/detailScreen";
import onBoardingScreen from "./src/screens/onBoardingScreen";
import cart from "./src/screens/cart";
import { Ionicons } from "@expo/vector-icons";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Boarding",

  screens: {
    Boarding: {
      screen: onBoardingScreen,
      options: {
        headerShown: false,
      },
    },
    Home: {
      screen: homeScreen,
      options: {
        title: "My home",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
      },
    },
    Detail: detailScreen,
    Cart: cart,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
