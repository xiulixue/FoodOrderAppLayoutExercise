import React, {useState} from 'react';
import { StatusBar, StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeHeadNav from '../components/HomeHeadNav';
import Cardslider from '../components/Cardslider';
import Categories from '../components/Categories';
import { colors, btn1, btntxt1, titles } from '../globals/style';
import {button1} from '../globals/button.js'
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-web';
import BottomNav from '../components/BottomNav';

const TableScreen = ({navigation}) => {

    const data = [
        {id: 1,name: "M1",},
        {id: 2,name: "M2",},
        {id: 3,name: "M3",},
        {id: 4,name: "M4",},
        {id: 5,name: "M5",},
        {id: 6,name: "B1",},
        {id: 7,name: "B2",},
        {id: 8,name: "B3",},
        {id: 9,name: "O1",},
        {id: 10,name: "O2",},
        {id: 11,name: "O3",},
        {id: 12,name: "O4",},
      ];
    const[search, setSearch] = useState('');
    const pickTable = (item)=>{
        navigation.navigate('Menu', item)
      }

  return (
    <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav navigation={navigation} title={"Table"}/>
        <BottomNav navigation={navigation}/>
        <Text style={styles.box}>Select a Table: </Text>
        <FlatList
            style={styles.cardout}
            //horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity key={item.index} onPress={()=>{
                    //pickTable(item)
                    navigation.navigate('menu')
                }}>
                    <View style={styles.box1}>
                        <Text style={styles.txt1}>{item.name}</Text>
                    </View>               
                </TouchableOpacity>
            )}
        />
    </View>
    )
}

export default TableScreen

const styles = StyleSheet.create({
    container: {
        //marginTop:50,
        flex:1,
        width: "100%",
        alignItems:'center',
        backgroundColor: colors.col1,
    },
    cardout: {
        display:'flex',
        //width:"95%",
        //backgroundColor:'red',
    },
    box: {
        backgroundColor: colors.col1,
        width: '95%',
        margin:5,
        padding:10,
        borderRadius: 10,
        boxShadow: '1px 1px 5px #888888', //web use
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:18,
    },    
      box1: {
        backgroundColor: colors.col1,
        margin:5,
        padding:10,
        borderRadius: 5,
        boxShadow: '1px 1px 5px #888888', //web use
        alignItems:'center',
        fontSize:18,
      },   
    footerout:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        margin:10,
    },
})