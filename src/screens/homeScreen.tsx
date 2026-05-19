import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const homeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>homeScreen</Text>
      <Button
        onPressIn={() =>
          navigation.navigate("Detail", { username: "chaicode" })
        }
      >
        View Details
      </Button>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
