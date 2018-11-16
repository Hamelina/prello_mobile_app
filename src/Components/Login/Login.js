import React, {Component} from 'react'; 
import {View , Image, KeyboardAvoidingView, ImageBackground,TouchableOpacity, Text} from 'react-native'; 
import LoginInput from './LoginInput'; 
import styles from '../../Styles/LoginStyle';
import { withNavigation } from 'react-navigation';
// http
import { GOOGLE_CLIENT } from '../../config.json';
import { logIn } from '../../Request/login';


class Login extends Component {
    onGoogleSuccessHandler = (response) => {
        console.error(response);
        googleLogin(response)
        .then(ok => this.props.history.push('/home'))
    }
    
    onGoogleFailureHandler = (response) => {
        console.error(response);
        this.setState({ error: "this Google auth has failed" });
    }
    
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            <ImageBackground source={{url: '../../../assets/headerComputerMan.jpg'}} style={{width: '100%', height: '100%'}}>
            
            <View>
                    <Text style = {styles.signup} onPress={()=> this.props.navigation.navigate('Signup')}> Signup </Text>
            </View>
            <View style= {styles.container}>
                <View style= {styles.logoContainer}>
                    

                    <Image
                    style={styles.logo}
                    source = {require('../../../assets/logo1.png')}
                    />
                </View>
                <View>
                    <LoginInput/>
                </View>

                <TouchableOpacity>
                    <Text style = {styles.googleText}> Login With Google Account</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>

            </KeyboardAvoidingView>

        )
    }

    
}
export default withNavigation(Login); 