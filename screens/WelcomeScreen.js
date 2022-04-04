import { StyleSheet, Text, View, Image } from 'react-native';
import { useContext, useEffect, useState } from 'react';
//import { FlatList } from '../../../Session5/navigation-demo-app/node_modules/react-native-gesture-handler/lib/typescript';
import { FlatList } from 'react-native-gesture-handler';

function WelcomeScreen() {

  const [menuData, setMenuData] = useState([])

  const getMenuData = () => {
    const apiURL = "https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json"
    console.log(apiURL)
    console.log("2")
    return fetch(apiURL)
    .then( (response) => response.json().then( (json) => { setMenuData(json); console.log(json);}) 
    .catch( (error) => {console.error(error); })
    )
  }

  useEffect(() => {
    // Make Api call
    getMenuData()
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      {/* <Text style = {styles.title}>Category: {item.Category}</Text>  */}
      <Text>Flat List {item.Id}</Text>
      <Text>{item.Title}</Text>
      <Image style={styles.imgMenu} source = { {uri: item.Image} }/>
    </View>
  );


  return (
    <View style={styles.rootContainer} >
      <Text style={styles.title}>Welcome!</Text>
      {/* <Text>You authenticated successfully!</Text> */}
      

      <FlatList
        data= {menuData}
        keyExtractor = { (item) => {return item.Id}}
        renderItem = { renderItem }
      /> 

      <Text> Bottom</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  imgMenu: {
    width: '90%',
    height: 150,
    padding: 10,
    borderRadius: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});


export default WelcomeScreen;

