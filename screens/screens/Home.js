import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <SafeAreaView style={styles.droidSafeArea}/>
               <View style={styles.titleBar}>
                <Text style={styles.titleText}>App</Text>
                <Text style={styles.titleText}>Estelar</Text>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Nave Espacial</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Mapa Estelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Imagens Diarias</Text>
                </TouchableOpacity>
               </View>
            </View>
        )
    }
}
styles=StyleSheet.create({
    container: {
        flex: 1,
      },
      routeText:{
        fontSize: 25,
        fontWeight: 'bold',
        color:"#D11583",
        justifyContent: 'center',
        alignItems: 'center',
      },
      droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      titleBar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
      },
      routeCard: {
        flex: 0.12,
        marginLeft: 30,
        marginRight: 30,
        margin:10,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    