import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity
} from "react-native";

import { screenWidth } from "../utils/variables";

import Slide from "../components/slide";
import SwipeablePanel from "rn-swipeable-panel";

import { Ionicons } from "@expo/vector-icons";

const textSize = screenWidth * 0.05;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false,
      tabSelected: 0,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      selectSize: -1,
      colors: [
        "#2f1b44",
        "#892c41",
        "#1a2c5b",
        "#153b44",
        "#352f44",
        "#fd89dd",
        "#f7b32d"
      ],
      selectColor: -1,
      isLike: true
    };
  }

  selectTab = id => {
    this.setState({ tabSelected: id });
  };
  selectSize = id => {
    this.setState({ selectSize: id });
  };
  selectColor = id => {
    this.setState({ selectColor: id });
  };
  setLike = () => {
    this.setState(prevState => ({ isLike: !prevState.isLike }));
  };
  componentDidMount = () => {
    // this.openPanel();
  };

  openPanel = () => {
    this.setState({ swipeablePanelActive: true });
  };

  closePanel = () => {
    this.setState({ swipeablePanelActive: false });
    // setTimeout(() => {
    //   this.openPanel();
    // }, 1000);
  };
  render() {
    const {
      isLike,
      tabSelected,
      sizes,
      colors,
      selectColor,
      selectSize
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{}}>
          {/* -------------------------------------------------------------------------- */
          /*                                    Slide                                   */
          /* -------------------------------------------------------------------------- */}

          <Slide
            array={[
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
            height={350}
          />

          {/*  -------------------------------------------------------------------------- */
          /*                               Name and price                               */
          /* -------------------------------------------------------------------------- */}

          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontSize: textSize / 1.1,
                fontWeight: "bold",
                marginVertical: 7,
                color: "#000"
              }}
            >
              {"AX Paris Short Sleeve"}
            </Text>
            <Text
              style={{
                fontSize: textSize / 1.1,
                color: "#0070D6",
                marginVertical: 5,
                fontWeight: "bold"
              }}
            >
              {"$ 25.67"}
            </Text>
            <TouchableOpacity
              onPress={() => this.setLike()}
              style={{ position: "absolute", top: 20, right: 15 }}
            >
              <Ionicons
                name={isLike ? "ios-heart" : "ios-heart-empty"}
                size={25}
                color={"#0070D6"}
              />
            </TouchableOpacity>
          </View>

          {/* -------------------------------------------------------------------------- */
          /*                                  Tabs head                                 */
          /* -------------------------------------------------------------------------- */}
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity
              onPress={() => this.selectTab(0)}
              style={{
                borderBottomColor: "#0070D6",
                borderBottomWidth: tabSelected == 0 ? 3 : 0,
                height: 30,
                flex: 1,
                margin: 10,
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: textSize * 0.6 }}>
                INFO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectTab(1)}
              style={{
                borderBottomColor: "#0070D6",
                borderBottomWidth: tabSelected == 1 ? 3 : 0,
                height: 30,
                flex: 1,
                margin: 10,

                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: textSize * 0.6 }}>
                SIZE CHART
              </Text>
            </TouchableOpacity>
          </View>

          {/* -------------------------------------------------------------------------- */
          /*                                Tabs details                                */
          /* -------------------------------------------------------------------------- */}
          {tabSelected == 0 ? (
            <View
              style={{
                flex: 1,
                padding: 20
              }}
            >
              <Text
                style={{
                  fontSize: textSize * 0.7,
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                MATERIALS
              </Text>
              <Text
                style={{
                  fontSize: textSize * 0.6,
                  lineHeight: textSize,
                  color: "#999999"
                }}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc."
                }
              </Text>

              <Text
                style={{
                  fontSize: textSize * 0.7,
                  fontWeight: "bold",
                  marginTop: 20,
                  marginBottom: 10
                }}
              >
                WASH INSTRUCTION
              </Text>
              <Text
                style={{
                  fontSize: textSize * 0.6,
                  lineHeight: textSize,
                  color: "#999999",
                  marginBottom: 60
                }}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc."
                }
              </Text>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                padding: 20,
                marginBottom: 70
              }}
            >
              <Text
                style={{
                  fontSize: textSize * 0.7,
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                COLORS
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                {colors.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => this.selectColor(index)}
                    key={item}
                    style={{
                      height: 40,
                      width: 40,
                      marginRight: 5,
                      borderRadius: 20,
                      borderColor: "#999",
                      borderWidth: selectColor == index ? 4 : 0,
                      backgroundColor: item
                    }}
                  />
                ))}
              </View>

              <Text
                style={{
                  fontSize: textSize * 0.7,
                  fontWeight: "bold",
                  marginBottom: 10,
                  marginTop: 20
                }}
              >
                SIZES
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                {sizes.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => this.selectSize(index)}
                    key={item}
                    style={{
                      height: 46,
                      width: 46,
                      marginRight: 5,
                      borderRadius: 23,
                      borderColor: "#444",
                      borderWidth: selectSize == index ? 4 : 1,
                      backgroundColor: "#fff",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: textSize * 0.5,
                        fontWeight: "bold",
                        margin: 10
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </ScrollView>

        {/* -------------------------------------------------------------------------- */
        /*                             Add to cart button                             */
        /* -------------------------------------------------------------------------- */}
        <TouchableOpacity
          onPress={() => {
            this.openPanel();
          }}
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
            {"ADD TO BAG"}
          </Text>
        </TouchableOpacity>
        <SwipeablePanel
          fullWidth
          isActive={this.state.swipeablePanelActive}
          onClose={this.closePanel}
          onPressCloseButton={this.closePanel}
        >
          <View
            style={{
              height: 300,
              width: screenWidth,
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Bags");
              }}
              style={{
                height: 50,
                width: 220,
                borderRadius: 25,
                backgroundColor: "#0070D6",
                alignItems: "center",
                justifyContent: "center"
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
                {"GO TO THE BAG"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{
                height: 50,
                width: 220,
                borderRadius: 25,
                backgroundColor: "#444",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20
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
                {"CONTINUE SHOPPING"}
              </Text>
            </TouchableOpacity>
          </View>
        </SwipeablePanel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0
  }
});
