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
            { image: require("../images/image6.png"), text: "WHAT’S NEW" },
            { image: require("../images/image7.png"), text: "TOP WEAR" },
            { image: require("../images/image8.png"), text: "FOOTWEAR" },
            { image: require("../images/image9.png"), text: "ACTIVE WEAR" },
            { image: require("../images/image10.png"), text: "ACCESSORIES" }
          ]}
          style={{
            flex: 1,
            width: screenWidth,
            marginVertical: 0,
            alignSelf: "center"
          }}
          keyExtractor={item => JSON.stringify(item)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <CollectionItem
                image={item.image}
                height={screenHeight / 6}
                width={screenWidth}
                text={item.text}
                textColor={"#000000"}
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
