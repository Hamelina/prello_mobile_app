import React, {Component} from 'react'; 
import {View , Image, KeyboardAvoidingView, ImageBackground,TouchableOpacity, Text} from 'react-native'; 
import LoginInput from './LoginInput'; 
import styles from '../../Styles/LoginStyle';
import { withNavigation } from 'react-navigation';
// http
import { GOOGLE_CLIENT } from '../../config.json';
import { logIn } from '../../Request/login';
// import { GoogleSignin, GoogleSigninButton ,statusCodes} from 'react-native-google-signin';



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

    // GoogleSignin.configure({
    //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //     webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //     hostedDomain: '', // specifies a hosted domain restriction
    //     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //     forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login. 
    //     accountName: '', // [Android] specifies an account name on the device that should be used
    //     iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    //   });

    // signIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const userInfo = await GoogleSignin.signIn();
    //       this.setState({ userInfo });
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         // operation (f.e. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         // play services not available or outdated
    //       } else {
    //         // some other error happened
    //       }
    //     }
    //   };
    
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            <ImageBackground source={{url: '../../../assets/headerComputerMan.jpg'}} style={{width: '100%', height: '100%'}}>
            
            
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
            {/* <GoogleSigninButton
            
            style = {styles.googleText}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress}
            onSuccess={this.onGoogleSuccessHandler}
            onFailure={this.onGoogleFailureHandler}
             /> */}

            </View>
            </ImageBackground>
            
            </KeyboardAvoidingView>
            
            )
        }
        
        
    }
    export default withNavigation(Login); 