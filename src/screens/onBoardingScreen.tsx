import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

const features = ["Fast delivery", "Fresh meals", "Easy tracking"];

const OnBoardingScreen = () => {
  const { width } = useWindowDimensions();
  const isCompact = width < 360;
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/onBoarding-page-background-image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.brandBadge}>
              <View style={styles.brandIcon}>
                <Text style={styles.brandIconText}>F</Text>
              </View>
              <Text style={styles.brandText}>Food delivery</Text>
            </View>

            <Text style={[styles.title, isCompact && styles.titleCompact]}>
              Delicious food,{"\n"}delivered fast.
            </Text>
            <Text style={styles.subtitle}>
              Order fresh meals from your favorite local kitchens and track
              every delivery to your door.
            </Text>
          </View>

          <View style={styles.bottomCard}>
            <View style={styles.featuresRow}>
              {features.map((feature) => (
                <View key={feature} style={styles.featurePill}>
                  <View style={styles.featureDot} />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            <View style={styles.cardCopy}>
              <Text style={styles.cardTitle}>Hungry?</Text>
              <Text style={styles.cardSubtitle}>
                Explore nearby restaurants and get your first order moving.
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.cta}
              onPress={() => navigation.navigate("Home" as never)}
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 22,
  },
  header: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    paddingTop: 12,
  },
  brandBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(255, 255, 255, 0.76)",
    borderColor: "rgba(255, 144, 73, 0.18)",
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 3,
  },
  brandIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ff8a3d",
    alignItems: "center",
    justifyContent: "center",
  },
  brandIconText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
  },
  brandText: {
    color: "#6d533a",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  title: {
    color: "#2a1d12",
    fontSize: 42,
    fontWeight: "800",
    lineHeight: 48,
    marginTop: 34,
    maxWidth: 340,
  },
  titleCompact: {
    fontSize: 36,
    lineHeight: 42,
  },
  subtitle: {
    color: "#6e5b46",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    marginTop: 16,
    maxWidth: 330,
  },
  bottomCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderColor: "rgba(255, 144, 73, 0.16)",
    borderWidth: 1,
    borderRadius: 50,
    padding: 18,
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.14,
    shadowRadius: 28,
    elevation: 8,
  },
  featuresRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  featurePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#fff7ec",
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  featureDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#ff8a3d",
  },
  featureText: {
    color: "#6a4d35",
    fontSize: 12,
    fontWeight: "700",
  },
  cardCopy: {
    marginTop: 18,
    marginBottom: 18,
  },
  cardTitle: {
    color: "#24170f",
    fontSize: 22,
    fontWeight: "800",
  },
  cardSubtitle: {
    color: "#705d49",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
  },
  cta: {
    height: 58,
    borderRadius: 8,
    backgroundColor: "#ff7a1a",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ff7a1a",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 6,
  },
  ctaText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
  },
});
