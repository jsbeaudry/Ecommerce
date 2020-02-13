import React from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  TouchableOpacity
} from "react-native";

import { screenHeight, screenWidth } from "../utils/variables";

import ProductItem from "../components/productItem";

import FloatButton from "../components/floatButton";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <FlatList
          data={[
            {
              image: require("../images/image11.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 26.84",
              isLike: true
            },
            {
              image: require("../images/image12.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 37.43",
              isLike: false
            },
            {
              image: require("../images/image13.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 28.47",
              isLike: false
            },
            {
              image: require("../images/image14.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 17.34",
              isLike: true
            },
            {
              image: require("../images/image15.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 26.84",
              isLike: true
            },
            {
              image: require("../images/image16.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 37.43",
              isLike: false
            },
            {
              image: require("../images/image13.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 28.47",
              isLike: false
            },
            {
              image: require("../images/image14.png"),
              name: "Lorem Socks Ipsum",
              price: "$ 17.34",
              isLike: true
            }
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
            <TouchableOpacity onPress={() => navigation.navigate("Details")}>
              <ProductItem
                image={item.image}
                height={screenHeight / 4}
                width={screenWidth / 2}
                name={item.name}
                price={item.price}
                isLike={item.isLike}
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
