import React from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";

import { screenHeight, screenWidth } from "../utils/variables";

import FloatButton from "../components/floatButton";

import CollectionItem from "../components/collectionItem";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <FloatButton goTo={() => navigation.navigate("Bags")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0
  }
});
