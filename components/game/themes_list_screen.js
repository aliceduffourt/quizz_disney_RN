import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';

// Ignore Yellow Box Warnings
console.disableYellowBox = true;

import Game_init from './game_init';
import {Themes_list_items} from './themes_list_items';


//  Game Data
import localthemeslist from '../../assets/quizz_themes/themeslist.json';



export class Themes_list_screen extends Component {

  static navigationOptions = {
    header: null
  }

    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
      };
    }

    componentDidMount() {
        this.makeLocalRequestForthemeslist();
      }

      makeLocalRequestForthemeslist = () => {

        this.setState({ loading: true });
  
        this.setState({ error: null });
        this.setState({ themeslist : localthemeslist.themes });
  
        this.setState({ loading: false });
  
      };

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => (
      <Themes_list_items
        theme={item}
        onPressItem={this._onPressItem}
      />
    );

    _onPressItem = (theme) => {
  
        //  Store the selected game
    Game_init.set_actual_theme(theme);

    this.props.navigation.navigate (
      'Game_brief_screen',
      {
        theme :  theme
      }
    );

    };
  
    render() {

        return (
          <View style={styles.container}>
  
            <ImageBackground
             style = {styles.imageBackground}
             source = {require('../../assets/images/bg.png')}
             resizeMode = "cover"
            >
              <View style={styles.headerContainer}>
                <Text style = {styles.headerTitle}>Themes</Text>
              </View>
  
              <FlatList
                style={styles.themes}
                data={this.state.themeslist}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                />
            </ImageBackground>
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
  
      games: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
  
      },
  
      imageBackground : {
        flex: 1,
        height: '100%',
        width: '100%',
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
  
 });