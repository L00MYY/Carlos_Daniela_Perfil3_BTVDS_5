import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import creadorData from '../data/creador';
import Boton from '../components/Boton';
import RNPickerSelect from 'react-native-picker-select';

const Pantalla2 = ({ navigation }) => {
    const creador = creadorData[0];
    const irPantalla1 =  () => {
        navigation.navigate('Pantalla1');
    };
    const irCarlos =  () => {
        navigation.navigate('Carlos');
    };
    const irDani = () => {
        navigation.navigate('Daniela');
    };

    const opciones =(opcion)=>{
        switch (opcion) {
            case 1:
              // Código a ejecutar si opcion es igual a 1
              navigation.navigate('Pantalla1');
              break;
            case 2:
              // Código a ejecutar si opcion es igual a 2
              navigation.navigate('Daniela');
              break;
              case 3:
                // Código a ejecutar si opcion es igual a 2
                navigation.navigate('Carlos');
                break;
            // Puedes añadir más casos según sea necesario
            default:
              // Código a ejecutar si ninguno de los casos anteriores coincide con el valor de opcion
          }

    }



    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{creador.name}</Text>
                    <Text style={styles.description}>{creador.desc}Seleccione un estudiante para ver sus comidas favoritas  {'\n'}

    </Text>
                </View>


                <RNPickerSelect
                 onValueChange={(value) => opciones(value)}
                 placeholder={{ label: 'Selecciona una pantalla...', value: null }} // Cambia el valor del placeholder aquí
                 items={[
                   { label: ' Inicio', value: 1 },
                   { label: 'Daniela', value: 2 },
                   { label: 'Carlos', value: 3 },
                 ]}
                />
       </View>
        </View>
    );
};

export default Pantalla2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6E5E3',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    lista: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 20, // Añade un margen a la izquierda para simular la lista
        fontWeight: 'bold', // Opcional: Puedes aplicar cualquier otro estilo que desees
        color: 'black', // Opcional: Color del texto de la lista
    },
    card: {
        backgroundColor: '#FFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
