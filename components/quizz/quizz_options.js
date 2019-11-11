import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export class Quizz_options extends Component {

  _onPress = () => {
    console.log('quizz_option_item Pressed : ');
    console.log(this.props.quizz_option);
    this.props.onPressItem(this.props.quizz_option);
  };

  render() {
    console.log(this.props);
    const { quizz_option } = this.props

    return (
      <TouchableOpacity
        onPress={this._onPress}
      >
        <View style={styles.quizz_option}>
          <Text style={styles.quizz_optionDescription}>{quizz_option.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  quizz_option: {
    flex: 1,
    //width: '100%',
    alignSelf: 'stretch',

    minHeight: 32,

    marginTop: 4,
    marginBottom: 4,

    backgroundColor: 'rgba(64, 64, 64,0.3)',

    borderRadius: 8,
  },

  quizz_optionDescription: {

    flex: 1,

    padding: 12,

    color: '#ffffff',

    fontSize: 24,
    fontWeight:'normal',
    textAlign: 'center',

    textShadowColor:'#000000',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:0,

  },

});