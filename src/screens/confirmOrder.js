import React from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from "react-native";

import { screenHeight, screenWidth } from "../utils/variables";

import { Ionicons } from "@expo/vector-icons";

import CollectionItem from "../components/collectionItem";
const textSize = screenWidth * 0.06;

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={"ios-checkmark-circle"}
        style={{}}
        size={100}
        color={"#000"}
      />
      <Text style={{ fontSize: 22, marginBottom: 10 }}>{"Thank you"}</Text>
      <Text style={{ fontSize: 17 }}>{"Your order has been placed"}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Tabs")}
        style={{
          height: 50,
          width: 200,
          borderRadius: 25,
          backgroundColor: "#0070D6",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          alignSelf: "center"
        }}
      >
        <Text
          style={{
            fontSize: textSize * 0.7,
            fontWeight: "bold",
            margin: 10,
            color: "#fff"
          }}
        >
          {"Got to home page"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});
