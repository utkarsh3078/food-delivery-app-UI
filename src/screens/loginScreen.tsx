import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const { signIn } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    setIsSubmitting(true);
    await signIn();
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Ionicons name="fast-food" size={40} color="#fff" />
        </View>

        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>
          Sign in with the mock account to continue into the food delivery app.
        </Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="person-circle-outline" size={28} color="#ff7a1a" />
            <View>
              <Text style={styles.label}>Demo user</Text>
              <Text style={styles.value}>Demo User</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Ionicons
              name="shield-checkmark-outline"
              size={26}
              color="#ff7a1a"
            />
            <View>
              <Text style={styles.label}>Auth state</Text>
              <Text style={styles.value}>Persists after reload</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.86}
          disabled={isSubmitting}
          style={styles.cta}
          onPress={handleLogin}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.ctaText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7a1a",
    shadowColor: "#ff7a1a",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.26,
    shadowRadius: 24,
    elevation: 8,
  },
  title: {
    color: "#21160f",
    fontSize: 42,
    fontWeight: "900",
    lineHeight: 48,
    marginTop: 30,
  },
  subtitle: {
    color: "#725f4c",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginTop: 12,
    maxWidth: 330,
  },
  card: {
    backgroundColor: "#fff",
    borderColor: "#ffe3c5",
    borderRadius: 18,
    borderWidth: 1,
    gap: 16,
    marginTop: 34,
    padding: 18,
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 4,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  label: {
    color: "#9a8370",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  value: {
    color: "#21160f",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 2,
  },
  cta: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderRadius: 16,
    height: 58,
    justifyContent: "center",
    marginTop: 22,
    shadowColor: "#ff7a1a",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.28,
    shadowRadius: 20,
    elevation: 8,
  },
  ctaText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },
});
