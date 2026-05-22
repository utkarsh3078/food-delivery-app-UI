import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../context/CartContext";

const OrdersScreen = () => {
  const { cartCount, cartItems, total } = useCart();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Orders</Text>
        <Text style={styles.subtitle}>
          Your Orders tab shows a badge whenever the cart has food inside.
        </Text>

        <View style={styles.summaryCard}>
          <Ionicons name="bag-check-outline" size={30} color="#ff7a1a" />
          <View>
            <Text style={styles.summaryLabel}>Current cart</Text>
            <Text style={styles.summaryValue}>
              {cartCount} item{cartCount === 1 ? "" : "s"} • $
              {total.toFixed(2)}
            </Text>
          </View>
        </View>

        {cartItems.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>No active orders yet</Text>
            <Text style={styles.emptyText}>
              Add something from the Home tab and the badge will appear here.
            </Text>
          </View>
        ) : (
          cartItems.map((item) => (
            <View key={item.id} style={styles.orderCard}>
              <View style={styles.orderIcon}>
                <Ionicons name="fast-food" size={22} color="#fff" />
              </View>
              <View style={styles.orderCopy}>
                <Text style={styles.orderName}>{item.name}</Text>
                <Text style={styles.orderMeta}>Qty {item.quantity}</Text>
              </View>
              <Text style={styles.orderPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;

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
    fontSize: 34,
    fontWeight: "900",
  },
  subtitle: {
    color: "#75614d",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 22,
    marginTop: 8,
  },
  summaryCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ffe2c2",
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    marginTop: 22,
    padding: 18,
  },
  summaryLabel: {
    color: "#947c66",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  summaryValue: {
    color: "#21160f",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 4,
  },
  emptyCard: {
    alignItems: "center",
    backgroundColor: "#fff1df",
    borderRadius: 18,
    marginTop: 16,
    padding: 24,
  },
  emptyTitle: {
    color: "#21160f",
    fontSize: 18,
    fontWeight: "900",
  },
  emptyText: {
    color: "#75614d",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    marginTop: 8,
    textAlign: "center",
  },
  orderCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
    padding: 14,
  },
  orderIcon: {
    alignItems: "center",
    backgroundColor: "#ff7a1a",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  orderCopy: {
    flex: 1,
  },
  orderName: {
    color: "#21160f",
    fontSize: 15,
    fontWeight: "900",
  },
  orderMeta: {
    color: "#8d7761",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 3,
  },
  orderPrice: {
    color: "#21160f",
    fontSize: 15,
    fontWeight: "900",
  },
});
