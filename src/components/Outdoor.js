import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity,TextInput, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry'
import Icon from 'react-native-vector-icons/FontAwesome';
import Select from 'react-select'
import countryList from 'react-select-country-list'


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Outdoor extends React.Component{
  state={
    bcmalls: 0,
    bccinema: 0,
    bclib: 0,
    bcmuseum: 0,
    bctm: 0,
    bcrest: 0,
    bcspa: 0,
    bcvolunt: 0,
    bcacad: 0,
    bcsc: 0,

  };

  render(){
    return(
      <View style={{marginLeft: 10}}>
        <Text style = {styles.title}> Enter your Preferences </Text>
        <Text style={styles.subtitle}> OUTDOOR ACTIVITIES </Text>

        <ScrollView>
        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
                style={[styles.button, this.state.bcmalls && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcmalls: !(this.state.bcmalls) })}>
            <Text style={styles.text}> Desert </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bccinema && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bccinema: !(this.state.bccinema) })}>
            <Text style={styles.text}> Theme Park </Text>
          </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'center'}}>

          <TouchableOpacity
                style={[styles.button, this.state.bclib && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bclib: !(this.state.bclib) })}>
            <Text style={styles.text}> Beach </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcmuseum && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcmuseum: !(this.state.bcmuseum) })}>
            <Text style={styles.text}> Sports </Text>
          </TouchableOpacity>

          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'center'}}>

          <TouchableOpacity
                style={[styles.button, this.state.bctm && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bctm: !(this.state.bctm) })}>
            <Text style={styles.text}> Pools </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcrest && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcrest: !(this.state.bcrest) })}>
            <Text style={styles.text}> Bars </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcspa && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcspa: !(this.state.bcspa) })}>
            <Text style={styles.text}> Voluntourism </Text>
          </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'center'}}>

          <TouchableOpacity
                style={[styles.button, this.state.bcsc && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcsc: !(this.state.bcsc) })}>
            <Text style={styles.text}> Special Cultural </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcacad && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad: !(this.state.bcacad) })}>
            <Text style={styles.text}> Sports Events </Text>
          </TouchableOpacity>
          </View>

        </ScrollView>



          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity style = {styles.skipButton} onPress = {() => this.props.navigation.navigate('Food')} >
              <Text style = {{marginTop: 60, fontSize: 15, color:'#7C3538',}}> 2/3 </Text>
              <Text style = {{marginLeft: 5, marginTop: 50, fontSize: 30, color:'#7C3538', fontWeight:'bold'}}>
                  Next </Text>
              <Icon style = {{marginLeft:7, marginTop: 49, color:'#7C3538'}} name="angle-right" size={38} color='black'/>
            </TouchableOpacity>
          </View>
        </View>

    )
  };

}

const styles = StyleSheet.create({
  title : {
    fontSize: 35,
    color: '#7C3538',
    marginTop: 55,
    fontWeight: 'bold'
  },
  subtitle : {
    fontSize: 25,
    color: 'gray',
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom: 50
  },
  button: {
    color : '#7C3538',
    borderRadius : 5,
    borderWidth: 2,
    borderColor: '#7C3538',
    marginTop: 15,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: "4%",
    paddingVertical : 10,
    alignSelf: 'center'
  },
  inputBoxes: {
    alignSelf: 'center',
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#7C3538',
    paddingBottom: 5,
    fontSize: 20,
    marginBottom: 15,
    marginTop: 20,
    marginLeft: -90,
    color:'#7C3538',
  },
  skipButton: {
    marginLeft : "60%",
    flexDirection: 'row',
    marginTop: 200
  },
})
export default Outdoor;
