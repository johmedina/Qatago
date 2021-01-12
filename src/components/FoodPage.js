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
        title: 'SARHAD',
        illustration: [
          'https://media-cdn.tripadvisor.com/media/photo-p/17/60/3e/7f/sarhad-restaurant-pride.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/17/69/fe/fine-ambience-and-a-comfortabl.jpg',
          'https://lh3.googleusercontent.com/PfAeNvvn3o8hmuRrhrfnY2-XDFHSeHHE1vC_gqEgjo2Afb1STCSgev-mE6UdlQ5sO59NlWni=s1280-p-no-v1',
          'https://media-cdn.tripadvisor.com/media/photo-s/17/e3/ba/07/chicken-biryani.jpg',
        ],
        desc:'Sarhad Restaurant is a restaurant located in Qatar, serving a selection of Pakistani that delivers across Old Al Hitmi, Al Doha Al Jadeeda and Al Jasra.',
        location: ['Al Doha Al Jadeeeda'],
        hours: '10 AM - 11 PM',
        phone: '+974 44749365',
    },
    {
        title: 'GOLDEN DRAGON',
        illustration: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxr8zPrhYbX8ZcgW741DEYDav0Do6EbENzJRyrpISs8GUWx6qN'],
        desc: 'Come and enjoy authentic Chinese, Thai and Continental cuisines at Golden Dragon "The House of Live Cooking" @Zero One Mall Ain Khalid, City center Mall, Ezdan Mall, Hayat Plaza.',
        location: ['City Center, Zero One Mall', 'Ezdan Mall', 'Hyatt Plaza'],
        hours: '10 AM - 12 AM',
        phone: '+974 44749300',
    },
    {
        title: 'THE VILLAGE',
        illustration: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxeZnPIcH41z83kOkvyFA9LFDKH9pv2WcWHG52cEu6jl8xLG3q',
          'https://live.staticflickr.com/65535/49340606116_b5b8dd0e12_o.jpg',
          'https://live.staticflickr.com/65535/49340154943_954ba7a920_o.jpg',
          'https://live.staticflickr.com/65535/49340831017_b91290880d_o.jpg',
        ],
        desc:'Sarhad Restaurant is a restaurant located in Qatar, serving a selection of Pakistani that delivers across Old Al Hitmi, Al Doha Al Jadeeda and Al Jasra.',
        location: ['Al Doha Al Jadeeeda'],
        hours: '10 AM - 11 PM',
        phone: '+974 44749365',
    },

    {
        title: 'EATALY',
        illustration: [
          'https://media-cdn.tripadvisor.com/media/photo-s/11/8d/35/46/eataly-restaurant-at.jpg',
          'https://live.staticflickr.com/65535/49340606116_b5b8dd0e12_o.jpg',
          'https://live.staticflickr.com/65535/49340154943_954ba7a920_o.jpg',
          'https://live.staticflickr.com/65535/49340831017_b91290880d_o.jpg',
        ],
        desc:'Sarhad Restaurant is a restaurant located in Qatar, serving a selection of Pakistani that delivers across Old Al Hitmi, Al Doha Al Jadeeda and Al Jasra.',
        location: ['Al Doha Al Jadeeeda'],
        hours: '10 AM - 11 PM',
        phone: '+974 44749365',
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


class FoodPage extends React.Component{
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

          <View style = {{marginTop: 15, flexDirection:'row'}}>
            <Text style={styles.subtitle}> FOOD </Text>
            <Image style= {styles.logo} source={{uri: 'https://live.staticflickr.com/65535/49471646261_36f41a8ba0_o.png'}}/>

          </View>

          {/* List of products displayed in 2 columns; scrollable */}
          <View style={styles.list}>
            <FlatList
              data={ENTRIES2}
              renderItem = {this.renderItem}
              numColumns = {1}
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
    backgroundColor: 'transparent',
    marginTop: 30,
  },


  list: {
    flex: 1,
    marginTop: 5,
    paddingLeft: 20,
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
  subtitle : {
    fontSize: 30,
    color: 'gray',
    marginTop: 0,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  qatago: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    paddingBottom: 10,
    paddingTop: 10,

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
  logo:{
    alignSelf: 'center',
    width: '34%',
    height: '80%',
    resizeMode: 'contain',
    marginLeft: 150

  },
})
export default FoodPage;
