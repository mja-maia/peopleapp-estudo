import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import PeopleListItem from './peopleListItem'

const PeopleList =  props => {

    const items = props.peoples.map(people => {
        return <PeopleListItem key={people.name.first} people={people} />;
    })

    return <View style={style.container}>{items}</View>;
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff"
    },
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 5
    }
})

export default PeopleList