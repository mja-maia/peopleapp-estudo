import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props; 
    const { first, last, title } = people.name
    return <TouchableOpacity onPress={() => {
        navigateToPeopleDetail({people});
    }}>
				<View style={style.line}>
					<Image style={style.avatar} source={{ uri: people.picture.thumbnail }} />
					<Text style={style.lineText}>
						{`${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(
							last
						)} `}
					</Text>
				</View>
			</TouchableOpacity>;
}

const style = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",
		alignItems: "center",
		flexDirection: "row"
	},
	lineText: {
		fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 20
    }
});

export default PeopleListItem