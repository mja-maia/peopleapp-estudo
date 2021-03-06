import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Line = ({label = "", content = ""}) => (
    <View style={styles.detailContainer}>
        <View style={styles.line}>
            <Text style={[
                styles.cell,
                styles.label,
                label.length > 8 ? styles.longLabel : null
                ]}> {label} </Text>
            <Text style={[styles.cell, styles.content]}> {content} </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
	line: {
		flexDirection: "row",
		paddingTop: 3,
		paddingBottom: 3,
		borderWidth: 1,
		borderColor: "#C5C5C5"
	},
	cell: {
		fontSize: 18,
		paddingLeft: 5
    },
    content: {
        flex: 3
    },
	label: {
        fontWeight: "bold",
        flex: 1
    },
    longLabel: {
        fontSize: 11
    }
});

export default Line