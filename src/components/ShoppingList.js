// THIS IS ITEM DETAIL PAGE FOR NOW UNTIL I FIGURE OUT LINKING

import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { SliderBox } from 'react-native-image-slider-box';


const PRODUCTITEM = [
  {
      title: 'BERSHKA',
      illustration: 'https://live.staticflickr.com/65535/49340154828_9449369062_o.jpg',
      desc: 'Some description here',
      price: 'QAR 180',
      colors: ['Black', 'White', 'Gray', 'Yellow'],
      malls: ['Mall of Qatar', 'Landmark Mall', 'Gulf Mall'],
      key: '11223347',
  },
];

class ShoppingList extends React.Component{
  state = {
    search: '',
    gender:0,
    womenBgColor: 'black',
    womenTextColor: 'white',
    menBgColor:'white',
    menTextColor: 'black',
    item: PRODUCTITEM,
    images: [
      'https://live.staticflickr.com/65535/49340154828_9449369062_o.jpg',
      'https://live.staticflickr.com/65535/49340606116_b5b8dd0e12_o.jpg',
      'https://live.staticflickr.com/65535/49340154943_954ba7a920_o.jpg',
      'https://live.staticflickr.com/65535/49340831017_b91290880d_o.jpg',
    ]
  };

  updateSearch = search => {
    this.setState({ search });
  }

  renderItem = ({item, index}) => {
    return (
      <ItemView item={item} />
    )
  }

  render(){
    const { product } = this.state;
    return (
      <SafeAreaView style={styles.container}>
          <View style = {{flexDirection:'row', marginLeft:5}}>
            {/* Pronto Logo */}
            <Image style= {styles.logo} source={require('../../images/Pronto.png')}/>
            {/* Search Bar: removed round = 'true' bc warning */}
            <SearchBar
              containerStyle = {styles.searchBarContainer}
              inputContainerStyle = {styles.searchBarInputContainer}
              placeholder="Find..."
              onChangeText={this.updateSearch}
              value={this.state}
            />
          </View>

          {/* Go back button */}
          <View>
            <TouchableOpacity>
              <Icon style = {{marginTop:1}} name="angle-left" size={30} color='black'/>
            </TouchableOpacity>
          </View>

          {/* Picture */}
          <ScrollView>
            <View>
              <SliderBox circleLoop={true} images={this.state.images} sliderBoxHeight={500} />
            </View>

            {/* Item Brand Name */}
            <View style={{flexDirection:'row' , marginTop: 10}}>
              <Text style={styles.title}> UTERQUE </Text>
              <Ionicons style={{marginLeft:15}} name='ios-share' size={30}/>
              <Ionicons style={{marginLeft:10}} name='ios-heart' size={30}/>
            </View>

            {/* Item Description */}
            <View>
              <Text style={styles.desc}> "What time is love?" Slogan T-shirt </Text>
              <Text style={styles.othersd}> QR 180</Text>
            </View>

            <View style={{flexDirection:'row'}}>
              <Text style={styles.desc}> Color:</Text>
              <Text style={styles.othersd}> black </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.desc}> Also available in:</Text>
              <Text style={styles.othersd}> White, Gray, Yellow </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.desc}> Available in:</Text>
              <Text style={styles.othersd}> Mall of Qatar, Landmark Mall, Gulf Mall </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.desc}> Sizes: </Text>
              <Text style={styles.othersd}> XS, S, M, L, XL </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.desc}> Product Code: </Text>
              <Text style={styles.othersd}> 11223347 </Text>
            </View>
          </ScrollView>


      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },

  logo:{
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

  image:{
    width: 100,
    height: 200,
  },

  title: {
    backgroundColor: 'black',
    color: 'white',
    width: '80%',
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },

  desc: {
    marginTop: 5,
    marginBottom: 5,
  },

  othersd: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
  }

})
export default ShoppingList;
