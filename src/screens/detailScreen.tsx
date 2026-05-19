import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const detailScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { username } = route.params;
  return (
    <View>
      <Text>detailScreen</Text>
      <Text>{username}</Text>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  );
};

export default detailScreen;

const styles = StyleSheet.create({});
