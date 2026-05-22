import { Ionicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerScreens, { LogoutScreen } from "../../screens/drawerScreens";
import ProfileScreen from "../../screens/profileScreen";
import type { ProfileDrawerParamList } from "../../types/navigation";

const Drawer = createDrawerNavigator<ProfileDrawerParamList>();

const iconForRoute = (routeName: keyof ProfileDrawerParamList) => {
  switch (routeName) {
    case "MyOrders":
      return "receipt-outline";
    case "Settings":
      return "settings-outline";
    case "Help":
      return "help-circle-outline";
    case "Logout":
      return "log-out-outline";
    default:
      return "person-circle-outline";
  }
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.drawerHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SY</Text>
        </View>
        <Text style={styles.userName}>Sudhir Yadav</Text>
        <Text style={styles.userEmail}>food lover</Text>
      </View>

      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        labelStyle={styles.logoutLabel}
        icon={({ color, size }) => (
          <Ionicons name="log-out-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate("Logout")}
      />
    </DrawerContentScrollView>
  );
};

const ProfileDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        drawerActiveBackgroundColor: "#fff1df",
        drawerActiveTintColor: "#ff7a1a",
        drawerInactiveTintColor: "#4c4136",
        drawerLabelStyle: styles.drawerLabel,
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#fff8ec" },
        headerTintColor: "#2a1d12",
        drawerIcon: ({ color, size }) => (
          <Ionicons
            name={iconForRoute(route.name)}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="ProfileHome"
        component={ProfileScreen}
        options={{ drawerLabel: "Profile", title: "Profile" }}
      />
      <Drawer.Screen
        name="MyOrders"
        component={DrawerScreens.MyOrders}
        options={{ drawerLabel: "My Orders", title: "My Orders" }}
      />
      <Drawer.Screen name="Settings" component={DrawerScreens.Settings} />
      <Drawer.Screen name="Help" component={DrawerScreens.Help} />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          drawerItemStyle: { display: "none" },
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default ProfileDrawerNavigator;

const styles = StyleSheet.create({
  drawerContent: {
    paddingTop: 10,
  },
  drawerHeader: {
    paddingHorizontal: 20,
    paddingBottom: 22,
    paddingTop: 14,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff8a3d",
    shadowColor: "#ff8a3d",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 16,
    elevation: 4,
  },
  avatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  userName: {
    color: "#2a1d12",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 12,
  },
  userEmail: {
    color: "#8d7761",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
  },
  drawerLabel: {
    fontSize: 15,
    fontWeight: "700",
  },
  logoutLabel: {
    color: "#c0361b",
    fontSize: 15,
    fontWeight: "800",
  },
});
