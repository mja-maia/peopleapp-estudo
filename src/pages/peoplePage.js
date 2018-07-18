import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from '../components/header'
import axios from 'axios'
import PeopleList from '../components/peopleList'


class PeoplePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            peoples : [],
            loading : false,
            error   : false
        }
    }

    componentDidMount() {
        this.setState({ loading : true })
        setTimeout( () => {
            axios
                .get("https://randomusdasdasdadser.me/api?nat=br&results=15")
                .then(response => {
                    const { results } = response.data;
                    this.setState({
                        peoples : results,
                        loading : false
                    })
                }).catch(error => {
                    this.setState({ 
                        error   : true,
                        loading : false
                     })
                });
        }, 1500)
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loading ? <ActivityIndicator size="large" color="#6ca2f7"/> : 
                    this.state.error ? <Text style={styles.error}> Ops! Algo deu errado! :( </Text> :
                    <PeopleList peoples={this.state.peoples}
                    onPressItem={ pageParams => {
                        this.props.navigation.navigate('PeopleDetail', pageParams);
                    }} />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    error: {
        color: "red",
        alignSelf: "center"
    }
})

export default PeoplePage