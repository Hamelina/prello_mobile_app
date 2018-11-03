import React , {Component} from 'react';
import { withNavigation } from 'react-navigation';
import listsFakeData from "../../Data/labels.json" ; 
import { List, ListItem  } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 

class LabelsFilterComponent extends Component{
    
    constructor(props) {
        super(props);
    }
    

    render(){
        const { navigate } = this.props.navigation;

        return (
            <List containerStyle={styles.filterScreen }>
            {
                listsFakeData.map((l) => (
                    <ListItem 
                    key={l.id}
                    title={l.name}
                    onPress={() => this.onPress(l.key)}
                    
                    />
                    ))
                }
                </List>
            )
            
        }
    }
    export default withNavigation(LabelsFilterComponent); 