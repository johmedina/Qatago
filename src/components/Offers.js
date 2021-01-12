/* This component is used to show all the product items either from a search
 * or from a filter. Shows two columns of items */

import React, {Component, Fragment} from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text,
          Dimensions, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {SearchBar, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Overlay from 'react-native-modal-overlay';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import ItemDetail from './ItemDetail';
import FilterOption from './FilterOption';
import OfferItem from './OfferItem';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator} from 'react-navigation-drawer';


//array of data to be displayed, this will be changed to be an array fetched from
//the backend server
const ENTRIES2 = [

    {
        title: 'SARHAD',
        illustration: ['https://media-cdn.tripadvisor.com/media/photo-p/17/60/3e/7f/sarhad-restaurant-pride.jpg'],
        desc: ' BUY 1 MAIN DISH GET 1 '
    },
    {
        title: 'GOLDEN DRAGON',
        illustration: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxr8zPrhYbX8ZcgW741DEYDav0Do6EbENzJRyrpISs8GUWx6qN'],
        desc: ' 30% OFF '
    },
    {
        title: 'THE VILLAGE',
        illustration: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxeZnPIcH41z83kOkvyFA9LFDKH9pv2WcWHG52cEu6jl8xLG3q'],
        desc: ' BUT PIZZA GET ONE '
    },
    {
        title: 'EATALY',
        illustration: ['https://media-cdn.tripadvisor.com/media/photo-s/11/8d/35/46/eataly-restaurant-at.jpg'],
        desc: ' 40% OFF '
    },
    {
        title: 'LITTLE SAILOR',
        illustration: ['https://images.deliveryhero.io/image-nocache/talabat-staging/restaurants/little-sailor-_635762005831379822.jpg'],
        desc: ' BUY 2 GET 1 '
    },
    {
        title: 'DALCHINI',
        illustration: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdzW_0RWhZlbCIBsM3uYA-5nWnc1_DjlbZZ4VBFasj8H_F33df'],
        desc: ' FLAT 50% OFF '
    },


];

class Offers extends React.Component{
  state = {
    search: '',
    gender:0,
    womenBgColor: 'black',
    womenTextColor: 'white',
    menBgColor:'white',
    menTextColor: 'black',
    currentItemId: null,
    modalVisible: false,
  };

  updateSearch = search => {
    this.setState({ search });
  };

  renderItem = ({item, index}) => {
    return (
      <OfferItem item={item} navigation={this.props.navigation}/>
    )
  };

  renderFilter = ({item}) => {
    return (
      <FilterOption item={item} />
    )
  };

  onClose = () => this.setState({modalVisible: false});

  render(){
    const { search } = this.state;
    return (
      <SafeAreaView style={styles.container}>
      <View style = {{flexDirection:'row', marginLeft:5}}>
        <Image style= {styles.logo} source={{uri: 'https://live.staticflickr.com/65535/49471646261_36f41a8ba0_o.png'}}/>
        {/* Search Bar: removed round = 'true' bc warning */}
        <SearchBar
          containerStyle = {styles.searchBarContainer}
          inputContainerStyle = {styles.searchBarInputContainer}
          placeholder="Find..."
          onChangeText={this.updateSearch}
          value={this.state}
        />
      </View>


          {/* List of products displayed in 2 columns; scrollable */}
          <View style={styles.list}>
            <FlatList
              data={ENTRIES2}
              renderItem = {this.renderItem}
              numColumns = {2}
            />
          </View>




      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'transparent',
    marginTop: 30,
  },

  image:{
    width: '25%',
    height: '45%',
    marginTop: 13
  },

  searchBarContainer:{
    marginLeft: 10,
    width: '70%',
    height: '25%',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },

  searchBarInputContainer:{
    backgroundColor: '#7C3538',
    borderColor: '#7C3538',
  },
  optionMen: {
    borderWidth: 2,
    marginRight: 20,
    backgroundColor: 'white',
    width: 160,
    height: 25,
    justifyContent: 'center',
  },

  optionWomen: {
    borderWidth: 2,
    backgroundColor: 'black',
    width: 160,
    height: 25,
    justifyContent: 'center',
  },

  list: {
    flex: 1,
    marginTop: 5,
    paddingLeft: 10,
  },

  filterContainer: {
    backgroundColor: 'rgba(50, 50, 50, 0.75)',
    height: '70%',
  },

  closeButton: {
    marginLeft: "70%",
  },

  filterTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 5,
  },

  clear: {
    color: 'white',
    marginRight: 200,
    textDecorationLine: 'underline',
  },

  apply: {
    color: 'white',
    fontWeight: 'bold',
  },
  logo:{
    alignSelf: 'center',
    width: '27%',
    height: '50%',
    resizeMode: 'contain',
    marginTop: -14


  },
})
export default Offers;
