import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../../screens/cart";
import DetailScreen from "../../screens/detailScreen";
import HomeScreen from "../../screens/homeScreen";
import type { RestaurantStackParamList } from "../../types/navigation";

const Stack = createNativeStackNavigator<RestaurantStackParamList>();

const RestaurantStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#fff8ec" },
        headerBackTitleStyle: { fontSize: 14 },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#ff8a3d" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "800",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={DetailScreen}
        options={({ route }) => ({
          headerBackTitle: "Home",
          title: route.params.restaurantName ?? "Details",
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerBackTitle: "Details",
          title: "Your Cart",
        }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantStackNavigator;
