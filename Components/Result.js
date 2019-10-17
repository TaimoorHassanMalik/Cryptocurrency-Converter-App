import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Result extends Component {
    
    render() {
        const curr = this.props.currency.toLowerCase()
        const p = 'price_' + curr
        return (
            <View style={styles.container}>
                
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 8,color:'red' }} >Result</Text>
                <View style={{ flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'baseline' }}  >
                    <Text>The Price Of</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 19 }} > {this.props.crypto} </Text>
                    <Text> from </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 19, paddingRight: 5 }} >{this.props.currency} </Text>
                </View>
                {
                    this.props.resultss[0] &&
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30,marginBottom:20 }} >

                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10,color:'green' }} >{this.props.resultss[0][p]}</Text>
                        <View style={{ paddingTop: 30, }}>
                            <Text style={{ fontSize: 18, }}>Rank  : {this.props.resultss[0].rank}</Text>
                            <Text style={{ fontSize: 18, }}>Percentage Change in 7 days : {this.props.resultss[0].percent_change_7d}</Text>
                            <Text style={{ fontSize: 18, }}>Percentage Change in 24 hours : {this.props.resultss[0].percent_change_24h}</Text>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e67e22',
        width: '100%',
        // flex: 1,
        alignItems: 'center',
        backgroundColor:'#E0FFFF',
        borderRadius:30,
        elevation: 20,

    },
});
export default Result;
