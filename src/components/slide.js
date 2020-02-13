import * as React from "react";

import { View, Image } from "react-native";

import Swiper from "react-native-web-swiper";

import { screenWidth } from "../utils/variables";
export default class App extends React.Component {
  render() {
    const { height } = this.props;
    return (
      <View style={{ height: height }}>
        <Swiper
          from={1}
          minDistanceForAction={0.1}
          controlsProps={{
            dotsTouchable: true,
            prevPos: "left",
            nextPos: "right",
            nextTitle: "",
            prevTitle: ""
          }}
        >
          {this.props.array.map((item, index) => (
            <View key={index}>
              <Image
                source={item.image}
                style={{
                  width: screenWidth,
                  height: height,
                  alignSelf: "center"
                }}
              />
              <View
                style={{
                  width: screenWidth,
                  height: height,
                  alignSelf: "center",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  position: "absolute"
                }}
              />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}
