import { Ionicons } from "@expo/vector-icons";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ProfileDrawerParamList } from "../types/navigation";

type ProfileNavigation = DrawerNavigationProp<
  ProfileDrawerParamList,
  "ProfileHome"
>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileNavigation>();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>DU</Text>
        </View>
        <Text style={styles.name}>Demo User</Text>
        <Text style={styles.meta}>New York, US • Premium food explorer</Text>

        <TouchableOpacity
          activeOpacity={0.86}
          style={styles.drawerButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu-outline" size={22} color="#fff" />
          <Text style={styles.drawerButtonText}>Open Profile Drawer</Text>
        </TouchableOpacity>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>4.9</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#ff8a3d",
    borderRadius: 44,
    height: 88,
    justifyContent: "center",
    width: 88,
  },
  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
  },
  name: {
    color: "#21160f",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 18,
  },
  meta: {
    color: "#75614d",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 6,
  },
  drawerButton: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderRadius: 16,
    flexDirection: "row",
    gap: 10,
    height: 56,
    justifyContent: "center",
    marginTop: 26,
  },
  drawerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
  statsRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 20,
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    flex: 1,
    padding: 18,
  },
  statValue: {
    color: "#21160f",
    fontSize: 28,
    fontWeight: "900",
  },
  statLabel: {
    color: "#8d7761",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 4,
  },
});
