import React from "react";

import { Text, Image, View, TouchableOpacity } from "react-native";

import { screenWidth } from "../utils/variables";

import { Ionicons } from "@expo/vector-icons";

const textSize = screenWidth * 0.05;

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLike: this.props.isLike };
  }

  setLike = () => {
    this.setState(prevState => ({ isLike: !prevState.isLike }));
  };
  render() {
    const { width, height, image, price, name, textColor } = this.props;
    const { isLike } = this.state;
    return (
      <View style={{ margin: 10 }}>
        <Image
          source={image}
          style={{
            width: width - 20,
            height: height,
            alignSelf: "center",
            borderRadius: 10
          }}
        />
        <View
          style={{
            width: width - 20,
            height: height,
            alignSelf: "center",
            borderRadius: 10,
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "absolute"
          }}
        />
        <View>
          <Text
            style={{
              fontSize: textSize / 1.2,
              fontWeight: "bold",
              marginVertical: 7,
              color: textColor
            }}
          >
            {price}
          </Text>
          <Text
            style={{
              fontSize: textSize / 1.4,
              color: textColor
            }}
          >
            {name}
          </Text>
          <TouchableOpacity
            onPress={() => this.setLike()}
            style={{ position: "absolute", top: 5, right: 5 }}
          >
            <Ionicons
              name={isLike ? "ios-heart" : "ios-heart-empty"}
              size={25}
              color={"#0070D6"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ProductItem;
