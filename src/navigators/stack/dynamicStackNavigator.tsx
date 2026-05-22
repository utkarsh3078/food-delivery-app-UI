import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "../tabs/bottomTabNavigator";
import OnBoardingScreen from "../../screens/onBoardingScreen";
import { useAuth } from "../../context/AuthContext";
import type { AppStackParamList } from "../../types/navigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

const DynamicStackNavigator = () => {
  const { hasSeenOnboarding } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={hasSeenOnboarding ? "MainTabs" : "Onboarding"}
      screenOptions={{
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#fff8ec" },
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnBoardingScreen}
        options={{
          animation: "fade",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default DynamicStackNavigator;
