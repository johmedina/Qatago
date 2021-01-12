import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DropdownMenu from 'react-native-dropdown-menu';


class FilterOption extends React.Component {
  static propTypes= {
    item: PropTypes.object.isRequired,
  }

  listToString = (list1) => {
    if (list1.length > 0) {
      var str1 = list1[0]
        for (let i = 1; i < list1.length; i++){
          str1 += '\n '
          str1 += list1[i]
        }
      return (str1)
    }
    return ('Not Available')
  };

  render() {

    return (
      <ScrollView>
        <Text style={styles.filterName}> {this.props.item.title} </Text>
        <TouchableOpacity>
          <Text style={styles.options}> {this.listToString(this.props.item.options)} </Text>
        </TouchableOpacity>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  filterName:{
    backgroundColor: 'black',
    color: 'white',
    marginTop: 5,
    fontSize: 18,
    flex: 1,
    width: '100%',
    marginRight: 10,
    marginLeft: 10,
  },

  options: {
    fontSize: 15,
    color: 'black',
    marginTop: 3,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },


})

export default FilterOption;
