import React from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from "react-native";

import { screenHeight, screenWidth } from "../utils/variables";

import { Ionicons } from "@expo/vector-icons";
import { Input, CheckBox, Avatar } from "react-native-elements";

import CollectionItem from "../components/collectionItem";
const textSize = screenWidth * 0.06;

export default class editUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedFemale: true,
      checkedMale: false
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Avatar
          size="xlarge"
          rounded
          title="LW"
          onEditPress={() => alert("Works!")}
          activeOpacity={0.7}
          source={{
            uri:
              "https://images.unsplash.com/photo-1568386536789-51ec053c0b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }}
          showEditButton
        />
        <Input
          placeholder="Full name"
          errorStyle={{ color: "red" }}
          errorMessage=""
          inputContainerStyle={{ marginBottom: 15 }}
        />

        <Input
          placeholder="Email"
          errorStyle={{ color: "red" }}
          errorMessage=""
          inputContainerStyle={{ marginBottom: 15 }}
        />

        <Input
          placeholder="Birth year"
          errorStyle={{ color: "red" }}
          errorMessage=""
          inputContainerStyle={{ marginBottom: 15 }}
        />

        <Input
          placeholder="Birth year"
          errorStyle={{ color: "red" }}
          errorMessage=""
          inputContainerStyle={{ marginBottom: 15 }}
        />
        <Text
          style={{
            fontSize: textSize * 0.8,
            margin: 10,
            color: "#bbb",
            alignSelf: "flex-start"
          }}
        >
          {"Gender"}
        </Text>
        <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
          <CheckBox
            checkedIcon={
              <Ionicons name="ios-checkmark-circle-outline" size={20} />
            }
            title="Male"
            uncheckedIcon={<Ionicons name="ios-checkmark-circle" size={20} />}
            checked={this.state.checkedMale}
            onPress={() =>
              this.setState({
                checkedMale: !this.state.checkedMale,
                checkedFemale: this.state.checkedMale
              })
            }
          />
          <CheckBox
            checkedIcon={
              <Ionicons name="ios-checkmark-circle-outline" size={20} />
            }
            title="Female"
            uncheckedIcon={<Ionicons name="ios-checkmark-circle" size={20} />}
            checked={this.state.checkedFemale}
            onPress={() =>
              this.setState({
                checkedFemale: !this.state.checkedFemale,
                checkedMale: this.state.checkedFemale
              })
            }
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          style={{
            height: 50,
            width: 200,
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
            {"Got to home page"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center"
  }
});
