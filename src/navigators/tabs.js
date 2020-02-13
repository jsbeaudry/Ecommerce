import { createAppContainer } from "react-navigation";

import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import { screenWidth } from "../utils/variables";

import { Home, Category, Brand } from "../screens/index";

const Tabs = createMaterialTopTabNavigator(
  {
    Home: Home,
    Category: Category,
    Brand: Brand
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        fontSize: 13,
        fontWeight: "bold"
      },
      inactiveTintColor: "#999",
      activeTintColor: "#000",
      tabStyle: {
        width: screenWidth / 3,
        borderBottomColor: "#000",
        borderBottomWidth: 0,
        height: 40
      },
      style: {
        backgroundColor: ""
      },
      indicatorStyle: {
        backgroundColor: "#0070D6",
        height: 3
      }
    }
  }
);

export default createAppContainer(Tabs);
