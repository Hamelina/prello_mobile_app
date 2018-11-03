import React from 'react';
import { Text, View } from 'react-native';
import LabelsFilterComponent from '../Components/FilterComponents/LabelsFilterComponent';


class LabelsFilterScreen extends React.Component {
    render() {
        return (
            <View>
            <Text>Labels</Text>
            <LabelsFilterComponent/>
            </View>
            );
        }
    }
    export default LabelsFilterScreen;    
    