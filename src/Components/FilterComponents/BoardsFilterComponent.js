import React , {Component} from 'react';
import { connect } from 'react-redux';
import {FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';
import boardsFakeData from "../../Data/boards.json" ; 
import { ListItem , List,Button,Icon ,Text, CheckBox, View } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 
import CustomCheckBoxComponent from './CustomCheckboxComponent';
import {addBoardToFilter , removeBoardFromFilter} from '../../Actions/FilterAction'

class BoardsFilterComponent extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            checked: false,
            checkedItems: new Map()
        }
    }
    _keyExtractor = (item, index) => item.id;
    
    handleChange = (idboard, isIn) => {
        if( ! isIn){
            this.props.addBoardToFilter( idboard);
        }
        else{
            this.props.removeBoardFromFilter(idboard);
            
        }
    }
    render(){
        const {boardsFilter} = this.props ;
        console.disableYellowBox = true;
        console.log("BoardfilterScreenComponent" , this.props );
        console.log("BoardfilterScreenComponent" , this.state );

        return (
            
            <List >
            <FlatList style ={styles.component}
            data = {boardsFakeData}
            keyExtractor={this._keyExtractor}
            extraData={boardsFilter}
            renderItem={({ item : board }) => (
                <ListItem 
                
                hideChevron
                key={board.id}
                
                title={
                    
                    <CustomCheckBoxComponent id={board.id} title ={board.name} 
                    handleChange={() =>this.handleChange(board.id, boardsFilter.includes(board.id) )} 
                    checked ={boardsFilter.includes(board.id)}
                    />
                    
                }
                />                
                
                )}
                
                />
                </List>
                
                
                )
            }
            
        }
        
        const mapStateToProps = (state, props) => console.log("board filter component" , state) || ({
            boardsFilter : state.filter.boardsFilter
        })
        
        const mapDispatchToProps = (dispatch, props) => ({
            addBoardToFilter: (idBoard) => dispatch(addBoardToFilter(idBoard)),
            removeBoardFromFilter: (idBoard) => dispatch(removeBoardFromFilter(idBoard))
            
        })
        
        
        export default withNavigation( connect(mapStateToProps, mapDispatchToProps)(BoardsFilterComponent)); 