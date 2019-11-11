import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



export class Themes_list_items extends Component {

  _onPress = () => {
    this.props.onPressItem(this.props.theme);
  };

  render() {

    const { theme } = this.props

    return (
      <TouchableOpacity
        onPress={this._onPress}
      >
      <View style={styles.theme}>

        <View style={[{backgroundColor: theme.color},styles.themeData]}>
          <Text style={styles.themeName}>{theme.name}</Text>
        </View>

      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  theme: {
    flex: 1,
    flexDirection: 'row',

    minHeight: 80,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },

  themeData: {
    flex: 1,
    padding: 20,
  },

  themeName: {
    color: '#000000',

    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

    textShadowColor:'#ffffff',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:0,

  },

  themeDescription:{
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },

});
