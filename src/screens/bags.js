import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { screenWidth } from "../utils/variables";

const textSize = screenWidth * 0.06;

import CartItem from "../components/cartItem";

export default class App extends React.Component {
  state = {
    data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        image: require("../images/image11.png"),
        title: "Printemps automne mode casual",
        shop: "Amazon",
        price: 58.9
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        image: require("../images/image12.png"),
        title: "Pluz men Blazer ",
        shop: "Ebay",
        price: 23.5
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        image: require("../images/image13.png"),
        title: "Aponia Projekt Kapturem Męska",
        shop: "Aliexpress",
        price: 28.9
      },
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        image: require("../images/image11.png"),
        title: "Printemps automne mode casual",
        shop: "Amazon",
        price: 58.9
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        image: require("../images/image12.png"),
        title: "Pluz men Blazer ",
        shop: "Ebay",
        price: 23.5
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        image: require("../images/image13.png"),
        title: "Aponia Projekt Kapturem Męska",
        shop: "Aliexpress",
        price: 28.9
      }
    ]
  };
  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginBottom: index == data.length - 1 ? 70 : 0
              }}
            >
              <CartItem
                title={item.title}
                subTitle={item.shop}
                image={item.image}
                price={item.price}
              />
            </View>
          )}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Address")}
          style={{
            height: 50,
            width: 220,
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
            {"Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#fff",
    paddingHorizontal: 8
  }
});
