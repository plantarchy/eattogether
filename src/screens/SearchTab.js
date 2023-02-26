import { useState } from 'react';
import {
    Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView

  } from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

import MakeNewFriend from '../components/SearchObject';

// const Searches = props => {
//     return (
//         <SearchBar
//     placeholder="Type Here..."
//     onChangeText={this.updateSearch}
//     value={search}
// />
//     )
// }

const DATA = [
    {
      id: "1",
      title: "Data Structures",
    },
    {
      id: "2",
      title: "STL",
    },
    {
      id: "3",
      title: "C++",
    },
    {
      id: "4",
      title: "Java",
    },
    {
      id: "5",
      title: "Python",
    },
    {
      id: "6",
      title: "CP",
    },
    {
      id: "7",
      title: "ReactJs",
    },
    {
      id: "8",
      title: "NodeJs",
    },
    {
      id: "9",
      title: "MongoDb",
    },
    {
      id: "10",
      title: "ExpressJs",
    },
    {
      id: "11",
      title: "PHP",
    },
    {
      id: "12",
      title: "MySql",
    },
  ];

const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text>{title}</Text>
      </View>
    );
  };
  
  const renderItem = ({ item }) => <Item title={item.title} />;
  class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        data: DATA,
        error: null,
        searchValue: "",
      };
      this.arrayholder = DATA;
    }
  
    searchFunction = (text) => {
      const updatedData = this.arrayholder.filter((item) => {
        const item_data = `${item.title.toUpperCase()})`;
        const text_data = text.toUpperCase();
        return item_data.indexOf(text_data) > -1;
      });
      this.setState({ data: updatedData, searchValue: text });
    };
  
    render() {
      return (
        <View style={styles.container}>
          <SearchBar
            placeholder="Search Here..."
            lightTheme
            round
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
          />
          <FlatList
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  }
  
  export default Search;
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      padding: 2,
    },
    item: {
      backgroundColor: "#f5f520",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });