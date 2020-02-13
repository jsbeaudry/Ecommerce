import React from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
  View
} from "react-native";

import { screenHeight, screenWidth } from "../utils/variables";
import { Feather, Ionicons } from "@expo/vector-icons";
import FloatButton from "../components/floatButton";
import User from "../components/userItem";
import CollectionItem from "../components/collectionItem";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => ({
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
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Profile</Text>
      </TouchableOpacity>
    ),
    headerRight: (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 5
        }}
      >
        <Ionicons
          onPress={() => {
            alert("l");
          }}
          name={"md-log-out"}
          style={{
            marginHorizontal: 10,
            paddingLeft: 15,
            paddingRight: 5,
            backgroundColor: "#fff"
          }}
          size={25}
          color={"#000"}
        />
      </View>
    ),
    headerStyle: {
      borderBottomColor: "transparent"
    }
  });
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <User
          image={{
            uri:
              "https://images.unsplash.com/photo-1568386536789-51ec053c0b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }}
          name={"Marc Milan Loide"}
          block1Text1={"54"}
          block1Text2={"Likes"}
          block2Text1={"38"}
          block2Text2={"Buy"}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditUser");
          }}
          style={{
            alignItems: "center",
            backgroundColor: "transparent",
            marginLeft: 20,
            marginBottom: 10,
            marginTop: 30
          }}
        >
          <View
            style={{
              height: 40,

              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                height: 36,
                flex: 10,
                marginRight: 10,
                backgroundColor: "#000",
                alignSelf: "center",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Ionicons name={"ios-person"} size={20} color="#fff" />
            </View>
            <Text style={{ alignSelf: "center", fontWeight: "500", flex: 80 }}>
              {"Edit profile"}
            </Text>
            <Feather
              name="chevron-right"
              type="Feather"
              style={{ flex: 11, alignSelf: "center" }}
              size={25}
              color="#aaa"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Payment");
          }}
          style={{
            alignItems: "center",
            backgroundColor: "transparent",
            marginLeft: 20,
            marginBottom: 10
          }}
        >
          <View
            style={{
              height: 40,

              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                height: 36,
                flex: 10,
                marginRight: 10,
                backgroundColor: "#000",
                alignSelf: "center",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Ionicons name={"ios-card"} size={20} color="#fff" />
            </View>
            <Text style={{ alignSelf: "center", fontWeight: "500", flex: 80 }}>
              {"Payments"}
            </Text>
            <Feather
              name="chevron-right"
              type="Feather"
              style={{ flex: 11, alignSelf: "center" }}
              size={25}
              color="#aaa"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
          style={{
            alignItems: "center",
            backgroundColor: "transparent",
            marginLeft: 20,
            marginBottom: 10
          }}
        >
          <View
            style={{
              height: 40,

              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                height: 36,
                flex: 10,
                marginRight: 10,
                backgroundColor: "#000",
                alignSelf: "center",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Ionicons name={"ios-basket"} size={20} color="#fff" />
            </View>
            <Text style={{ alignSelf: "center", fontWeight: "500", flex: 80 }}>
              {"Orders"}
            </Text>
            <Feather
              name="chevron-right"
              type="Feather"
              style={{ flex: 11, alignSelf: "center" }}
              size={25}
              color="#aaa"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
          style={{
            alignItems: "center",
            backgroundColor: "transparent",
            marginLeft: 20,
            marginBottom: 10
          }}
        >
          <View
            style={{
              height: 40,

              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                height: 36,
                flex: 10,
                marginRight: 10,
                backgroundColor: "#000",
                alignSelf: "center",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Ionicons name={"ios-settings"} size={20} color="#fff" />
            </View>
            <Text style={{ alignSelf: "center", fontWeight: "500", flex: 80 }}>
              {"Settings"}
            </Text>
            <Feather
              name="chevron-right"
              type="Feather"
              style={{ flex: 11, alignSelf: "center" }}
              size={25}
              color="#aaa"
            />
          </View>
        </TouchableOpacity>

        <FloatButton goTo={() => navigation.navigate("Bags")} />
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
