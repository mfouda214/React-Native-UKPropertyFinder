'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

export default class SearchPage extends Component<{}> {
  
  constructor(props) {
  	super(props);
  	this.state = {
    searchString: 'london'
  	};
  }

  render() {
    return (
      // Main View
      <View style={styles.container}>
        // First Text
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name or postcode.
        </Text>

        // Sub View
        <View style={styles.flowRight}>
  		<TextInput
  			style={styles.searchInput}
  			value={this.state.searchString}
  			placeholder='Search via name or postcode'
  		/>
  		<Button
   		 onPress={() => {}}
   		 color='#48BBEC'
   		 title='Go'
  		/>
		</View>
		// End sub view

		// House image 
		<Image source={require('./Resources/house.png')} style={styles.image}/>


      </View>
      // End Main View
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	alignSelf: 'stretch',
  },
  searchInput: {
   	height: 36,
   	padding: 4,
   	marginRight: 5,
   	flexGrow: 1,
   	fontSize: 18,
   	borderWidth: 1,
   	borderColor: '#48BBEC',
  	borderRadius: 8,
   	color: '#48BBEC',
  },
  	image: {
  	width: 217,
  	height: 138,
  },
});