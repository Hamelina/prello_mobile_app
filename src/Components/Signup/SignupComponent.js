import React, {Component} from 'react'; 
import {View , Image, KeyboardAvoidingView,TouchableOpacity, Text, TextInput} from 'react-native'; 
import styles from '../../Styles/SignupStyle';
import { withNavigation } from 'react-navigation';



class Signup extends Component {
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            
            <View style= {styles.logoContainer}>
                    <Image
                    style={ styles.logo}
                    source = {require('../../../assets/logo1.png')}
                    />
            </View>
        
            <View style= {styles.container}>    
                <TextInput
                    placeholder = "Enter Your Email Address"
                    placeholderTextColor = "rgba(255,255,255,0.8)"
                    returnKeyType = "next"
                    style = {styles.input}
                    onSubmitEditing = {()=>this.passwordInput.focus()}
                    />
                    
                    <TextInput
                    placeholder = "Enter Your Password"
                    placeholderTextColor = "rgba(255,255,255,0.8)"
                    returnKeyType = "go"
                    secureTextEntry
                    style = {styles.input}
                    ref= {(input) => this.passwordInput = input}
                    />

                    <TextInput
                    placeholder = "Enter Your Password Again"
                    placeholderTextColor = "rgba(255,255,255,0.8)"
                    returnKeyType = "go"
                    secureTextEntry
                    style = {styles.input}
                    ref= {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity onPress={this.onPress}>
                    <Text style = {styles.buttonText}>SIGNUP</Text>
                    </TouchableOpacity>
            </View>

            </KeyboardAvoidingView>

        )
    }

    
}
export default withNavigation(Signup); 