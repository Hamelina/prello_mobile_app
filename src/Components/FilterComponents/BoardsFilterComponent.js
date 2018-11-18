import React , {Component} from 'react';
import { connect } from 'react-redux';
import {FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';
import boardsFakeData from "../../Data/boards.json" ; 
import { ListItem , List,Button,Icon ,Text, CheckBox, View } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 
import CustomCheckBoxComponent from './CustomCheckboxComponent';
import {addBoardToFilter , removeBoardFromFilter} from '../../Actions/FilterAction'; 
import client from '../../Request/client'
import {fetchUserBoards} from '../../Request/board'
import {setBoards} from '../../Actions/actionBoards'

//import {AccordionList} from "accordion-collapse-react-native";


class BoardsFilterComponent extends Component{
    
    constructor(props){
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
    componentDidMount(){
        console.log("-----------idClient", client.credentials);
        let idClient = client.getCredentials().idUser; 
        
        fetchUserBoards()
        .then (boards => this.props.dispatchUserBoards(boards))
        .catch(error => console.error(error))
    }

    
    render(){
        const {boardsFilter, boards, dispatchUserBoards} = this.props ;
        
        console.disableYellowBox = true;
        console.log("BoardfilterScreenComponent BOAAARD" , boards["boards"] );

        console.log("Boardfilter datafdake" , boardsFakeData);

        if(!boards){
            return (
              <View >
                  <Text>LOADING</Text>
              </View>
            )
          }
          else{
        return (     
            <List >
            <FlatList style ={styles.component}
            data = {boards["boards"]}
            keyExtractor={this._keyExtractor}
            extraData={boardsFilter}
            renderItem={({ item : board }) =>(
                <ListItem 
                
                // hideChevron
                key={board.id}
                
                title={
                    
                    <CustomCheckBoxComponent id={board.id} title ={board.name} 
                   
                    handleChange={() =>this.handleChange(board.id, boardsFilter.includes(board.id) )} 
                    checked ={boardsFilter.includes(board.id)}
                    />
                    
                }/>)}
                
                />
                </List>   
            
           

            // boards.map((board) => (
            //     <CustomCheckBoxComponent id={board.id} title ={board.name} 
                   
            //             handleChange={() =>this.handleChange(board.id, boardsFilter.includes(board.id) )} 
            //             checked ={boardsFilter.includes(board.id)}
            //             />
            //   ))
            
                )
            }
            
        }}

        const mapStateToProps = (state, props) => console.log("board filter component" , state.boards) || ({
            boardsFilter : state.filter.boardsFilter, 
            boards : state.boards,
        })
        
        const mapDispatchToProps = (dispatch, props) => ({
            addBoardToFilter: (idBoard) => dispatch(addBoardToFilter(idBoard)),
            removeBoardFromFilter: (idBoard) => dispatch(removeBoardFromFilter(idBoard)),
            dispatchUserBoards : (boards) => dispatch(setBoards(boards))
        })
        
        
        export default withNavigation( connect(mapStateToProps, mapDispatchToProps)(BoardsFilterComponent)); 