import React, {Component} from 'react'; 
import {Stylesheet , Text, View , Image, TextInput, TouchableOpacity} from 'react-native'; 
import styles from '../../Styles/LoginInputStyle'
import { withNavigation } from 'react-navigation';
import { logIn } from '../../Request/login';

class LoginInput extends Component {
    
    onSubmitHandler = (event) => {
        
        const password = this.passwordInput;
        const id = this.idInput;
        
        //let reg = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
        let cleanId  = true ; //id.replace(/(^\s*)|(\s*$)/g, "");
        let cleanPassword = true; 
        
        // console.log(reg.test(id)); 
        // if(reg.test(id) === false)
        // {
        //     console.log("Email is Not Correct");
        //     this.setState({id:id})
        //     cleanId= false
            
        // }
        // else {
        //     this.setState({id:id})
        //     console.log("Email is Correct");
        //     cleanId=true
            
        // }
        
        //const cleanPassword = password && password.replace(/(^\s*)|(\s*$)/g, "")
        //const cleanId = id && id.replace(/(^\s*)|(\s*$)/g, "");
        console.log(this.state)
        if (cleanPassword && cleanId) {
            const { navigate } = this.props.navigation;
            logIn(id, password);
            navigate('Main')
            
        } else {
            this.passwordInput = cleanPassword;
            this.idInput = cleanId;
            this.setState({ error: "All fields are required" })
        }
    }
    onPress = () => {
        this.onSubmitHandler()
    }
    
    onGoogleSuccessHandler = (response) => {
        //JWT = response.hg.id_token
    }
    
    onGoogleFailureHandler = (response) => {
        
    }
    render(){
        this.passwordInput = React.createRef();
        this.idInput = React.createRef();
        
        return(
            <View style= {styles.container}>
            <TextInput
            ref = {this.passwordInput}
            placeholder = "Enter Your Email Address"
            placeholderTextColor = "rgba(255,255,255,0.8)"
            returnKeyType = "next"
            style = {styles.input}
            value={this.id}
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
            <TouchableOpacity onPress={this.onSubmitHandler}>
            
            <Text style = {styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            
            </View>
            )
        }
        
        
    }
    export default withNavigation(LoginInput); 