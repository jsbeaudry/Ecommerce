import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const FloatButton = ({ goTo }) => (
  <TouchableOpacity onPress={() => goTo()} style={styles.floatButton}>
    <FontAwesome5 name={"shopping-bag"} size={35} color={"#ffffff"} />
    <Text style={styles.floatButtonCounter}>{"6"}</Text>
  </TouchableOpacity>
);

export default FloatButton;
const styles = StyleSheet.create({
  floatButton: {
    width: 60,
    height: 60,
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#0070D6",
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  floatButtonCounter: {
    position: "absolute",
    bottom: 17,
    fontSize: 17,
    fontWeight: "bold",
    color: "#0070D6"
  }
});
