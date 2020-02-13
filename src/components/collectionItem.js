import React from "react";

import { Text, Image, View } from "react-native";

import { screenWidth } from "../utils/variables";

const textSize = screenWidth * 0.06;

const CollectionItem = ({
  width,
  height,
  image,
  text,
  textColor,
  transparence
}) => (
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
        backgroundColor: "rgb(0,0,0)",
        opacity: transparence ? transparence : 0.3,
        position: "absolute"
      }}
    />
    <Text
      style={{
        position: "absolute",
        margin: 20,
        fontSize: textSize,
        bottom: 10,
        fontWeight: "bold",
        left: 10,
        color: textColor
      }}
    >
      {text}
    </Text>
  </View>
);

export default CollectionItem;
