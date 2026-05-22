import * as React from "react";
import {
  NavigationContainer,
  type LinkingOptions,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import { CartProvider } from "./src/context/CartContext";
import AuthStackNavigator from "./src/navigators/stack/authStackNavigator";
import DynamicStackNavigator from "./src/navigators/stack/dynamicStackNavigator";
import type { AppStackParamList } from "./src/types/navigation";

const linking: LinkingOptions<AppStackParamList> = {
  prefixes: ["foodapp://"],
  config: {
    screens: {
      Onboarding: "onboarding",
      MainTabs: {
        screens: {
          HomeTab: {
            screens: {
              Home: "home",
              RestaurantDetail: "restaurant/:id",
              Cart: "cart",
            },
          },
          Search: "search",
          Orders: "orders",
          Profile: {
            screens: {
              ProfileHome: "profile",
              MyOrders: "profile/orders",
              Settings: "profile/settings",
              Help: "profile/help",
            },
          },
        },
      },
    },
  },
};

const LoadingScreen = () => (
  <View style={styles.loading}>
    <ActivityIndicator color="#ff7a1a" size="large" />
    <Text style={styles.loadingText}>Preparing your kitchen...</Text>
  </View>
);

const AppNavigation = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer linking={isAuthenticated ? linking : undefined}>
      <StatusBar style="dark" />
      {isAuthenticated ? (
        <CartProvider>
          <DynamicStackNavigator />
        </CartProvider>
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    backgroundColor: "#fff8ec",
    flex: 1,
    justifyContent: "center",
  },
  loadingText: {
    color: "#6f5c4a",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 12,
  },
});
