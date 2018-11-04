import { CheckBox } from 'react-native-elements';
import React, {Component} from 'react';

export default class CustomCheckboxComponent extends Component {
    constructor() {
        super();
        
        this.state = {
            checked: false
        };
    }
    
    render() {
        
        const { checked } = this.state;
        
        return (
            console.log(this.props),
            <CheckBox 
            key={this.props.id}
            title={this.props.title}
            iconRight
            iconType='material'
            checkedIcon='clear'
            uncheckedIcon='add'
            checkedColor='red'
            checked={checked}
            onChange = {this.props.onChange(this.props)}
            onPress={() => {
                this.setState({checked: !checked});
                this.setState({})
                console.log(this.props.id);
                this.props.onChange; 
            }
            }
            />
            );
        }
    }