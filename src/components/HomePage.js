import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry'
import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const ENTRIES2 = [

    {
        title: 'SARHAD',
        illustration: 'https://media-cdn.tripadvisor.com/media/photo-p/17/60/3e/7f/sarhad-restaurant-pride.jpg'
    },
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
        title: 'little sailor',
        illustration: 'https://images.deliveryhero.io/image-nocache/talabat-staging/restaurants/little-sailor-_635762005831379822.jpg'
    },
    {
        title: 'DALCHINI',
        illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdzW_0RWhZlbCIBsM3uYA-5nWnc1_DjlbZZ4VBFasj8H_F33df'
    },


];
const ENTRIES3 = [
    {
        title: 'ST REGIS',
        illustration: 'https://www.gutmann.de/fileadmin/_processed_/f/5/csm_gutmann_ref_st_regis_doha_content_01_8c9e0456e6.jpg'
    },
    {
        title: 'TORCH DOHA',
        illustration: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_225,q_auto,w_225/itemimages/20/19/2019403_v4.jpeg'
    },
    {
        title: 'HILTON HOTEL',
        illustration: 'https://i.pinimg.com/originals/d4/61/1c/d4611c348035f4114b6b38ec144a752a.jpg'
    },
    {
        title: 'THE CURVE HOTEL',
        illustration: 'https://pbs.twimg.com/media/DLhoEzeXUAA6c6j.jpg'
    },

];

const ENTRIES4 = [
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

const ENTRIES5 = [
    {
        title: 'WAKRA BEACH',
        illustration: 'https://www.timeoutdoha.com/public/styles/600px_600px_square/public/images/2013/03/25/2013_dohabeaches_2_base.jpg?itok=E0zh62hT',
    },
    {
        title: 'AL KHOR BEACH',
        illustration: 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/c180.0.1080.1080a/s249x249/81328733_166409658004310_537539424743850427_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=-Hw_xnFxngMAX8uEfDf&oh=a0dbf29c426d7ab6425957174d9d5521&oe=5EA59E07&ig_cache_key=MjIyMjc4OTkyNzIxNzYyODE2NQ%3D%3D.2'
    },
    {
        title: 'SEALINE',
        illustration: 'https://media2.trover.com/T/556b6a678e7cb2777a000fa8/fixedw_large_4x.jpg'
    },
    {
        title: 'CAMEL RACE',
        illustration: 'https://i.pinimg.com/originals/c4/12/f0/c412f08b450bf7ceb2e058ea60d9c3a4.png'
    },



];
class HomePage extends React.Component{

    state = {
      search: '',
      gender:0,
      womenBgColor: 'black',
      womenTextColor: 'white',
      menBgColor:'white',
      menTextColor: 'black',
      images: [
        'https://www.iloveqatar.net/public/images/news/red-bull-qaher-el-t3ous/_760x500_clip_center-center_none/Event-Listing@4x-1.jpg',
        'https://live.staticflickr.com/65535/49470032356_9afbdce5c0_o.jpg',
        'https://live.staticflickr.com/65535/49470286932_da392fa287_o.png',
        'https://live.staticflickr.com/65535/49469496073_c641e808cd_b.jpg',
      ]
    };

    updateSearch = search => {
      this.setState({ search });
    };

    _renderItem1 ({item, index}) {
            return <SliderEntry data={item} even={(index + 1) % 2 === 0} itemHeight= {250} />;
        }
    _renderItem2 ({item, index}) {
            return <SliderEntry data={item} even={(index + 1) % 2 === 0} itemHeight= {250} />;
        }
    _renderItem3 ({item, index}) {
            return <SliderEntry data={item} even={(index + 1) % 2 === 0} itemHeight= {250} />;
        }

    render(){
      const { search } = this.state;
        return (

          <SafeAreaView style = {styles.container}>

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


              {/* Scroll from here */}
              <ScrollView>
              {/* ADs and Special offers to be displayed here, images from array in state */}
              <SliderBox circleLoop={true} images={this.state.images} sliderBoxHeight={300} />

              {/* New In category*/}
              <View style = {{marginTop: 15, flexDirection:'row'}}>
                <Text> FOOD </Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('FoodPage')}>
                  <Icon style = {{marginLeft:5, marginTop:-5, }} name="angle-right" size={27} color='black'/>
                </TouchableOpacity>
              </View>

              {/* Carousel Entries from const variables defined on top*/}
              <View style = {{marginTop:10, borderBottomWidth: 7, borderBottomColor: '#7C3538'}}>
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

              {/* Featured Malls */}
              <View style = {{marginTop: 15, flexDirection:'row'}}>
                <Text> HOTELS </Text>
                <TouchableOpacity>
                  <Icon style = {{marginLeft:5, marginTop:-5, }} name="angle-right" size={27} color='black'/>
                </TouchableOpacity>
              </View>
              <View style = {{marginTop:10, borderBottomWidth: 7, borderBottomColor: '#7C3538'}}>
              <Carousel
                    data={ENTRIES3}
                    renderItem={this._renderItem3}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={2}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    swipeThreshold={1000}
                    enableSnap={false}
                    useScrollView={true}
                  />
              </View>


              {/* Featured Brands */}
              <View style = {{marginTop: 15, flexDirection:'row'}}>
                <Text> INDOOR ACTIVITIES </Text>
                <TouchableOpacity>
                  <Icon style = {{marginLeft:5, marginTop:-5, }} name="angle-right" size={27} color='black'/>
                </TouchableOpacity>
              </View>
              <View style = {{marginTop:10, borderBottomWidth: 7, borderBottomColor: '#7C3538' }}>
              <Carousel
                    data={ENTRIES4}
                    renderItem={this._renderItem2}
                    sliderWidth={sliderWidth}
                    sliderHeight={200}
                    itemHeight={200}
                    itemWidth={itemWidth}
                    inactiveSlideScale={2}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    swipeThreshold={1000}
                    enableSnap={false}
                    useScrollView={true}

                  />
              </View>

              {/* Featured Malls */}
              <View style = {{marginTop: 15, flexDirection:'row'}}>
                <Text> OUTDOOR ACTIVITIES </Text>
                <TouchableOpacity>
                  <Icon style = {{marginLeft:5, marginTop:-5, }} name="angle-right" size={27} color='black'/>
                </TouchableOpacity>
              </View>
              <View style = {{marginTop:10, borderBottomWidth: 7, borderBottomColor: 'black' }}>
              <Carousel
                    data={ENTRIES5}
                    renderItem={this._renderItem3}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={2}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    swipeThreshold={1000}
                    enableSnap={false}
                    useScrollView={true}
                  />
              </View>



            </ScrollView>

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
    openingPage:{
        flex:1,
        alignSelf: 'center',
        width: '90%',
        resizeMode: 'contain',

    },
    container:{
        flex:1,
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

    qatago: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      paddingBottom: 10,
      paddingTop: 10,



    },
    logo:{
      alignSelf: 'center',
      width: '27%',
      height: '50%',
      resizeMode: 'contain',
      marginTop: -14


    },
})

export default HomePage;
