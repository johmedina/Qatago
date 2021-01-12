import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ItemDetail from './ItemDetail';

class OfferItem extends React.Component {
  static propTypes= {
    item: PropTypes.object.isRequired,
  }

  render() {

    return (
      <TouchableOpacity onPress = {() => this.props.navigation.navigate('ItemDetail', {item: this.props.item})}>
      <Text style={styles.brandName}> {this.props.item.title} </Text>
        <Image source={{ uri: this.props.item.illustration[0] }}
            style = {styles.image}
        />

        <Text style={styles.description}> {this.props.item.desc} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width: 190,
    height: 260,
    marginRight: 10,
  },

  brandName:{
    color: '#7C3538',
    marginTop: 2,
    marginRight: 25,
    paddingVertical:7,
    paddingLeft: 5,
    fontSize:15
  },

  description: {
    flex:1,
    fontSize: 14,
    color: 'black',
    marginTop: 3,
    marginRight:10,
    marginBottom: 15,
  },

})

export default OfferItem;
