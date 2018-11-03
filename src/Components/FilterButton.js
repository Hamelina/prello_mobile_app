import React , {Component} from 'react';
import { Button } from 'react-native-elements'

class FilterButton extends Component{
    
    constructor(props) {
        super(props);
    }
    
    render(){
        //const { navigate } = this.props.navigation;

        return (
            <Button
            raised
            // icon={{name: 'filter_list'}}
            title='Filter'
            // onPress={() =>
            //     navigate('FilterScreen')
            // }
            />
            )
            
        }
    }
    export default FilterButton; 