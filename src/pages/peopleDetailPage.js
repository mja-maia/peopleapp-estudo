import React, { Component} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Line from '../components/line'
import { capitalizeFirstLetter } from '../util'

class PeopleDetailPage extends Component {
    render(){
        const { people } = this.props.navigation.state.params
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Image source={{ uri: people.picture.large }} style={styles.avatar} />
                <Line label="Email:" content={people.email} />
                <Line label="Cidade:" content={capitalizeFirstLetter(people.location.city)} />
                <Line label="Estado:" content={capitalizeFirstLetter(people.location.state)} />
                <Line label="Tel:" content={people.phone} />
                <Line label="Cel:" content={people.cell} />
                <Line label="Nat:" content={people.nat} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1
    },
    container: {
       padding: 15 
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cell:{
        fontSize: 16,
        paddingLeft: 5
    },
    label:{
        fontWeight: 'bold',
    }
})

export default PeopleDetailPage