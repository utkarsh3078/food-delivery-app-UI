import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";

type DrawerInfoProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
};

const DrawerInfoScreen = ({ icon, title, text }: DrawerInfoProps) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <Ionicons name={icon} size={34} color="#fff" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export const LogoutScreen = () => {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, [signOut]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Signing out...</Text>
      </View>
    </SafeAreaView>
  );
};

const DrawerScreens = {
  MyOrders: () => (
    <DrawerInfoScreen
      icon="receipt-outline"
      title="My Orders"
      text="Track completed meals, active orders and saved receipts from here."
    />
  ),
  Settings: () => (
    <DrawerInfoScreen
      icon="settings-outline"
      title="Settings"
      text="Manage delivery address, notifications and payment preferences."
    />
  ),
  Help: () => (
    <DrawerInfoScreen
      icon="help-circle-outline"
      title="Help"
      text="Need support? This area is ready for FAQs and chat assistance."
    />
  ),
};

export default DrawerScreens;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  iconWrap: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderRadius: 28,
    height: 56,
    justifyContent: "center",
    width: 56,
  },
  title: {
    color: "#21160f",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 20,
  },
  text: {
    color: "#75614d",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginTop: 10,
  },
});
