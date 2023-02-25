import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home from './src/screens/Home';
import Feed from './src/screens/Feed';
// import TabHeader from './src/components/TabHeader';
import React, {useMemo} from 'react';


const renderScene = SceneMap({
  home: Home,
  feed: Feed,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'feed', title: 'Feed' },
  ]);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="white"
        barStyle="light-content"
      />
      <SafeAreaView style={{ flex:0, backgroundColor: 'white' }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          { index === 0 ? <View style={{ width: 24, marginLeft: 24 }} /> :
          <TouchableOpacity onPress={() => (setIndex(index - 1))}>
            <Image
              source={require("./assets/left-arrow.png")}
              style={{width: 24, height: 24, marginLeft: 24 }}
            />
          </TouchableOpacity>
          }
          <Text style={{ fontSize: 24, marginLeft: "auto", marginRight: "auto", }}>Feed</Text>
          { index === routes.length - 1 ? <View style={{ width: 24, marginRight: 24 }} /> :
          <TouchableOpacity onPress={() => (setIndex(index + 1))}>
            <Image
              source={require("./assets/right-arrow.png")}
              style={{width: 24, height: 24, marginRight: 24 }}
            />
          </TouchableOpacity>
          }
        </View>
        <TabView
          renderTabBar={() => null}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </SafeAreaView>
      <SafeAreaView style={{ flex:0, backgroundColor: 'black' }} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    height: "20",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 8
  }
});
