import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Slider, TextInput, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry'
import Icon from 'react-native-vector-icons/FontAwesome';
import Select from 'react-select'
import countryList from 'react-select-country-list'


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CalendarPicker from 'react-native-calendar-picker';


class Profile extends React.Component{
  constructor(props) {
  super(props)

  this.options = countryList().getData()

  this.state = {
    selectedStartDate: new Date(2020, 14, 2),
    selectedEndDate: new Date(2020, 2, 14),
    buttonmcolor: 'transparent',
    buttonscolor: '#CF9799',
    buttonfamcolor: 'transparent',
    options: this.options,
    value: 4000,
  };
  this.onDateChange = this.onDateChange.bind(this);

  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: new Date(2020, 14, 2),
      });
    } else {
      this.setState({
        selectedStartDate: new Date(2020, 3, 2),
        selectedEndDate: null,
      });
    }
  }



  changeHandler = value => {
     this.setState({ value })
   };

  render(){

    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2020, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return(
      <View style={{marginLeft: 10}}>
        <Text style = {styles.title}> Enter Trip Details </Text>

        <Text style={styles.subtitle}> Travel Date </Text>

        <View style={{marginTop: -80}}>
          <View style={styles.container}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor='#CF9799'
              selectedDayColor='#7C3538'
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
            />

          </View>
        </View>

        <View style={{marginTop: 350}}>
          <Text style={styles.subtitle}> Type of Trip </Text>
          <View style={{flexDirection:'row', marginLeft: 10 }}>
            <TouchableOpacity
                style = {[styles.button, {backgroundColor: this.state.buttonscolor}]}
                onPress= {() => this.setState({
                    buttonscolor: '#CF9799',
                    buttonfamcolor: 'transparent',
                    buttonmcolor: 'transparent',
                    })}>
              <Text style= {styles.text}>  Vacation  </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {[styles.button, {backgroundColor: this.state.buttonfamcolor}]}
                onPress= {() => this.setState({
                    buttonscolor: 'transparent',
                    buttonfamcolor: '#CF9799',
                    buttonmcolor: 'transparent',
                    })}>
              <Text style= {styles.text}>  Educational  </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {[styles.button, {backgroundColor: this.state.buttonmcolor}]}
                onPress= {() => this.setState({
                    buttonscolor: 'transparent',
                    buttonfamcolor: 'transparent',
                    buttonmcolor: '#CF9799',
                    })}>
              <Text style= {styles.text}>  Business  </Text>
            </TouchableOpacity>

          </View>
            <Text style={styles.subtitle}> Budget </Text>
            <Slider
                maximumValue={5000}
                minimumTrackTintColor = '#CF9799'
                minimumValue={0}
                step = {250}
                value = {4000}
                onValueChange={value => this.setState({ value })}
            />
            <Text style={styles.budget}>
                Budget Value: QR {this.state.value}
            </Text>


            <View style = {{flexDirection: 'row'}}>
              <TouchableOpacity style = {styles.skipButton} onPress = {() => this.props.navigation.navigate('Indoor')} >
                <Text style = {{marginLeft: 140, marginTop: 50, fontSize: 30, color:'#7C3538', fontWeight:'bold'}}>
                    Next </Text>
                <Icon style = {{marginLeft:7, marginTop: 49, color:'#7C3538'}} name="angle-right" size={38} color='black'/>
              </TouchableOpacity>
            </View>
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
    borderRadius : 10,
    borderWidth: 2,
    borderColor: '#7C3538',
    marginTop: 15,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: "2%",
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },

  budget: {
    fontSize: 15,
    color: '#7C3538'
  }
})
export default Profile;
