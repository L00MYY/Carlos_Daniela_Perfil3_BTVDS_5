import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import creadorData from '../data/creador';
import Boton from '../components/Boton';
import dataCarlos from '../data/dataCarlos';

const Carlos = ({ navigation }) => {
    const informacion = dataCarlos;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleMain}>Comidas Favoritas Carlos</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={dataCarlos}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.title2}>{item.title2}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <Boton
            textoBoton='Volver'
            accionBoton={irPantalla2}
            />
        </View>
    );
};

export default Carlos;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C6291',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 180, // Altura fija para evitar el crecimiento automático
        marginHorizontal: 5
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    titleMain: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    texto: {
        marginHorizontal: 15
    }
});