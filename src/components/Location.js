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
        title: 'VILLAGGIO MALL',
        illustration: 'https://pbs.twimg.com/profile_images/1567811411/Villagio_Mall_400x400.jpg',
    },
    {
        title: 'MALL OF QATAR',
        illustration: 'https://i.pinimg.com/originals/fb/96/76/fb967684ffa9c12e76ace80ff03e69f5.jpg'
    },
    {
        title: 'MUSEUM OF ISLAMIC ART',
        illustration: 'https://www.qm.org.qa/sites/default/files/styles/experience_hub_large/public/teaser_images/projects/mia_architecture_071214_4548.jpg?itok=wT_1hydG'
    },
    {
        title: 'QATAR NATIONAL LIBRARY',
        illustration: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7'
    },
    {
      title: 'NOVO CINEMA',
      illustration: 'https://i.pinimg.com/originals/ac/5f/21/ac5f21afdf4af072223a18be549963a7.jpg',
    },
    {
      title: 'SHEIKH FAISAL MUSEUM',
      illustration: 'https://lh6.googleusercontent.com/proxy/bbT1GQMtJ4pCaNdLCrCseMdRm7FVqgHsNJ0IzDK7diilG9y-phzdU2kdngho-YaY2vtztvKfS0DfQHIOu6H_dV5oM_8uM7uumu_jcpGdza5b_NAqJLdBpy9k1Q',
    },



];


class Location extends React.Component{
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
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Itenerary')}>
              <Icon style = {{marginTop:1}} name="angle-left" size={30} color='black'/>
            </TouchableOpacity>
          </View>

            <Image style= {styles.logo} source={{uri: 'https://live.staticflickr.com/65535/49471646261_36f41a8ba0_o.png'}}/>

        </View>

          <View style= {{marginLeft: 10 , marginRight: 10, marginTop: 5}}>

            {/* Picture */}
            <ScrollView>
              <View>
                <SliderBox circleLoop={true} images={item.illustration} sliderBoxHeight={320} />
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
                <Text style={styles.desc}> Phone:</Text>
                <Text style={styles.othersd}> {item.phone} </Text>
              </View>


              <View style={{flexDirection:'row'}}>
                <Text style={styles.desc}> Located in:</Text>
                <Text style={styles.othersd}> {this.listToString(item.location)} </Text>
              </View>
              <View>
              <Image style= {styles.map} source={{uri: 'https://live.staticflickr.com/65535/49472928832_4bd59e1667_b.jpg'}}/>
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
    fontSize: 20,
    fontWeight: 'bold',
  },

  desc: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 17,
  },

  othersd: {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 17
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

  map: {
    width: 400,
    height: 200,
    marginBottom: 20
  }

})
export default Location;
