import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { screenWidth } from "../utils/variables";
import Swipeout from "react-native-swipeout";
import { Ionicons } from "@expo/vector-icons";

const textSize = screenWidth * 0.06;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: -1,
      fullname: "",
      email: "",
      address1: "",
      address2: "",
      phone: "",
      city: "",
      country: "",
      addNew: false,
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
        }
      ]
    };
  }
  selectedItem = id => {
    this.setState({ itemId: id });
  };
  addNewAddress = () => {
    this.setState(prevState => ({ addNew: !prevState.addNew }));
  };
  render() {
    const {
      itemId,
      data,
      fullname,
      address1,
      address2,
      phone,
      city,
      country,
      addNew
    } = this.state;
    return (
      <View style={styles.container}>
        {/* -------------------------------------------------------------------------- */
        /*                               List of address                              */
        /* -------------------------------------------------------------------------- */}

        {addNew == false ? (
          <FlatList
            data={data}
            style={{ marginTop: 0 }}
            renderItem={({ item, index }) => (
              <Swipeout
                backgroundColor={"#fff"}
                left={[
                  {
                    component: (
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 25,
                          backgroundColor: "#0070D6",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "center",
                          marginTop: 25
                        }}
                      >
                        <Ionicons
                          name={addNew ? "ios-create" : "ios-create"}
                          size={30}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    ),
                    backgroundColor: "#fff"
                  }
                ]}
                right={[
                  {
                    component: (
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 25,
                          backgroundColor: "#0070D6",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "center",
                          marginTop: 25
                        }}
                      >
                        <Ionicons
                          name={addNew ? "ios-trash" : "ios-trash"}
                          size={30}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    ),
                    backgroundColor: "#fff"
                  }
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.selectedItem(index);
                  }}
                  style={{
                    marginBottom: index == data.length - 1 ? 70 : 0
                  }}
                >
                  <View
                    style={{
                      height: 100,
                      width: screenWidth - 20,
                      alignSelf: "center",
                      backgroundColor: "#f7f7f7",
                      marginBottom: 10,
                      borderRadius: 10,
                      padding: 10,
                      justifyContent: "center",
                      borderLeftWidth: this.state.itemId === index ? 6 : 0,
                      borderColor: "#0070D6"
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      23, Open Street{item.shop}
                    </Text>
                    <Text style={{ marginVertical: 5 }}>
                      Brooklyn, New York, USA
                    </Text>
                    <Text>+1 234 554 434343</Text>
                  </View>
                </TouchableOpacity>
              </Swipeout>
            )}
            keyExtractor={(item, index) => JSON.stringify(index)}
          />
        ) : (
          <View style={{ flex: 1 }}>
            {/*
            --------------------------------------------------------------------------
            */
            /* Address Text TextInput */
            /*
            --------------------------------------------------------------------------
            */}
            <Text
              style={{
                color: "#000",
                fontSize: 28,
                marginLeft: 20,
                marginVertical: 30,
                fontWeight: "bold"
              }}
            >
              Delivery Address
            </Text>
            <View style={{ marginHorizontal: 20, marginVertical: 7 }}>
              <Text
                style={{
                  color: "#D8D8D8",
                  fontSize: 16
                }}
              >
                {"Full name"}
              </Text>
              <TextInput
                autoCorrect={false}
                returnKeyType={"go"}
                placeholder={""}
                value={fullname}
                onChangeText={text => {
                  this.setState({
                    fullname: text
                  });
                }}
                autoFocus
                style={{
                  fontSize: 16,
                  paddingVertical: 7,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D8D8D8"
                }}
              />
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 7 }}>
              <Text
                style={{
                  color: "#D8D8D8",
                  fontSize: 16
                }}
              >
                {"Address Line 1"}
              </Text>
              <TextInput
                autoCorrect={false}
                returnKeyType={"go"}
                placeholder={""}
                value={address1}
                onChangeText={text => {
                  this.setState({
                    address1: text
                  });
                }}
                style={{
                  fontSize: 16,
                  paddingVertical: 7,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D8D8D8"
                }}
              />
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 7 }}>
              <Text
                style={{
                  color: "#D8D8D8",
                  fontSize: 16
                }}
              >
                {"Address Line 2"}
              </Text>
              <TextInput
                autoCorrect={false}
                returnKeyType={"go"}
                placeholder={""}
                value={address2}
                onChangeText={text => {
                  this.setState({
                    address2: text
                  });
                }}
                style={{
                  fontSize: 16,
                  paddingVertical: 7,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D8D8D8"
                }}
              />
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 7 }}>
              <Text
                style={{
                  color: "#D8D8D8",
                  fontSize: 16
                }}
              >
                {"Mobile Number"}
              </Text>
              <TextInput
                autoCorrect={false}
                returnKeyType={"go"}
                placeholder={""}
                value={phone}
                onChangeText={text => {
                  this.setState({
                    phone: text
                  });
                }}
                style={{
                  fontSize: 16,
                  paddingVertical: 7,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D8D8D8"
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  marginVertical: 7,
                  width: screenWidth / 2 - 30
                }}
              >
                <Text
                  style={{
                    color: "#D8D8D8",
                    fontSize: 16
                  }}
                >
                  {"City"}
                </Text>
                {/*<Feather
                    name={"chevron-down"}
                    type={"Feather"}
                    style={{
                      flex: 11,
                      alignSelf: "center",
                      position: "absolute",
                      right: 0,
                      top: 15
                    }}
                    size={25}
                    color={"#aaa"}
                  />*/}
                <TextInput
                  autoCorrect={false}
                  returnKeyType={"go"}
                  placeholder={""}
                  value={city}
                  onChangeText={text => {
                    this.setState({
                      city: text
                    });
                  }}
                  style={{
                    fontSize: 16,
                    paddingVertical: 7,
                    borderBottomWidth: 1,
                    borderBottomColor: "#D8D8D8"
                  }}
                />
              </View>
              <View
                style={{
                  marginVertical: 7,
                  width: screenWidth / 2 - 30
                }}
              >
                <Text
                  style={{
                    color: "#D8D8D8",
                    fontSize: 16
                  }}
                >
                  {"Country"}
                </Text>
                {/*<Feather
                    name={"chevron-down"}
                    type={"Feather"}
                    style={{
                      flex: 11,
                      alignSelf: "center",
                      position: "absolute",
                      right: 0,
                      top: 15
                    }}
                    size={25}
                    color={"#aaa"}
                  />*/}
                <TextInput
                  autoCorrect={false}
                  returnKeyType={"go"}
                  placeholder={""}
                  value={country}
                  style={{
                    fontSize: 16,
                    paddingVertical: 7,
                    borderBottomWidth: 1,
                    borderBottomColor: "#D8D8D8"
                  }}
                />
              </View>
            </View>
          </View>
        )}

        {/* -------------------------------------------------------------------------- */
        /*                               Continue Button                              */
        /* --------------------------------------------------------------------------  */}

        {itemId != -1 ? (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Payment")}
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
              {"Continue"}
            </Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          onPress={() => this.addNewAddress()}
          style={[
            {
              position: "absolute",
              height: 50,
              width: 50,
              borderRadius: 25,

              right: 20,
              backgroundColor: "#0070D6",
              justifyContent: "center",
              alignItems: "center"
            },
            addNew ? { top: 20 } : { bottom: 20 }
          ]}
        >
          <Ionicons
            name={addNew ? "ios-close" : "ios-add"}
            size={30}
            color="#fff"
          />
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
