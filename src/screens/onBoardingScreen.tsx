import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";
import type { AppStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<AppStackParamList, "Onboarding">;

const nutrition = [
  { label: "Calories", value: "320 kcal", tint: "#fff1df" },
  { label: "Protein", value: "35 gram", tint: "#fff7a9" },
  { label: "Fat", value: "32 gram", tint: "#ffc8dd" },
];

const OnBoardingScreen = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();
  const { completeOnboarding } = useAuth();
  const isCompact = width < 360;

  const handleGetStarted = async () => {
    await completeOnboarding();
    navigation.replace("MainTabs", {
      screen: "HomeTab",
      params: { screen: "Home" },
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/onBoarding-page-background-image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoMark}>
              <Ionicons name="restaurant" size={34} color="#111" />
            </View>
            <Text style={[styles.title, isCompact && styles.titleCompact]}>
              Delicious{"\n"}Food Made{"\n"}Easy
            </Text>
          </View>

          <View style={styles.nutritionRow}>
            {nutrition.map((item, index) => (
              <View
                key={item.label}
                style={[
                  styles.nutritionCard,
                  { backgroundColor: item.tint },
                  index === 1 && styles.nutritionCardRaised,
                ]}
              >
                <Text style={styles.nutritionLabel}>{item.label}</Text>
                <Text style={styles.nutritionValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.foodStage}>
            <View style={styles.plate}>
              <Text style={styles.foodEmoji}>🍗</Text>
            </View>
            <View style={styles.saveBadge}>
              <Text style={styles.saveSmall}>Save</Text>
              <Text style={styles.saveBig}>50%</Text>
            </View>
            <View style={styles.pureBadge}>
              <Text style={styles.pureText}>100%{"\n"}Pure</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color="#2f2923" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.86}
              style={styles.cta}
              onPress={handleGetStarted}
            >
              <Text style={styles.ctaText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 24,
    paddingTop: 18,
  },
  header: {
    alignItems: "center",
    marginTop: 22,
  },
  logoMark: {
    alignItems: "center",
    height: 44,
    justifyContent: "center",
    marginBottom: 8,
    width: 44,
  },
  title: {
    color: "#111",
    fontSize: 48,
    fontWeight: "900",
    lineHeight: 58,
    textAlign: "center",
  },
  titleCompact: {
    fontSize: 40,
    lineHeight: 48,
  },
  nutritionRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    marginTop: 20,
  },
  nutritionCard: {
    borderColor: "#fff",
    borderRadius: 18,
    borderWidth: 2,
    minWidth: 92,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  nutritionCardRaised: {
    marginTop: 40,
  },
  nutritionLabel: {
    color: "#2f2923",
    fontSize: 16,
    fontWeight: "800",
  },
  nutritionValue: {
    color: "#665445",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 10,
  },
  foodStage: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    minHeight: 280,
  },
  plate: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#f1f0dd",
    borderRadius: 140,
    borderWidth: 12,
    height: 280,
    justifyContent: "center",
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.16,
    shadowRadius: 30,
    width: 280,
  },
  foodEmoji: {
    fontSize: 144,
  },
  saveBadge: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 46,
    height: 92,
    justifyContent: "center",
    position: "absolute",
    right: 12,
    top: 20,
    width: 92,
  },
  saveSmall: {
    color: "#2f2923",
    fontSize: 17,
    fontWeight: "800",
  },
  saveBig: {
    color: "#ff7a1a",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 2,
  },
  pureBadge: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 38,
    bottom: 12,
    height: 76,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    width: 76,
  },
  pureText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 20,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    marginTop: 22,
  },
  backButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#f0e5d4",
    borderRadius: 30,
    borderWidth: 3,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
  cta: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderColor: "#ffd2a4",
    borderRadius: 30,
    borderWidth: 4,
    flex: 1,
    height: 60,
    justifyContent: "center",
    shadowColor: "#ff7a1a",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.26,
    shadowRadius: 18,
    elevation: 6,
  },
  ctaText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },
});
