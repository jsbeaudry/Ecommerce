import React from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import Tabs from "./tabs";
import {
  Search,
  Details,
  Bags,
  Address,
  Payment,
  User,
  EditUser,
  Likes,
  ConfirmOrder,
  Authenticate
} from "../screens/index";

const StackNavigator = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Text
              style={{ fontSize: 17, fontWeight: "bold", marginHorizontal: 20 }}
            >
              WESELL
            </Text>
          </View>
        ),
        headerRight: (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <TouchableOpacity>
              <FontAwesome5
                name={"search"}
                style={{ marginHorizontal: 10 }}
                size={20}
                color={"#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Likes")}>
              <FontAwesome5
                name={"heart"}
                style={{ marginHorizontal: 10 }}
                size={20}
                color={"#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("User")}>
              <FontAwesome5
                name={"user"}
                style={{ marginHorizontal: 10 }}
                size={20}
                color={"#000"}
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    },
    Address: {
      screen: Address,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: "#fff"
              }}
              size={25}
              color={"#000"}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    },
    Payment: {
      screen: Payment,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: "#fff"
              }}
              size={25}
              color={"#000"}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Payment</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: "#fff"
              }}
              size={25}
              color={"#000"}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}></Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: "#fff"
              }}
              size={25}
              color={"#000"}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Details</Text>
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity
            onPress={() => navigation.navigate("Bags")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <FontAwesome5
              name={"shopping-bag"}
              style={{ marginHorizontal: 10 }}
              size={27}
              color={"#0070D6"}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 5,
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: "#0070D6",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "900",
                  color: "#fff"
                }}
              >
                {"10"}
              </Text>
            </View>
          </TouchableOpacity>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    },
    Bags: {
      screen: Bags,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: "#fff"
              }}
              size={25}
              color={"#000"}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Bags</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    },
    User: {
      screen: User
    },
    Likes: {
      screen: Likes,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: "#fff"
              }}
              size={25}
              color={"#000"}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Likes</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    },
    EditUser: {
      screen: EditUser,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 5
            }}
          >
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              style={{
                marginHorizontal: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: "#fff"
              }}
              size={25}
              color={"#000"}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Edit</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          borderBottomColor: "transparent"
        }
      })
    }
  },
  { initialRouteName: "Tabs" }
);

const SwitchNavigator = createSwitchNavigator({
  Main: StackNavigator,
  ConfirmOrder: {
    screen: ConfirmOrder,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerLeft: (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 5
          }}
        >
          <Text
            style={{ fontSize: 17, fontWeight: "bold", marginHorizontal: 20 }}
          >
            Order Confirmation
          </Text>
        </View>
      ),
      headerStyle: {
        borderBottomColor: "transparent"
      }
    })
  },
  Authenticate: {
    screen: Authenticate,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerLeft: (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 5
          }}
        >
          <Text
            style={{ fontSize: 17, fontWeight: "bold", marginHorizontal: 20 }}
          >
            Authentication
          </Text>
        </View>
      ),
      headerStyle: {
        borderBottomColor: "transparent"
      }
    })
  }
});

export default createAppContainer(SwitchNavigator);
