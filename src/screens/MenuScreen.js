import React, {useEffect, useState} from 'react';
import { StatusBar, StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import HomeHeadNav from '../components/HomeHeadNav';
import Cardslider from '../components/Cardslider';
import Categories from '../components/Categories';
import BottomNav from '../components/BottomNav';
import { colors } from '../globals/style';
import { AntDesign } from '@expo/vector-icons';

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
      ];

    const[search, setSearch] = useState('');

  return (
        <View style={styles.container}>
            <StatusBar />
            <HomeHeadNav title={"Menu"} navigation={navigation}/>
            <BottomNav navigation={navigation} />

            <Text style={styles.box}>Order for: M5 </Text>
            {/* <ScrollView contentContainerStyle={styles.contentContainer}>  */}
                <View style={styles.searchbox}>
                    <AntDesign name="search1" size={24} color="black" style={styles.searchicon}/>            
                    <TextInput style={styles.input} placeholder='Search'
                        placeholderTextColor='gray'
                        onChangeText={(text)=>{setSearch(text)}}
                    />
                </View>
                {search != ''
                && <View style={styles.searchresultsout}>
                    {/* <Text>Your typed something</Text> */}
                    <FlatList style={styles.searchresultsin}
                        data={data}
                        renderItem={({item})=>{
                            if(item.name.toLowerCase().includes(search.toLowerCase())){
                                return(
                                    <View style={styles.searchresults}>
                                        <AntDesign name="arrowright" size={24} color="black" />
                                        <Text style={styles.searchresultstext}>{item.name}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                    </View>}
                <Categories />
                <Cardslider title={"Menu"} data={data} navigation={navigation}/>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    container: {
        //marginTop:50,
        flex:1,
        width: "100%",
        alignItems:'center',
        backgroundColor: colors.col1,
    },
    box: {
        backgroundColor: colors.col1,
        width: '95%',
        margin:10,
        padding:10,
        borderRadius: 10,
        boxShadow: '1px 1px 5px #888888', //web use
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:18,
      },
    searchicon: {
        color: colors.text1,
    },
    input:{
        marginLeft:10,
        width:'100%',
        fontSize:18,
        color: colors.col1,
        outlineStyle: "none",
    },
    searchbox:{
        flexDirection:'row',
        width:'95%',
        backgroundColor: colors.col1,
        borderRadius:10,
        alignItems:'center',
        padding:10,
        margin:10,
        //elevation:10,
        boxShadow: '2px 2px 10px #888888', //web use
    },
    searchresultsout:{
        width:'100%',
        marginHorizontal:30,
        //height:'100%',
        backgroundColor: colors.col1,

    },
    searchresultsin:{
        width:'100%',
    },
    searchresults:{
        width:'100%',
        flexDirection: 'row',
        alignItems:'center',
        padding: 5,
    },
    searchresultstext:{
        marginLeft: 10,
        fontSize: 18,
        color: colors.text1,
    },
    contentContainer:{
        alignItems: 'center', 
        justifyContent: 'center',
    },
    // bottomnav: {
    //     position: 'absolute',
    //     bottom: 0,
    //     width:'100%',
    //     backgroundColor: colors.col1,
    //     zIndex:20,
    // },
})