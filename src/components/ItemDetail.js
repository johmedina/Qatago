// THIS IS ITEM DETAIL PAGE FOR NOW UNTIL I FIGURE OUT LINKING

import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { SliderBox } from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const ENTRIES2 = [
    {
        title: 'GOLDEN DRAGON',
        illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxr8zPrhYbX8ZcgW741DEYDav0Do6EbENzJRyrpISs8GUWx6qN'
    },
    {
        title: 'THE VILLAGE',
        illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxeZnPIcH41z83kOkvyFA9LFDKH9pv2WcWHG52cEu6jl8xLG3q'
    },
    {
        title: 'EATALY',
        illustration: 'https://media-cdn.tripadvisor.com/media/photo-s/11/8d/35/46/eataly-restaurant-at.jpg'
    },
    {
        title: 'LITTLE SAILOR',
        illustration: 'https://images.deliveryhero.io/image-nocache/talabat-staging/restaurants/little-sailor-_635762005831379822.jpg'
    },
    {
        title: 'DALCHINI',
        illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdzW_0RWhZlbCIBsM3uYA-5nWnc1_DjlbZZ4VBFasj8H_F33df'
    },


];


class ItemDetail extends React.Component{
  updateSearch = search => {
    this.setState({ search });
  };

  listToString = (list1) => {
    if (list1.length > 0) {
      var str1 = list1[0]
        for (let i = 1; i < list1.length; i++){
          str1 += ', '
          str1 += list1[i]
        }
      return (str1)
    }
    return ('Not Available')
  };

  _renderItem1 ({item, index}) {
          return <SliderEntry data={item} even={(index + 1) % 2 === 0} itemHeight= {250} />;
      }

  render(){
    const item = this.props.navigation.getParam('item');
    return (
        <SafeAreaView style={styles.container}>

        <View style = {{flexDirection: 'row', marginLeft:5}}>
        {/* Go back button */}
          <View>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('FoodPage')}>
              <Icon style = {{marginTop:1}} name="angle-left" size={30} color='black'/>
            </TouchableOpacity>
          </View>

            <Image style= {styles.logo} source={{uri: 'https://live.staticflickr.com/65535/49471646261_36f41a8ba0_o.png'}}/>

        </View>

          <View style= {{marginLeft: 10 , marginRight: 10, marginTop: 5}}>

            {/* Picture */}
            <ScrollView>
              <View>
                <SliderBox circleLoop={true} images={item.illustration} sliderBoxHeight={500} />
              </View>

              {/* Item Brand Name */}
              <View style={{flexDirection:'row' , marginTop: 10}}>
                <Text style={styles.title}> {item.title} </Text>

                <TouchableOpacity>
                  <Ionicons style={{marginLeft:15}} name='ios-share' size={30} color='#7C3538'/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionicons style={{marginLeft:10}} name='ios-heart' size={30} color='#7C3538'/>
                </TouchableOpacity>
              </View>

              {/* Item Description */}
              <View>
                <Text style={styles.desc}> {item.desc} </Text>
              </View>

              <View style={{flexDirection:'row'}}>
                <Text style={styles.desc}> Hours: </Text>
                <Text style={styles.othersd}> {item.hours} </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.desc}> Located in:</Text>
                <Text style={styles.othersd}> {this.listToString(item.location)} </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.desc}> Phone:</Text>
                <Text style={styles.othersd}> {item.phone} </Text>
              </View>

              <View>
                <Text style={styles.subtitle}> You may also like ... </Text>

                <View style = {{marginTop:10, marginBottom: 30}}>
                <Carousel
                      data={ENTRIES2}
                      renderItem={this._renderItem1}
                      sliderWidth={sliderWidth}
                      itemWidth={itemWidth}
                      inactiveSlideScale={2}
                      inactiveSlideOpacity={1}
                      enableMomentum={true}

                      activeSlideAlignment={'start'}
                      separatorWidth={50}
                      enableSnap={false}
                      firstItem={0}
                      swipeThreshold={1000}
                      useScrollView={true}

                    />
                </View>

              </View>
            </ScrollView>
          </View>

        </SafeAreaView>
    )
  }
}


const horizontalMargin = 10;
const slideWidth = 150;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2 ;
const height1 = 270;
const height2 = 150;
const height3 = 150;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 30,
  },

  logo:{
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

  image:{
    width: 100,
    height: 200,
  },

  title: {
    backgroundColor: '#7C3538',
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
    fontSize: 15,
  },

  othersd: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  qatago: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingTop: 10,
    marginLeft: '32%'


  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    marginTop: 10,
  },

  logo:{
    alignSelf: 'center',
    width: '27%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: '68%'


  },

})
export default ItemDetail;
