import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SignInPage from './SignInPage';
import HomePage from './HomePage';
import ShoppingList from './ShoppingList';
import ItemDetail from './ItemDetail';
import ProductItem from './ProductItem';
import Profile from './Profile';
import Indoor from './Indoor';
import Outdoor from './Outdoor';
import Food from './Food';
import FoodPage from './FoodPage';
import Itenerary from './Itenerary';
import Trip from './Trip';
import EditPage from './EditPage';
import Offers from './Offers';
import Location from './Location';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator} from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNav = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },

    Itenerary: {
      screen: Itenerary,
      navigationOptions: {
        header: null,
        title: 'Itenerary',
      }
    },

    Offers : {
      screen: Offers,
      navigationOptions: {
        header: null,
        title: 'Offers',
      }
    },

    EditPage: {
      screen: EditPage,
      navigationOptions: {
        header: null,
        title: 'Edit',
      }
    },

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'HomePage') {
          iconName = `ios-home`;
        } else if (routeName === 'Itenerary') {
          iconName = `ios-calendar`;
        }
        else if (routeName === 'Offers') {
          iconName = `ios-pricetag`;
        }
        else if (routeName === 'EditPage') {
          iconName = `ios-cog`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={27} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#CF9799',
      labelStyle: {
        fontSize: 12,
        marginTop: 2,
      },
      style: {
        backgroundColor: '#7C3538',
        paddingTop: 5,
      },

    },
  }

);



const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignInPage,
    navigationOptions: {
      header: null,
    }
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    }
  },

  FoodPage: {
    screen: FoodPage,
    navigationOptions: {
      header: null,
    }
  },

  Indoor: {
    screen: Indoor,
    navigationOptions: {
      header: null,
    }
  },

  Outdoor: {
    screen: Outdoor,
    navigationOptions: {
      header: null,
    }
  },

  Trip: {
    screen: Trip,
    navigationOptions: {
      header: null,
    }
  },

  Food: {
    screen: Food,
    navigationOptions: {
      header: null,
    }
  },

  Location: {
    screen: Location,
    navigationOptions: {
      header: null,
    }
  },

  TabNav: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    }
  },
ItemDetail: {
  screen: ItemDetail,
  navigationOptions: {
    header: null,
  }
}




});

export default createAppContainer(AppNavigator);
