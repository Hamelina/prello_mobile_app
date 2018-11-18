import React, {Component} from 'react'; 
import {Stylesheet , Text, View , Image, TextInput, TouchableOpacity} from 'react-native'; 

import styles from '../../Styles/LoginInputStyle'
import { withNavigation } from 'react-navigation';
import { logIn, googleLogin } from '../../Request/login';
import { ErrorLogin, ErrorUncomplete } from '../../Request/requestErrors';


class LoginInput extends Component {
    
    constructor(props){
        super(props)
    
        this.state = {
          id: '',
          password: '',
        }
      }
    
     
    onPress = (event) => {
        console.log("in OnPress" )
        
        event.preventDefault();
        const password = this.state.password;
        const id = this.state.id;
        console.log(password , " ")
        const cleanPassword = true ;
        const cleanId =  id.replace(/(^\s*)|(\s*$)/g, "");
        
        if (cleanPassword && cleanId) {
            console.log("cleanPassword and id" )
            logIn(id, password)
            .then(ok =>  this.props.navigation.navigate('Main'))
            .catch(error => error instanceof ErrorLogin ? this.setState({ error: "Credentials don't match" }) : Promise.reject(error))
            .catch(error => {
                if (error instanceof ErrorUncomplete) {
                    this.passwordInput.current.value = cleanPassword;
                    this.idInput.current.value = cleanId;
                    return this.setState({ error: "All fields are required" })
                } else {
                    return Promise.reject(error);
                }
            })
            .catch(error => console.error(error))
        } else {
            this.passwordInput.current.value = cleanPassword;
            this.idInput.current.value = cleanId;
            console.log("all fields required" )
            this.setState({ error: "All fields are required" })
        }
    }
    
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
        this.passwordInput = React.createRef();
        this.idInput = React.createRef();
        return(
            <View style= {styles.container}>
            <TextInput
            ref = {this.idInput}
            placeholder = "Enter Your Email Address"
            placeholderTextColor = "rgba(255,255,255,0.8)"
            returnKeyType = "next"
            style = {styles.input}
            value={this.id}
            onSubmitEditing = {()=>this.passwordInput.focus()}
            onChangeText={(text) => this.setState({id : text})}
            />
            
            <TextInput
            placeholder = "Enter Your Password"
            placeholderTextColor = "rgba(255,255,255,0.8)"
            returnKeyType = "go"
            secureTextEntry
            style = {styles.input}
            onChangeText={(text) => this.setState({password : text})}
            ref= {this.passwordInput}
            />
            <TouchableOpacity onPress={this.onPress}>
            
            <Text style = {styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            
            </View>
            )
        }
        
        
    }
    export default withNavigation(LoginInput); 