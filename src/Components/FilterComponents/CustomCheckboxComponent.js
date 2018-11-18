import { CheckBox } from 'react-native-elements';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
 

// export default class CustomCheckboxComponent extends Component {
//     constructor() {
//         super();

//         this.state = {
//             checked: false
//         };
//     }

// render() {

// const { checked } = this.state;

// return (
// console.log(this.props),

const CustomCheckboxComponent=({
    id, title ,  handleChange, checked, 
}) => (
    console.log("checkeddd"+title),
    <CheckBox 
    key={id}
    title={title}
    iconRight
    iconType='material'
    checkedIcon='clear'
    uncheckedIcon='add'
    checkedColor='red'
    checked={checked}
    onPress={() => {
        handleChange()

    }
}
/>
);

CustomCheckboxComponent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
}
// const mapStateToProps = (state, props) => ({
//     name: state.checkItem.name,
//     state: state.checkItem.state
//   })

//   const mapDispatchToProps = (dispatch, props) => ({
//     setCheckItemState: (complete) => dispatch(setCheckItemState( props.id, complete ))
//   });

export default CustomCheckboxComponent ; 






// }