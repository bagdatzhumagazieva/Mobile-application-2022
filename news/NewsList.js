import React, { Component } from 'react';
import {View, StyleSheet, Platform, ScrollView, Button} from 'react-native';
import  News from './news';
import axios from 'axios';

class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=62cb43128bf34a019ea46fc9a9e42289')
            .then(res => {
                this.setState({ news: res.data.articles });
            })
    }
    render(){
        return(
            <View style={styles.container}>
                <Button
                    title="home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
                <Button
                    title="main"
                    onPress={() =>
                        this.props.navigation.navigate('main')
                    }
                />
                <ScrollView >
                    {
                        this.state.news.map((items, Id) =>
                            <News key={Id} data={items} />
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 28
    }
})

export default NewsList;
