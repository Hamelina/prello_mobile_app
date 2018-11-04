import React , {Component} from 'react';
import { withNavigation } from 'react-navigation';
import boardsFakeData from "../../Data/boards.json" ; 
import { List, ListItem , CheckBox, View } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 
import CustomCheckBoxComponent from './CustomCheckboxComponent';

class BoardsFilterComponent extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            checked: false,
            checkedItems: new Map()
        }
        this.handleChange = this.handleChange.bind(this);
        
    }
    
    handleChange(e) {
        // console.log("in handlechange");
        // const item = e.target.title;
        // const isChecked = e.target.checked;
        // this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }
    render(){
        
        return (
            console.log("checked in board : " + this.state),
            <List containerStyle={styles.filterScreen }>
            {
                boardsFakeData.map((l) => (
                    
                    
                    <ListItem 
                    hideChevron
                    key={l.id}
                    title={
                        // <CheckBox
                        // title={l.name}
                        // onPress={() => {
                        
                        //     this.setState(() => ({
                        //         filterByelements: filterByelements.concat(l.id) })
                        //         );
                        //     this.setState((state) => ({
                        //         checked: !state.checked,
                        //     }));
                        //     console.log(l.id);
                        //     console.log(this.state.filterByelements);
                        // }}
                        // checked= {this.state.checked}
                        // />
                        <CustomCheckBoxComponent id={l.id} title ={l.title} onChange={this.handleChange} />
                        
                    }
                    
                    />
                    
                    ))
                }
                </List>
                )
                
            }
        }
        export default withNavigation(BoardsFilterComponent); 