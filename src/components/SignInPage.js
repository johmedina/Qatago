import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class SignInPage extends React.Component{
  static propTypes = {
      skipPress: PropTypes.func,
  }
  state = {
      signUp: false,
      signIn: true,
      signUpText: '#7C3538',
      signInText: 'white',
      signUpBg: 'white',
      signInBg: '#7C3538',
      signText: 'SIGN IN'
    }
  render() {
      console.disableYellowBox = true; 
      return (
        <View style = {styles.container}>
        <Image style= {styles.image} source={{uri:'https://live.staticflickr.com/65535/49471646261_36f41a8ba0_o.png'}}/>
          <View style = {{width: '140%',}}>
            <View style = {{flexDirection: 'row', alignSelf: 'center', marginLeft: -155, marginBottom:50}}>

            <TouchableOpacity
                style = {[styles.optionSignIn, {backgroundColor: this.state.signUpBg}]}
                onPress = {() => this.setState({
                                                signUp: true,
                                                signIn: false,
                                                signUpText:'white',
                                                signInText:'#7C3538',
                                                signUpBg:'#7C3538',
                                                signInBg:'white',
                                                signText:'SIGN UP'})}
            >
              <Text style = {{color: this.state.signUpText, alignSelf: 'center'}}> SIGN UP </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {[styles.optionSignUp, {backgroundColor:this.state.signInBg}]}
                onPress = {() => this.setState({
                                                signUp: false,
                                                signIn: true,
                                                signInText:'white',
                                                signUpText:'#7C3538',
                                                signUpBg:'white',
                                                signInBg:'#7C3538'})}>
              <Text style = {{color: this.state.signInText, alignSelf: 'center'}}> SIGN IN </Text>
            </TouchableOpacity>

            </View>

            {this.state.signUp && (
                        <View>

                          <View>
                            <TextInput
                              placeholder = 'Name'
                              autoCorrect = {false}
                              secureTextEntry={false}
                              autoCapitalize = "none"
                              style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

                            />
                          </View>
                          <View>
                            <TextInput
                              placeholder = 'Phone Number'
                              autoCorrect = {false}
                              secureTextEntry={false}
                              autoCapitalize = "none"
                              style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

                            />
                          </View>
                        </View>

      )}


            <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
              <TextInput
                placeholder = 'Email'
                autoCapitalize = "none"
                autoCorrect = {false}
                style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

              />
            </View>

            <View>
              <TextInput
                placeholder = 'Password'
                autoCorrect = {false}
                secureTextEntry={true}
                autoCapitalize = "none"
                style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

              />
            </View>
            {this.state.signUp && (
                        <View>
                          <View>
                            <TextInput
                              placeholder = 'Confirm Password'
                              autoCorrect = {false}
                              secureTextEntry={true}
                              autoCapitalize = "none"
                              style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

                            />
                            </View>
                        </View>

      )}



            <TouchableOpacity style = {styles.signButton} onPress = {() => this.props.navigation.navigate('Profile')}>
            <Text style = {{color: 'white', alignSelf: 'center'}}> CONTINUE</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.skipButton} onPress = {() => this.props.navigation.navigate('Profile')} >
              <Text style = {{marginLeft: -20, marginTop: 50, fontSize: 20, color:'#7C3538'}}>
                  Skip </Text>
              <Icon style = {{marginLeft: -1, marginTop: 49, color:'#7C3538'}} name="angle-right" size={27} color='black'/>
            </TouchableOpacity>


          </View>
      </View>
  );

}
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    color: '#7C3538'
  },

  image:{
    alignSelf: 'center',
    width: '69%',
    height: '20%',
    resizeMode: 'contain',
    justifyContent: 'center',

  },

  inputBoxes: {
    alignSelf: 'center',
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    fontSize: 16,
    marginBottom: 15,
    marginTop: 50,
    marginLeft: -160,
    color:'black',
  },

  optionSignIn: {
    borderWidth: 2,
    borderColor: '#7C3538',
    marginRight: 20,
    backgroundColor: 'white',
    width: 140,
    height: 25,
    justifyContent: 'center',
  },

  optionSignUp: {
    borderWidth: 2,
    borderColor: '#7C3538',
    backgroundColor: 'black',
    width: 140,
    height: 25,
    justifyContent: 'center',
  },

  signButton: {

    backgroundColor: '#7C3538',
    borderWidth: 0,
    width: 160,
    height: 40,
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 136,
  },

  skipButton: {
    marginLeft : 300,
    flexDirection: 'row'
  },



});

export default SignInPage;
