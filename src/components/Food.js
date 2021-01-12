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


class Food extends React.Component{
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
    bcacad1: 0,
    bcacad2: 0,
    bcacad3: 0,
    bcacad4: 0,
    bcacad5: 0,
    bcacad6: 0,
    bcacad7: 0,
    bcacad8: 0,


  };

  render(){
    return(
      <ScrollView>
      <View style={{marginLeft: 10}}>
        <Text style = {styles.title}> Enter your Preferences </Text>
        <Text style={styles.subtitle}> FOOD CUISINE </Text>


        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
                style={[styles.button, this.state.bcmalls && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcmalls: !(this.state.bcmalls) })}>
            <Text style={styles.text}> Local </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bccinema && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bccinema: !(this.state.bccinema) })}>
            <Text style={styles.text}> International </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bclib && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bclib: !(this.state.bclib) })}>
            <Text style={styles.text}> Asian </Text>
          </TouchableOpacity>

        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
                style={[styles.button, this.state.bcmuseum && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcmuseum: !(this.state.bcmuseum) })}>
            <Text style={styles.text}> Italian </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bctm && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bctm: !(this.state.bctm) })}>
            <Text style={styles.text}> Mediterranean </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcrest && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcrest: !(this.state.bcrest) })}>
            <Text style={styles.text}> Mexican </Text>
          </TouchableOpacity>
        </View>
          <View style = {{flexDirection: 'row', justifyContent: 'center'}}>

          <TouchableOpacity
                style={[styles.button, this.state.bcspa && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcspa: !(this.state.bcspa) })}>
            <Text style={styles.text}> American </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcsc && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcsc: !(this.state.bcsc) })}>
            <Text style={styles.text}> Vegan </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcacad1 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad1: !(this.state.bcacad1) })}>
            <Text style={styles.text}> Breakfast </Text>
          </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
                style={[styles.button, this.state.bcacad2 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad2: !(this.state.bcacad2) })}>
            <Text style={styles.text}> Chinese </Text>
          </TouchableOpacity>


          <TouchableOpacity
                style={[styles.button, this.state.bcacad3 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad3: !(this.state.bcacad3) })}>
            <Text style={styles.text}> Vegetarian </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcacad4 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad4: !(this.state.bcacad4) })}>
            <Text style={styles.text}> Indian </Text>
          </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
                style={[styles.button, this.state.bcacad5 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad5: !(this.state.bcacad5) })}>
            <Text style={styles.text}> Street </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcacad6 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad6: !(this.state.bcacad6) })}>
            <Text style={styles.text}> French </Text>
          </TouchableOpacity>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
                style={[styles.button, this.state.bcacad7 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad7: !(this.state.bcacad7) })}>
            <Text style={styles.text}> Filipino </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={[styles.button, this.state.bcacad8 && {backgroundColor: '#CF9799' }]}
                onPress={()=>this.setState({bcacad8: !(this.state.bcacad8) })}>
            <Text style={styles.text}> Pakistan </Text>
          </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row', marginBottom: 50, marginLeft: -50}}>
            <TouchableOpacity style = {styles.skipButton} onPress = {() => this.props.navigation.navigate('TabNav')} >
              <Text style = {{marginTop: 60, fontSize: 15, color:'#7C3538',}}> 3/3 </Text>
              <Text style = {{marginLeft: 5, marginTop: 50, fontSize: 30, color:'#7C3538', fontWeight:'bold'}}>
                  Submit </Text>
              <Icon style = {{marginLeft:5, marginTop: 49, color:'#7C3538'}} name="angle-right" size={38} color='black'/>
            </TouchableOpacity>
          </View>



          </View>
        </ScrollView>




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
    marginTop: 100
  },
})
export default Food;
