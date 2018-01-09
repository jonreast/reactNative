import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';



export default class Pikachu extends Component {
  render() {
    let pic = { 
      uri: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/32/83261777-bc5c-5e52-b3da-b93f55c07594/5550f5a3e4ca8.image.png'
    }

    return(
      <View style={styles.container}>
        <Image source={pic} style={{width: 210, height: 220}} />
        <Greeting name='Pikachu' />
        <Blink text='I LOVE YOU!' />
      </View> 
    );
  }
}

class Greeting extends Component {
 render() {
   return(
     <Text style={styles.blue}>Hello {this.props.name}</Text>
   )
 } 
}


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 200);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
  },
  blue: {
    color: 'blue',
    fontWeight: 'bold',
  }
});
