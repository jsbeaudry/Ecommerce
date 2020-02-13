import React, { Component } from "react";

import { TouchableOpacity, Image, Text, View, Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;

const formatNumber = num =>
  `$${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;

import { scale, verticalScale } from "react-native-size-matters";

export default class Card13 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      image: this.props.image
    };
  }
  render() {
    return (
      <View
        style={{
          margin: scale(10),
          alignSelf: "flex-end",
          width: screenWidth - scale(80),
          height: verticalScale(130),
          shadowColor: "#000",
          shadowOpacity: 0.16,
          borderRadius: 12,
          elevation: 2,
          shadowRadius: 4,
          shadowOffset: {
            height: 2,
            width: 2
          },
          backgroundColor: "#ffffff",
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={this.props.image}
            borderRadius={23}
            style={{
              borderRadius: 23,
              width: verticalScale(98),
              height: verticalScale(98),
              marginLeft: -verticalScale(98 / 2),
              alignSelf: "center"
            }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              padding: 10
            }}
          >
            <Text
              style={{
                height: verticalScale(20),
                color: "#404852",
                width: 190,
                fontSize: scale(12),
                fontWeight: "700",
                letterSpacing: -0.36
              }}
            >
              {this.props.title}
            </Text>
            <Text
              style={{
                height: 16,
                color: "#adb3bf",
                fontSize: scale(12),
                fontWeight: "400",
                letterSpacing: -0.29,
                lineHeight: verticalScale(16),
                marginTop: scale(10),
                marginBottom: scale(10)
              }}
            >
              {this.props.subTitle}
            </Text>
            <Text
              style={{
                height: verticalScale(22),
                color: "#535bfe",
                fontSize: scale(12),
                fontWeight: "bold",
                letterSpacing: -0.29,
                lineHeight: verticalScale(22)
              }}
            >
              {formatNumber(this.props.price * this.state.count)}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            width: scale(100),
            height: verticalScale(30),
            borderRadius: 15,
            backgroundColor: "#f3f5f9",
            position: "absolute",
            bottom: verticalScale(20),
            right: scale(16),
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              height: verticalScale(30),
              width: 40,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              if (this.state.count > 0) {
                this.setState({ count: this.state.count - 1 });
              }
            }}
          >
            <Text
              sstyle={{
                height: verticalScale(10),
                width: scale(10),
                backgroundColor: "#535bfe"
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              width: scale(20),
              color: "#535bfe",
              fontSize: scale(15),
              fontWeight: "500",
              letterSpacing: -0.36,
              lineHeight: scale(22),
              textAlign: "center"
            }}
          >
            {this.state.count}
          </Text>
          <TouchableOpacity
            style={{
              height: verticalScale(30),
              width: 40,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              if (this.state.count < 20) {
                this.setState({ count: this.state.count + 1 });
              }
            }}
          >
            <Text
              sstyle={{
                height: verticalScale(10),
                width: scale(10),
                backgroundColor: "#535bfe"
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
