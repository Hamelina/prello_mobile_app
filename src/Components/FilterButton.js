import React , {Component} from 'react';
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class FilterButton extends Component{
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount(props){
        
    }
    render(){
        const { navigate } = this.props.navigation;

        return (
            <Button
            raised
            // icon={{name: 'filter_list'}}
            title='Filter'
            onPress={() => console.log("filterbuttonPressed")||
                navigate('Filter')
                
            }
            />
            
            )
            
        }
    }
    export default withNavigation(FilterButton);