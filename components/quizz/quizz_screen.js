import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native';

//Import the react-native-sound module
import Sound from 'react-native-sound';

import { Quizz_options } from './quizz_options';

import Game_init from '../game/game_init';

const imageCorrect = require('../../assets/images/arrow.png')
const imageWrong = require('../../assets/images/reverse_arrow.png')


const soundCorrect = new Sound('sound_success.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Sound loading error ...');
    console.log(error)
  }
})
const soundWrong = new Sound('sound_error.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Sound loading error ...');
    console.log(error)
  }
})

export class Quizz_screen extends Component {

  static navigationOptions = {
    header: null
  }

  constructor (props) {

    super(props);

    const theme = Game_init.get_actual_theme();
    this.actualquizzOption = -1;

    this.state = {
      theme: theme,
      modalCorrectVisible: false,
      modalWrongVisible: false,
    };
   
  }

  _onCancelButton = () => {
    console.log ("_onCancelButton");
    this.props.navigation.goBack();
  }

  _onAcceptButton = () => {
    console.log ("_onAcceptButton");
    //  Navigate to the first quizz
    this.props.navigation.navigate('Quizz_screen');
  }

  _onPressOption = (quizz_option) => {
      console.log ("_onPressOption");
      console.log (quizz_option);

      this.actualquizzOption = quizz_option;

      this._checkValidAnswer (quizz_option);

  };

  _moveNext = () => {
    console.log ("_moveNext");

    Game_init.update (this.actualquizzOption);
    if (Game_init.quizz_ending()) {

        
    Game_init.next_question ();
      //  Navigate to the next quizz
      this.props.navigation.navigate(
        'Quizz_screen'
      );

    } else {

      //  Navigate to the game results
      this.props.navigation.navigate(
        'Result_screen'
      );

    }

  };

  _checkValidAnswer = (quizz_option) => {

    this.correctAnswer = Game_init.correct_answer (Game_init.get_actual_quizz(), quizz_option);

    if (this.correctAnswer) {

      this._setModalCorrectVisible();

      soundCorrect.play((success) => {
        if (!success) {
          console.log('Sound did not play')
        }
        this._moveNext();
        this._hideModals();
      });

    } else {

      this._setModalWrongVisible();

      soundWrong.play((success) => {
        if (!success) {
          console.log('Sound did not play')
        }
        this._moveNext();
        this._hideModals();
      });
    }

  }

  _renderquizzOption = ({item}) => (
    <Quizz_options
      quizz_option={item}
      onPressItem={this._onPressOption}
      />
  );

  _keyExtractor = (item, index) => index;

  _setModalCorrectVisible() {
    this.setState({modalCorrectVisible: true});
    this.setState({modalWrongVisible: false});
  }

  _setModalWrongVisible(visible) {
    this.setState({modalCorrectVisible: false});
    this.setState({modalWrongVisible: true});
  }

  _hideModals () {
    this.setState({modalCorrectVisible: false});
    this.setState({modalWrongVisible: false});
  }


  _onRequestClose = () => {
    console.log ('Modal has been closed.');
    this._hideModals();
    this._moveNext();
  }

  _onDismiss = () => {
    console.log ('Modal has been dismissed.');
    //  quizz answered so move to the next
    this._moveNext();
  }

  _onShow = () => {
    console.log ('Modal has been shown.');

  }


  _renderquizzStatus = () => {

      const image = (this.state.modalCorrectVisible) ? imageCorrect : imageWrong;

      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={(this.state.modalCorrectVisible || this.state.modalWrongVisible)}
          onRequestClose={this._onRequestClose}
          onDismiss={this._onDismiss}
          onShow={this._onShow}
          >
            <View style={styles.statusContainer}>

              <TouchableHighlight
                  onPress={() => {
                    this._hideModals();
                  }}>
                <Image
                  style={styles.statusImage}
                  source={image}
                />
              </TouchableHighlight>

            </View>
        </Modal>
      );

  }


  render() {

    let actualquizzNumber = Game_init.get_actual_id_quizz() + 1;
    let totalquizzNumber = Game_init.get_quizz().length;
    let quizz = Game_init.get_actual_quizz();

    return (
      <View style={styles.container}>

        <ImageBackground
         style = {styles.imageBackground}
         source = {require('../../assets/images/bg.png')}
         resizeMode = "cover"
        >

          <View style={styles.headerContainer}>
            <Text style = {styles.headerTitle}>quizz {actualquizzNumber}/{totalquizzNumber}</Text>
          </View>

          <View style={styles.quizzDataContainer}>

            <View style={[{backgroundColor: this.state.theme.color},styles.quizzData]}>

              <Text style = {styles.quizzDescription}>{quizz.description}</Text>

            </View>

            <FlatList
              style={styles.quizz_options}
              data={quizz.options}
              renderItem={this._renderquizzOption}
              keyExtractor={this._keyExtractor}
              onPressItem={this._onPressOption}
              scrollEnabled={true}
              />

          </View>

        </ImageBackground>

        {this._renderquizzStatus()}

      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'rgb(230, 206, 144)',
  },

  quizzDataContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 16,
    marginRight: 16,
  },

  quizzData: {
    padding: 16,

    marginTop: 8,
    marginBottom: 8,

    alignSelf: 'stretch',

    maxHeight: 280,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',

    justifyContent: 'center',
  },


  quizzName: {
    color: '#000000',

    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 24,

    textShadowColor:'#ffffff',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:0,
  },

  quizzDescription : {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },

  imageBackground : {
    flex: 1,
    height: '100%',
    width: '100%',

    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  headerContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor : '#00BCD4',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
    margin : 8,
    marginTop : 36,
  },

  headerTitle : {
    fontWeight: '300',
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
  },

  quizzOptions : {
    width : '100%',
  },

  //  Modal status
  statusContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusImage: {
    width: 120,
    height: 120,
  }
});