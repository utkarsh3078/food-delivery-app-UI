import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../context/CartContext";
import { restaurants } from "../data/restaurants";
import type { RestaurantStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<
  RestaurantStackParamList,
  "RestaurantDetail"
>;

const DetailScreen = ({ navigation, route }: Props) => {
  const { addToCart } = useCart();
  const fallbackRestaurant = restaurants[0];
  const matchedRestaurant =
    restaurants.find((restaurant) => restaurant.id === route.params.id) ??
    fallbackRestaurant;
  const restaurant = {
    ...matchedRestaurant,
    name: route.params.restaurantName ?? matchedRestaurant.name,
    price: route.params.price ?? matchedRestaurant.price,
  };

  const handleBuyNow = () => {
    addToCart(restaurant);
    navigation.navigate("Cart", {
      restaurantName: restaurant.name,
      price: restaurant.price,
    });
  };

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.pureBadge}>
            <Text style={styles.pureText}>100% Pure</Text>
          </View>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{restaurant.discount}</Text>
          </View>
          <Text style={styles.splash}>✦ ✦ ✦</Text>
          <View style={[styles.foodCircle, { backgroundColor: restaurant.accent }]}>
            <Text style={styles.foodEmoji}>{restaurant.emoji}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.titleRow}>
            <View style={styles.titleCopy}>
              <Text style={styles.title}>{restaurant.name}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={18} color="#2f2923" />
                <Text style={styles.locationText}>{restaurant.location}</Text>
              </View>
            </View>
            <View style={styles.priceBlock}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>${restaurant.price.toFixed(2)}</Text>
            </View>
          </View>

          <Text style={styles.shortDescription}>{restaurant.description}</Text>

          <View style={styles.nutritionRow}>
            {restaurant.nutrition.map((item) => (
              <View
                key={item.label}
                style={[styles.nutritionCard, { backgroundColor: item.tint }]}
              >
                <Text style={styles.nutritionLabel}>{item.label}</Text>
                <Text style={styles.nutritionValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            Freshly prepared, packed warm and delivered quickly. This dish is a
            crowd favorite for a reason: bold flavor, generous portions and a
            satisfying finish.
          </Text>

          <View style={styles.actionsRow}>
            <TouchableOpacity
              activeOpacity={0.82}
              style={styles.secondaryButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={19} color="#ff7a1a" />
              <Text style={styles.secondaryText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.86}
              style={styles.primaryButton}
              onPress={handleBuyNow}
            >
              <Text style={styles.primaryText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  content: {
    paddingBottom: 28,
  },
  hero: {
    alignItems: "center",
    backgroundColor: "#fff8ec",
    minHeight: 330,
    justifyContent: "center",
    overflow: "hidden",
  },
  pureBadge: {
    backgroundColor: "#fff",
    borderRadius: 999,
    left: 28,
    paddingHorizontal: 16,
    paddingVertical: 9,
    position: "absolute",
    top: 44,
    transform: [{ rotate: "-12deg" }],
    zIndex: 3,
  },
  pureText: {
    color: "#21160f",
    fontSize: 15,
    fontWeight: "900",
  },
  discountBadge: {
    backgroundColor: "#fff",
    borderRadius: 999,
    bottom: 54,
    paddingHorizontal: 18,
    paddingVertical: 10,
    position: "absolute",
    right: 24,
    transform: [{ rotate: "-10deg" }],
    zIndex: 3,
  },
  discountText: {
    color: "#21160f",
    fontSize: 15,
    fontWeight: "900",
  },
  splash: {
    color: "#ff7a1a",
    fontSize: 42,
    fontWeight: "900",
    opacity: 0.36,
    position: "absolute",
    top: 42,
  },
  foodCircle: {
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 118,
    borderWidth: 10,
    height: 236,
    justifyContent: "center",
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.18,
    shadowRadius: 30,
    width: 236,
  },
  foodEmoji: {
    fontSize: 132,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    marginTop: -26,
    padding: 24,
  },
  titleRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  titleCopy: {
    flex: 1,
  },
  title: {
    color: "#21160f",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 36,
  },
  locationRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  locationText: {
    color: "#3d332b",
    fontSize: 15,
    fontWeight: "800",
  },
  priceBlock: {
    alignItems: "flex-end",
  },
  priceLabel: {
    color: "#9a8370",
    fontSize: 13,
    fontWeight: "800",
  },
  price: {
    color: "#21160f",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 4,
  },
  shortDescription: {
    color: "#6f5c4a",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 23,
    marginTop: 18,
  },
  nutritionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 22,
  },
  nutritionCard: {
    borderRadius: 16,
    flexGrow: 1,
    minWidth: "22%",
    paddingHorizontal: 12,
    paddingVertical: 13,
  },
  nutritionLabel: {
    color: "#21160f",
    fontSize: 13,
    fontWeight: "900",
  },
  nutritionValue: {
    color: "#4c4136",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 7,
  },
  sectionTitle: {
    color: "#21160f",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 26,
  },
  description: {
    color: "#75614d",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 24,
    marginTop: 10,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 26,
  },
  secondaryButton: {
    alignItems: "center",
    backgroundColor: "#fff1df",
    borderRadius: 16,
    flexDirection: "row",
    gap: 8,
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  secondaryText: {
    color: "#ff7a1a",
    fontSize: 16,
    fontWeight: "900",
  },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderRadius: 16,
    flex: 1,
    height: 56,
    justifyContent: "center",
    shadowColor: "#ff7a1a",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.26,
    shadowRadius: 18,
    elevation: 6,
  },
  primaryText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },
});
