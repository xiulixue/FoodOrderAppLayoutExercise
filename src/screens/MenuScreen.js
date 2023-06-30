import React, {useEffect, useState} from 'react';
import { StatusBar, StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import HomeHeadNav from '../components/HomeHeadNav';
import Cardslider from '../components/Cardslider';
import Categories from '../components/Categories';
import BottomNav from '../components/BottomNav';
import { colors } from '../globals/style';
import { AntDesign } from '@expo/vector-icons';
import Searchbar from '../components/Searchbar';

const MenuScreen = ({navigation}) => {

    // const [foodData, setFoodData] = useState([]);
    // useEffect(() => {
    //     fetchData();
    //   }, []);

    // const fetchData = async () => {
    //     try {
    //       const response = await axios.get('http://your-dotnet-backend/api/fooddata');
    //       setFoodData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    const data = [
        {
          id: 1,
          name: "Crispy Chicken",
          category: "Entrees",
          description: "Chicken, Chicken Salt",
          price: 6.5,
          ImgUrl: "crispychicken.webp",
        },
        {
          id: 2,
          name: "Takoyaki",
          category: "Entrees",
          description: "Octopus, Saurce",
          price: 7.0,
          ImgUrl: "takoyaki.webp",
        },
        {
            id:3,
            name: "Crispy Chicken",
            category: "Entrees",
            description: "Chicken, Chicken Salt",
            price: 6.5,
            ImgUrl: "crispychicken.webp",
          },
          {
            id: 4,
            name: "Takoyaki",
            category: "Entrees",
            description: "Octopus, Saurce",
            price: 7.0,
            ImgUrl: "takoyaki.webp",
          },
      ];

  return (
        <View style={styles.container}>
            <StatusBar />
            <HomeHeadNav title={"Order for: M5"} navigation={navigation}/>
            <BottomNav navigation={navigation} />
            <Searchbar data={data} />
            <Categories />
            <ScrollView 
                style={styles.scrollView} 
                contentContainerStyle={styles.contentContainer}
              > 
                <Cardslider title={"Menu"} data={data} navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        alignItems:'center',
        backgroundColor: colors.col1,
    },
    scrollView:{
        flex:1,
        width: "100%",
    },
    contentContainer:{
        alignItems: 'center', 
        justifyContent: 'center',
    },
})