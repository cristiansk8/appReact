import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
function1(){
  this.setState({colorFondo:'yellow'})
}
  render() {
    return (
      <View style={styles.container}>
        <Text>Hola mundo!!!Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>

        <Text>Shake your phone to open the developer menu.</Text>
        <TouchableOpacity style={styles.boton} onPress={this.function1}>
<Text style={styles.textoBoton}>click me </Text>
        </TouchableOpacity>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    backgroundColor:'blue',
    width: 300,
    height:30,
    borderWidth:2,
    borderColor:'white',
    borderRadius: 12
  },
  textoBoton:{
    color:'white',
    fontSize:20,
    textAlign:'center'
  }
});
