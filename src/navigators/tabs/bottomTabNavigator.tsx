import { Ionicons } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  type RouteProp,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import ProfileDrawerNavigator from "../drawer/profileDrawerNavigator";
import RestaurantStackNavigator from "../stack/restaurantStackNavigator";
import OrdersScreen from "../../screens/ordersScreen";
import SearchScreen from "../../screens/searchScreen";
import { useCart } from "../../context/CartContext";
import type { MainTabParamList } from "../../types/navigation";

const Tab = createBottomTabNavigator<MainTabParamList>();

const hiddenRoutes = ["RestaurantDetail", "Cart"];

const getHomeTabBarStyle = (route: RouteProp<MainTabParamList, "HomeTab">) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  if (hiddenRoutes.includes(routeName)) {
    return { display: "none" as const };
  }

  return styles.tabBar;
};

const BottomTabNavigator = () => {
  const { cartCount } = useCart();

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#ff7a1a",
        tabBarInactiveTintColor: "#2f2923",
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ color, focused, size }) => {
          const iconName =
            route.name === "HomeTab"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Search"
              ? focused
                ? "search"
                : "search-outline"
              : route.name === "Orders"
              ? focused
                ? "receipt"
                : "receipt-outline"
              : focused
              ? "person-circle"
              : "person-circle-outline";

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={RestaurantStackNavigator}
        options={({ route }) => ({
          tabBarLabel: "Home",
          tabBarStyle: getHomeTabBarStyle(route),
          title: "Home",
        })}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge: cartCount > 0 ? cartCount : undefined,
          tabBarBadgeStyle: styles.badge,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileDrawerNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 14,
    height: 76,
    paddingBottom: 12,
    paddingTop: 10,
    backgroundColor: "#fff",
    borderTopWidth: 0,
    borderRadius: 34,
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 12,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "700",
  },
  badge: {
    backgroundColor: "#ff7a1a",
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
  },
});
