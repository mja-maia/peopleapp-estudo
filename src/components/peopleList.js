import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native'
import PeopleListItem from './peopleListItem'

const PeopleList =  props => {

    const { onPressItem, peoples } = props;

    return (
        <FlatList style={style.container}
            data={peoples}
            keyExtractor={item => item.name.first}
            renderItem={({ item }) => (
              <PeopleListItem people={item}
                navigateToPeopleDetail={onPressItem} />
        )} />
    );
};

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