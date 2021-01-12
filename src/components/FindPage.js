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

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator} from 'react-navigation-drawer';


//array of data to be displayed, this will be changed to be an array fetched from
//the backend server
const ENTRIES2 = [
    {
        title: 'UTERQUE',
        illustration: [
          'https://live.staticflickr.com/65535/49340154828_9449369062_o.jpg',
          'https://live.staticflickr.com/65535/49340606116_b5b8dd0e12_o.jpg',
          'https://live.staticflickr.com/65535/49340154943_954ba7a920_o.jpg',
          'https://live.staticflickr.com/65535/49340831017_b91290880d_o.jpg',
        ],
        desc: 'Some description here',
        price: 'QAR 300',
        color:'black',
        otherColors:['White','Yellow'],
        malls:['Mall of Qatar', 'Landmark Mall', 'Gulf Mall'],
        sizes:['XS', 'S', 'M', 'L', 'XL'],
        itemCode: '1226767237'
    },
    {
        title: 'STRADIVARIOUS',
        illustration: [
          'https://live.staticflickr.com/65535/49340606426_d76729553d_o.jpg',
          'https://live.staticflickr.com/65535/49340606116_b5b8dd0e12_o.jpg',
        ],
        desc: 'Friends T-shirt',
        price: 'QAR 100',
        color:'black',
        otherColors:['Blue','Green'],
        malls:['Mall of Qatar', 'Landmark Mall',],
        sizes:['XS', 'S', 'M'],
        itemCode: '1256767127'
    },
    {
        title: 'MANGO',
        illustration: ['https://live.staticflickr.com/65535/49340155118_63336ffb39_o.jpg'],
        desc: 'Some description here',
        price: 'QAR 250',
        color:'black',
        otherColors:['White','Blue'],
        malls:['Mall of Qatar', 'Landmark Mall', 'Ezdan Mall'],
        sizes:['M', 'L', 'XL'],
        itemCode: '1226767333'
    },
    {
        title: 'ZARA',
        illustration: ['https://live.staticflickr.com/65535/49340830627_c6528fb46f_b.jpg'],
        desc: 'Some description here',
        price: 'QAR 250',
        color:'black',
        otherColors:['Purple','Brown'],
        malls:['Landmark Mall', 'Gulf Mall'],
        sizes:['XS', 'S', 'XL'],
        itemCode: '6527767237'
    },
    {
        title: 'BERSHKA',
        illustration: ['https://live.staticflickr.com/65535/49340154828_9449369062_o.jpg'],
        desc: 'Some description here',
        price: 'QAR 89',
        color:'black',
        otherColors:['Gray','Black'],
        malls:['Mall of Qatar', 'Gulf Mall'],
        sizes:[],
        itemCode: '4231867237'
    },

];

const FILTER_ENTRIES = [
  {
    title: 'SIZE',
    options: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    title: 'COLOR',
    options: ['Black', 'White', 'Blue', 'Red', 'Green'],
  },
  {
    title: 'CLOTHING',
    options: ['Activewear', 'Beachware', 'Coats', 'Dresses', 'Denim', 'Evening', 'Jackets'],
  },
  {
    title: 'ACCESSORIES',
    options: ['Belts', 'Bags', 'Hats'],
  },
  {
    title: 'JEWELRY',
    options: ['Necklace', 'Ring'],
  },
  {
    title: 'FOOTWEAR',
    options: ['Sneakers', 'Heels', 'Sports'],
  },
];


class FindPage extends React.Component{
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
      <ProductItem item={item} navigation={this.props.navigation}/>
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
            {/* Pronto Logo */}
            <Image style= {styles.image} source={require('../../images/Pronto.png')}/>
            {/* Search Bar : removed round:'true' bc warning */}
            <SearchBar
              containerStyle = {styles.searchBarContainer}
              inputContainerStyle = {styles.searchBarInputContainer}
              placeholder="Find..."
              onChangeText={this.updateSearch}
              value={search}
            />
          </View>



          <View style = {{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
          {/* WOMEN / MEN option */}
          <TouchableOpacity
              style = {[styles.optionWomen, {backgroundColor: this.state.womenBgColor,marginLeft:20}]}
              onPress = {() => this.setState({
                                              gender:0,
                                              womenBgColor: 'black',
                                              womenTextColor:'white',
                                              menBgColor:'white',
                                              menTextColor: 'black',})}
          >
            <Text style = {{color: this.state.womenTextColor, alignSelf: 'center'}}> WOMEN</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style = {[styles.optionMen, {backgroundColor:this.state.menBgColor, marginLeft:20}]}
              onPress = {() => this.setState({
                                              gender:1,
                                              womenBgColor: 'white',
                                              womenTextColor:'black',
                                              menBgColor:'black',
                                              menTextColor: 'white',})}>
            <Text style = {{color: this.state.menTextColor, alignSelf: 'center'}}> MEN</Text>
          </TouchableOpacity>
          </View>

          {/* Filter option */}
          <View style = {{marginTop: 15, flexDirection:'row'}}>
            <Icon style = {{marginLeft:5, marginTop:-5, }} name="filter" size={27} color='black'/>
            <Text> FILTER </Text>
            <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
              <Icon style = {{marginLeft:5, marginTop:-5, }} name="angle-right" size={27} color='black'/>
            </TouchableOpacity>
          </View>

          {/* List of products displayed in 2 columns; scrollable */}
          <View style={styles.list}>
            <FlatList
              data={ENTRIES2}
              renderItem = {this.renderItem}
              numColumns = {2}
            />
          </View>

        {/* Filter Overlay pop-up */}
        <Overlay visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside
            animationType="zoomIn" containerStyle={{backgroundColor: 'rgba(10, 10, 10, 0)'}}
            childrenWrapperStyle={styles.filterContainer}>
                {
                  (hideModal, overlayState) => (
                    <Fragment>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.filterTitle}>FILTER</Text>
                        <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
                          <Ionicons name="ios-close" size={27} color="white" />
                        </TouchableOpacity>
                      </View>

                      <FlatList
                        data={FILTER_ENTRIES}
                        renderItem = {this.renderFilter}
                        numColumns = {2}
                      />

                      <View style={{flexDirection: 'row', marginTop: 10}}>
                        <TouchableOpacity>
                          <Text style={styles.clear}> Clear </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                          <Text style={styles.apply}> Apply </Text>
                          <Icon style = {{marginLeft:5, marginTop:-5, }} name="angle-right" size={27} color='white'/>
                        </TouchableOpacity>
                      </View>

                    </Fragment>
                  )
                }
      </Overlay>


      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    marginTop: 30,
  },

  image:{
    width: '25%',
    height: '45%',
    marginTop: 13
  },

  searchBarContainer:{
    marginLeft: 20,
    width: '70%',
    height: '25%',
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
  },

  searchBarInputContainer:{
    backgroundColor: 'black',
    borderColor: 'black',
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
  }
})
export default FindPage;
