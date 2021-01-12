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


class Profile extends React.Component{
  constructor(props) {
  super(props)

  this.options = countryList().getData()

  }
  state={
    button16color: 'transparent',
    button21color: 'transparent',
    button30color: 'transparent',
    button40color: 'transparent',
    buttonfcolor: 'transparent',
    buttonmcolor: 'transparent',
    buttonscolor: 'transparent',
    buttonfamcolor: 'transparent',
    options: this.options,
    value: null,


  };


  changeHandler = value => {
     this.setState({ value })
   };

  render(){
    return(
      <View style={{marginLeft: 10}}>
        <Text style = {styles.title}> Create your Profile </Text>

        <Text style={styles.subtitle}> My age is... </Text>

        <View style={{flexDirection:'row', marginLeft: 10 }}>
          <TouchableOpacity
              style = {[styles.button, {backgroundColor: this.state.button16color}]}
              onPress= {() => this.setState({
                  button16color: '#CF9799',
                  button21color: 'transparent',
                  button30color: 'transparent',
                  button40color: 'transparent',})}>
            <Text style= {styles.text}>16 - 20 </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.button, {backgroundColor: this.state.button21color}]}
            onPress= {() => this.setState({
                button16color: 'transparent',
                button21color: '#CF9799',
                button30color: 'transparent',
                button40color: 'transparent',})}>
            <Text style= {styles.text}> 21 - 30 </Text>
          </TouchableOpacity>

        </View>
        <View style={{flexDirection:'row', marginLeft: 10 }}>
          <TouchableOpacity style = {[styles.button, {backgroundColor: this.state.button30color}]}
              onPress= {() => this.setState({
                  button16color: 'transparent',
                  button21color: 'transparent',
                  button30color: '#CF9799',
                  button40color: 'transparent',})}>
            <Text style= {styles.text}>31 - 40</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.button, {backgroundColor: this.state.button40color}]}
              onPress= {() => this.setState({
                  button16color: 'transparent',
                  button21color: 'transparent',
                  button30color: 'transparent',
                  button40color: '#CF9799',})}>
            <Text style= {styles.text}>   40 +   </Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.subtitle}> I am... </Text>

        <View style={{flexDirection:'row', marginLeft: 10 }}>
          <TouchableOpacity
              style = {[styles.button, {backgroundColor: this.state.buttonfcolor}]}
              onPress= {() => this.setState({
                  buttonfcolor: '#CF9799',
                  buttonmcolor: 'transparent',
                  })}>
            <Text style= {styles.text}>Female </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style = {[styles.button, {backgroundColor: this.state.buttonmcolor}]}
              onPress= {() => this.setState({
                  buttonfcolor: 'transparent',
                  buttonmcolor: '#CF9799',
                  })}>
            <Text style= {styles.text}>    Male   </Text>
          </TouchableOpacity>

        </View>
        <Text style={styles.subtitle}> Relationship Status... </Text>
        <View style={{flexDirection:'row', marginLeft: 10 }}>
          <TouchableOpacity
              style = {[styles.button, {backgroundColor: this.state.buttonscolor}]}
              onPress= {() => this.setState({
                  buttonscolor: '#CF9799',
                  buttonfamcolor: 'transparent',
                  })}>
            <Text style= {styles.text}>  Single  </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style = {[styles.button, {backgroundColor: this.state.buttonfamcolor}]}
              onPress= {() => this.setState({
                  buttonscolor: 'transparent',
                  buttonfamcolor: '#CF9799',
                  })}>
            <Text style= {styles.text}>  Family  </Text>
          </TouchableOpacity>

        </View>
          <Text style={styles.subtitle}> I am from... </Text>
          <TextInput style = {styles.inputBoxes} placeholder='Enter nationality'/>
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity style = {styles.skipButton} onPress = {() => this.props.navigation.navigate('Trip')} >
              <Text style = {{marginLeft: 0, marginTop: 50, fontSize: 30, color:'#7C3538', fontWeight:'bold'}}>
                  Submit </Text>
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
    fontWeight: 'bold'
  },
  button: {
    color : '#7C3538',
    borderRadius : 30,
    borderWidth: 2,
    borderColor: '#7C3538',
    marginTop: 15,
    marginRight: 30,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: "14%",
    paddingVertical : 10
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
    marginLeft : "35%",
    flexDirection: 'row'
  },
})
export default Profile;
