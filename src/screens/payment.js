import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { screenWidth } from "../utils/variables";
import Swipeout from "react-native-swipeout";
import { Ionicons } from "@expo/vector-icons";
import { CreditCardInput } from "rn-credit-card-view";

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
      cardValues: {},
      data: [
        {
          status: {
            cvc: "valid",
            expiry: "valid",
            name: "valid",
            number: "valid"
          },
          valid: true,
          values: {
            cvc: "359",
            expiry: "06/22",
            name: "Jean Sauvenel Beaudry",
            number: "5446 6855 6566 68555",
            type: "maestro"
          }
        },
        {
          status: {
            cvc: "valid",
            expiry: "valid",
            name: "valid",
            number: "valid"
          },
          valid: true,
          values: {
            cvc: "359",
            expiry: "06/22",
            name: "Jean Sauvenel Beaudry",
            number: "5446 6855 6566 68555",
            type: "maestro"
          }
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

  _onChange = form => this.setState({ cardValues: form });

  saveCard = () => {
    this.state.data.push(this.state.cardValues);
    console.log(this.state.data);

    this.setState(
      {
        data: this.state.data
      },
      () => {
        this.addNewAddress();
      }
    );
  };

  render() {
    const {
      itemId,
      data,
      address1,
      address2,
      phone,
      city,
      country,
      addNew
    } = this.state;
    return (
      <View style={styles.container}>
        {addNew == false ? (
          <FlatList
            data={data}
            bounces={false}
            showsVerticalScrollIndicator={false}
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
                    paddingHorizontal: 20,
                    marginBottom: index == data.length - 1 ? 70 : 0
                  }}
                >
                  {this.state.itemId === index ? (
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        backgroundColor: "#fff",
                        position: "absolute",
                        top: 10,
                        right: 25,
                        zIndex: 999,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Ionicons
                        name={"ios-checkmark"}
                        size={50}
                        color="green"
                      />
                    </View>
                  ) : null}
                  <ImageBackground
                    source={require("../images/card-front.png")}
                    borderRadius={20}
                    style={{
                      height: 220,
                      width: screenWidth - 50,
                      alignSelf: "center",
                      marginBottom: 10,

                      justifyContent: "center",
                      borderTopWidth: 0,
                      borderColor: "red",
                      borderRadius: 20
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 22,
                        color: "#fff",
                        letterSpacing: 2,
                        alignSelf: "center"
                      }}
                    >
                      {item.values.number}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "#fff",
                        letterSpacing: 2,
                        position: "absolute",
                        bottom: 40,
                        left: 40
                      }}
                    >
                      {item.values.name}
                    </Text>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 40,
                        right: 20
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 12,
                          color: "#777",
                          letterSpacing: 2
                        }}
                      >
                        {"MM/YY"}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 15,
                          color: "#fff",
                          letterSpacing: 2
                        }}
                      >
                        {item.values.expiry}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </Swipeout>
            )}
            keyExtractor={(item, index) => JSON.stringify(index)}
          />
        ) : (
          <ScrollView style={{ flex: 1 }}>
            <CreditCardInput
              onChange={this._onChange}
              labels={{
                number: "CARD NUMBER",
                expiry: "EXPIRY",
                cvc: "CVC/CCV",
                name: "Name"
              }}
              requiresName={true}
            />

            <View style={{ marginHorizontal: 20, marginVertical: 2 }}>
              <Text
                style={{
                  color: "#D8D8D8",
                  fontSize: 16,
                  marginTop: 10
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
            <View style={{ marginHorizontal: 20, marginVertical: 2 }}>
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
            <View style={{ marginHorizontal: 20, marginVertical: 2 }}>
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
                  marginVertical: 2,
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
                  marginVertical: 2,
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
          </ScrollView>
        )}

        {itemId != -1 && addNew == false ? (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ConfirmOrder")}
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

        {addNew ? (
          <TouchableOpacity
            onPress={() => this.saveCard()}
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
              {"Save"}
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

              right: 5,
              backgroundColor: "#0070D6",
              justifyContent: "center",
              alignItems: "center"
            },
            addNew ? { top: 5 } : { bottom: 20 }
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
