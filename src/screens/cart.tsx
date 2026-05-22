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
import type { RestaurantStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RestaurantStackParamList, "Cart">;

const CartScreen = ({ navigation }: Props) => {
  const { cartItems, clearCart, total } = useCart();

  const handleCheckout = () => {
    clearCart();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Ready to eat?</Text>
        <Text style={styles.subtitle}>
          Review your cart, then reset the restaurant stack back to Home after
          checkout.
        </Text>

        {cartItems.length === 0 ? (
          <View style={styles.emptyCard}>
            <Ionicons name="cart-outline" size={42} color="#ff7a1a" />
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptyText}>
              Go back and add a meal to see the Orders tab badge light up.
            </Text>
            <TouchableOpacity
              activeOpacity={0.84}
              style={styles.secondaryButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.secondaryText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartRow}>
                <View style={styles.cartIcon}>
                  <Ionicons name="fast-food" size={24} color="#fff" />
                </View>
                <View style={styles.cartCopy}>
                  <Text style={styles.cartName}>{item.name}</Text>
                  <Text style={styles.cartMeta}>Qty {item.quantity}</Text>
                </View>
                <Text style={styles.cartPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            ))}

            <View style={styles.totalCard}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.86}
              style={styles.cta}
              onPress={handleCheckout}
            >
              <Text style={styles.ctaText}>Checkout & Reset Stack</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff8ec",
  },
  content: {
    padding: 22,
    paddingBottom: 34,
  },
  title: {
    color: "#21160f",
    fontSize: 32,
    fontWeight: "900",
  },
  subtitle: {
    color: "#75614d",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 22,
    marginTop: 8,
  },
  emptyCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 22,
    marginTop: 26,
    padding: 26,
  },
  emptyTitle: {
    color: "#21160f",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 12,
  },
  emptyText: {
    color: "#75614d",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    marginTop: 8,
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#fff1df",
    borderRadius: 14,
    marginTop: 18,
    paddingHorizontal: 22,
    paddingVertical: 13,
  },
  secondaryText: {
    color: "#ff7a1a",
    fontSize: 15,
    fontWeight: "900",
  },
  cartRow: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    gap: 14,
    marginTop: 14,
    padding: 14,
  },
  cartIcon: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  cartCopy: {
    flex: 1,
  },
  cartName: {
    color: "#21160f",
    fontSize: 16,
    fontWeight: "900",
  },
  cartMeta: {
    color: "#8d7761",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4,
  },
  cartPrice: {
    color: "#21160f",
    fontSize: 17,
    fontWeight: "900",
  },
  totalCard: {
    alignItems: "center",
    backgroundColor: "#fff1df",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    padding: 18,
  },
  totalLabel: {
    color: "#705a45",
    fontSize: 15,
    fontWeight: "900",
  },
  totalValue: {
    color: "#21160f",
    fontSize: 26,
    fontWeight: "900",
  },
  cta: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderRadius: 16,
    height: 58,
    justifyContent: "center",
    marginTop: 18,
    shadowColor: "#ff7a1a",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.26,
    shadowRadius: 18,
    elevation: 6,
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
});
