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
import { categories, restaurants } from "../data/restaurants";
import type { RestaurantStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RestaurantStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const featuredRestaurant = restaurants[0];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.locationRow}>
            <View style={styles.locationIcon}>
              <Ionicons name="location-outline" size={22} color="#2f2923" />
            </View>
            <View style={styles.locationCopy}>
              <Text style={styles.locationLabel}>Location</Text>
              <Text style={styles.locationText}>New York, US</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>DU</Text>
            </View>
          </View>

          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#6f5c4a" />
            <Text style={styles.searchText}>Search fresh food...</Text>
            <Ionicons name="options-outline" size={20} color="#2f2923" />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryItem}>
              <View
                style={[
                  styles.categoryIcon,
                  { backgroundColor: category.tint },
                ]}
              >
                <Text style={styles.categoryEmoji}>{category.emoji}</Text>
              </View>
              <Text style={styles.categoryText}>{category.title}</Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          activeOpacity={0.86}
          style={styles.banner}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              id: featuredRestaurant.id,
              restaurantName: featuredRestaurant.name,
              price: featuredRestaurant.price,
            })
          }
        >
          <View>
            <Text style={styles.bannerEyebrow}>Today special</Text>
            <Text style={styles.bannerTitle}>{featuredRestaurant.name}</Text>
            <Text style={styles.bannerPrice}>
              From ${featuredRestaurant.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.bannerFood}>
            <Text style={styles.bannerEmoji}>{featuredRestaurant.emoji}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Food</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <View style={styles.grid}>
          {restaurants.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              activeOpacity={0.84}
              style={styles.foodCard}
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  id: restaurant.id,
                  restaurantName: restaurant.name,
                  price: restaurant.price,
                })
              }
            >
              <View style={styles.discountPill}>
                <Text style={styles.discountText}>{restaurant.discount}</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.heartButton}>
                <Ionicons name="heart-outline" size={20} color="#2f2923" />
              </TouchableOpacity>

              <View
                style={[
                  styles.foodImage,
                  { backgroundColor: restaurant.accent },
                ]}
              >
                <Text style={styles.foodEmoji}>{restaurant.emoji}</Text>
              </View>

              <Text style={styles.foodName}>{restaurant.name}</Text>
              <View style={styles.foodMetaRow}>
                <Text style={styles.foodPrice}>
                  ${restaurant.price.toFixed(2)}
                </Text>
                <View style={styles.ratingPill}>
                  <Ionicons name="star" size={12} color="#ffb321" />
                  <Text style={styles.ratingText}>{restaurant.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  content: {
    paddingBottom: 132,
  },
  hero: {
    backgroundColor: "#b8df8d",
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    paddingBottom: 28,
    paddingHorizontal: 22,
    paddingTop: 12,
  },
  locationRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  locationIcon: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.68)",
    borderRadius: 26,
    height: 52,
    justifyContent: "center",
    width: 52,
  },
  locationCopy: {
    flex: 1,
  },
  locationLabel: {
    color: "#5d6a3c",
    fontSize: 14,
    fontWeight: "700",
  },
  locationText: {
    color: "#21160f",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 2,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#ff8a3d",
    borderRadius: 24,
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  avatarText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },
  searchBar: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderColor: "rgba(255,255,255,0.82)",
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    height: 56,
    marginTop: 24,
    paddingHorizontal: 16,
  },
  searchText: {
    color: "#6f5c4a",
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
  },
  categories: {
    gap: 18,
    paddingHorizontal: 22,
    paddingTop: 22,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIcon: {
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 34,
    borderWidth: 3,
    height: 68,
    justifyContent: "center",
    width: 68,
  },
  categoryEmoji: {
    fontSize: 34,
  },
  categoryText: {
    color: "#21160f",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 8,
  },
  banner: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 22,
    marginTop: 24,
    padding: 18,
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  bannerEyebrow: {
    color: "#ff7a1a",
    fontSize: 13,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  bannerTitle: {
    color: "#21160f",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 26,
    marginTop: 6,
    maxWidth: 190,
  },
  bannerPrice: {
    color: "#6f5c4a",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 8,
  },
  bannerFood: {
    alignItems: "center",
    backgroundColor: "#ffe4ad",
    borderRadius: 46,
    height: 92,
    justifyContent: "center",
    width: 92,
  },
  bannerEmoji: {
    fontSize: 52,
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
    paddingHorizontal: 22,
  },
  sectionTitle: {
    color: "#21160f",
    fontSize: 22,
    fontWeight: "900",
  },
  seeAll: {
    color: "#7f6a55",
    fontSize: 14,
    fontWeight: "800",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    paddingHorizontal: 22,
    paddingTop: 16,
  },
  foodCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    minHeight: 228,
    padding: 14,
    position: "relative",
    width: "47.8%",
  },
  discountPill: {
    alignSelf: "flex-start",
    backgroundColor: "#fff6d8",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  discountText: {
    color: "#21160f",
    fontSize: 12,
    fontWeight: "900",
  },
  heartButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    height: 36,
    justifyContent: "center",
    position: "absolute",
    right: 10,
    top: 10,
    width: 36,
    zIndex: 2,
  },
  foodImage: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 52,
    height: 104,
    justifyContent: "center",
    marginTop: 12,
    width: 104,
  },
  foodEmoji: {
    fontSize: 58,
  },
  foodName: {
    color: "#21160f",
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 20,
    marginTop: 12,
  },
  foodMetaRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  foodPrice: {
    color: "#21160f",
    fontSize: 17,
    fontWeight: "900",
  },
  ratingPill: {
    alignItems: "center",
    backgroundColor: "#fff6d8",
    borderRadius: 999,
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  ratingText: {
    color: "#21160f",
    fontSize: 12,
    fontWeight: "900",
  },
});
