import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class UserThree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      image,
      name,
      title,
      textButton,
      onClicked,
      buttonStyle,
      textButtonStyle,
      block1Text1,
      block1Text2,
      block2Text1,
      block2Text2
    } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 50,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            margin: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            {block1Text1}
          </Text>
          <Text style={{ fontSize: 12, color: "#888", marginTop: 5 }}>
            {block1Text2}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              borderRadius: 50,
              width: 100,
              height: 100,
              backgroundColor: "#fff",
              shadowColor: "#777",
              shadowOpacity: 0.8,
              shadowRadius: 5,
              shadowOffset: {
                height: 1,
                width: 0
              }
            }}
          >
            <Image
              borderRadius={50}
              source={image}
              style={{
                borderRadius: 50,
                width: 100,
                height: 100,
                resizeMode: "cover"
              }}
            />
            <Text
              style={{
                fontSize: 19,
                marginTop: 15,
                fontWeight: "bold",
                alignSelf: "center",
                textAlign: "center",
                width: screenWidth - 100
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                width: 150,
                fontSize: 10,
                color: "#888",
                alignSelf: "center",
                textAlign: "center",
                marginTop: 5
              }}
            >
              {title}
            </Text>
            {textButton ? (
              <TouchableOpacity
                onPress={() => {
                  onClicked();
                }}
                style={[
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: 10,
                    marginLeft: 5
                  },
                  buttonStyle
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={textButtonStyle}>{textButton}</Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            margin: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            {" "}
            {block2Text1}{" "}
          </Text>
          <Text style={{ fontSize: 12, color: "#888", marginTop: 5 }}>
            {block2Text2}
          </Text>
        </View>
      </View>
    );
  }
}
