import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/loginScreen";
import type { AuthStackParamList } from "../../types/navigation";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "fade",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
