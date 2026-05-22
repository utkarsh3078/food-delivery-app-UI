import { Ionicons } from "@expo/vector-icons";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { restaurants } from "../data/restaurants";
import type { MainTabParamList } from "../types/navigation";

type Props = BottomTabScreenProps<MainTabParamList, "Search">;

const SearchScreen = ({ navigation }: Props) => {
  const [query, setQuery] = useState("");

  const filteredRestaurants = useMemo(
    () =>
      restaurants.filter((restaurant) =>
        `${restaurant.name} ${restaurant.category}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Find your cravings</Text>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#75614d" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search burger, seafood, dessert..."
            placeholderTextColor="#9d8975"
            style={styles.input}
          />
        </View>

        {filteredRestaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            activeOpacity={0.84}
            style={styles.resultCard}
            onPress={() =>
              navigation.navigate("HomeTab", {
                screen: "RestaurantDetail",
                params: {
                  id: restaurant.id,
                  restaurantName: restaurant.name,
                  price: restaurant.price,
                },
              })
            }
          >
            <View
              style={[
                styles.resultImage,
                { backgroundColor: restaurant.accent },
              ]}
            >
              <Text style={styles.foodEmoji}>{restaurant.emoji}</Text>
            </View>
            <View style={styles.resultCopy}>
              <Text style={styles.resultName}>{restaurant.name}</Text>
              <Text style={styles.resultMeta}>
                {restaurant.category} • {restaurant.distance}
              </Text>
            </View>
            <Text style={styles.resultPrice}>
              ${restaurant.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  content: {
    paddingBottom: 130,
    paddingHorizontal: 22,
    paddingTop: 16,
  },
  title: {
    color: "#21160f",
    fontSize: 32,
    fontWeight: "900",
  },
  searchBox: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ffe2c2",
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    height: 54,
    marginTop: 18,
    paddingHorizontal: 16,
  },
  input: {
    color: "#21160f",
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
  },
  resultCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    flexDirection: "row",
    gap: 14,
    marginTop: 14,
    padding: 12,
    shadowColor: "#7d451f",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 3,
  },
  resultImage: {
    alignItems: "center",
    borderRadius: 16,
    height: 64,
    justifyContent: "center",
    width: 64,
  },
  foodEmoji: {
    fontSize: 36,
  },
  resultCopy: {
    flex: 1,
  },
  resultName: {
    color: "#21160f",
    fontSize: 16,
    fontWeight: "900",
  },
  resultMeta: {
    color: "#866f5a",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 5,
  },
  resultPrice: {
    color: "#21160f",
    fontSize: 16,
    fontWeight: "900",
  },
});
