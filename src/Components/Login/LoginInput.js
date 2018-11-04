import React, {Component} from 'react'; 
import {Stylesheet , Text, View , Image, TextInput, TouchableOpacity} from 'react-native'; 
import styles from '../../Styles/LoginInputStyle'
import { withNavigation } from 'react-navigation';


class LoginInput extends Component {
    
    onPress = () => {
        const { navigate } = this.props.navigation;

        navigate('Main')
    }
    
    render(){
        
        return(
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
            <TouchableOpacity onPress={this.onPress}>
            <Text style = {styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            
            </View>
            )
        }
        
        
    }
    export default withNavigation(LoginInput); 