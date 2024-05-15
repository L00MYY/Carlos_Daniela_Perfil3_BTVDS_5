import React from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Boton from '../components/Boton';
import data2 from '../data/data2';

const Daniela = ({ navigation }) => {
    const informacion = data2;
    const irPantalla1 = () => {
        navigation.navigate('Pantalla1');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data2={informacion}
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

            </ScrollView>
        </View>
    );
};

export default Daniela;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#A6B1E1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 180, // Altura fija para evitar el crecimiento automático
        marginHorizontal:5
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
        alignItems:'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    texto:{
        marginHorizontal:15
    }
});

