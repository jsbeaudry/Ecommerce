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
      <ScrollView style={{}}>
        <FlatList
          data={[
            { image: require("../images/nike.jpeg"), text: "Nike" },
            { image: require("../images/puma.jpeg"), text: "Puma" },
            { image: require("../images/adidas.jpeg"), text: "Adidas" },
            { image: require("../images/levis.jpeg"), text: "Levi's" },
            { image: require("../images/nike.jpeg"), text: "Nike" },
            { image: require("../images/puma.jpeg"), text: "Puma" },
            { image: require("../images/adidas.jpeg"), text: "Adidas" },
            { image: require("../images/levis.jpeg"), text: "Levi's" }
          ]}
          style={{
            flex: 1,
            width: screenWidth,
            marginVertical: 10,
            alignSelf: "center"
          }}
          numColumns={2}
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <CollectionItem
                image={item.image}
                height={screenHeight / 5}
                width={screenWidth / 2}
                text={item.text}
                textColor={"#ffffff"}
                transparence={0.6}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
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
