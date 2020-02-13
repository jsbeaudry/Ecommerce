import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View
} from "react-native";

import { screenHeight, screenWidth } from "../utils/variables";

import FloatButton from "../components/floatButton";

import CollectionItem from "../components/collectionItem";

export default function CartItem({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <CollectionItem
            image={require("../images/image1.png")}
            height={screenHeight / 2}
            width={screenWidth}
            text={"Autumn ‘18"}
            textColor={"#000000"}
          />
        </TouchableOpacity>

        <FlatList
          data={[
            { image: require("../images/image2.png"), text: "winter ‘19" },
            { image: require("../images/image3.png"), text: "spring ‘19" },
            { image: require("../images/image4.png"), text: "summer ‘19" },
            { image: require("../images/image5.png"), text: "Autumn ‘19" }
          ]}
          style={{
            flex: 1,
            width: screenWidth,
            marginVertical: 10,
            alignSelf: "center"
          }}
          numColumns={2}
          keyExtractor={item => JSON.stringify(item)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <CollectionItem
                image={item.image}
                height={screenHeight / 3 - 40}
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
