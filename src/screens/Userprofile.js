import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios'; //npm i axios
import { Ionicons } from '@expo/vector-icons';
import { navbtn, navbtnin, navbtnout, colors, btn1, btntxt1 } from '../globals/style'
import Backbtn from '../components/Backbtn';

const Userprofile = ({navigation}) => {
    // const [userloggeduid,setUserloggeduid] = useState(null);
    // useEffect(()=>{
    //     const checklogin = async ()=>{
    //         try {
    //             const response = await axios.get('http://your-dotnet-backend/api/checklogin');
    //             if (response.data) {
    //                 setUserloggeduid(response.data.uid);
    //                 console.log(userloggeduid);
    //             } else {
    //                 setUserloggeduid(null);
    //               console.log('No user logged in');
    //               navigation.navigate('login');
    //             }
    //           } catch (error) {
    //             console.error('Error checking login:', error);
    //           }
    //         };
    //     checklogin();
    // },[])
    
    // const [userdata,setUserdata] = useState(null);
    // useEffect(()=>{
    //     const getUserData = async () => {
    //         try {
    //           const response = await axios.get('http://your-dotnet-backend/api/userdata/userId');
    //           if (response.status === 200) {
    //             setUserdata(response.data);
    //           } else {
    //             console.log('Failed to fetch user data');
    //           }
    //         } catch (error) {
    //           console.error('Error fetching user data:', error);
    //         }
    //       };      
    //     getUserData();
    // },[userloggeduid])
    // console.log(userdata);
    const userdata = [
      {
        name:'example@e.com',
        email:'example@e.com',
      }
    ]

  return (
    <View style={styles.containerout}>
      <Backbtn navigation={navigation} redirectPage="menu"/>
      <Text style={styles.head1}>Your Profile</Text>
      <View style={styles.container}>
        <View style={styles.containerin}>
          <Text style={styles.head2}>Name: Mark Manager
            {userdata ?
              <Text style={styles.head2in}>{userdata.name}</Text>: 'Loading'
            }
          </Text>
          <Text style={styles.head2}>Email: manager@e.com
            {userdata ?
              <Text style={styles.head2in}>{userdata.email}</Text>: 'Loading'
            }
          </Text>
        </View>
        <TouchableOpacity style = {btn1} title="Sign Out" onPress={(e) => 
              // signOutFromApp()
              navigation.navigate('welcome')
          }>
                <Text style = {btntxt1}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Userprofile

const styles = StyleSheet.create({
    containerout:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      width:'100%',
    },
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      //justifyContent:'center',
      width:'100%',
    },
    head1:{
      fontSize:40,
      fontWeight:'200',
      marginVertical:20,
      color: colors.text3,
    },
    containerin:{
      width:'90%',
      alignItems:'center',
      borderWidth:1,
      borderColor:colors.text1,
      borderRadius:10,
      padding:20,
      marginTop:20,
    },
    head2:{
      fontSize:20,
      fontWeight:'300',
      margin:'auto',
    },
    head2in:{
      fontSize:20,
      fontWeight:'300',
    },
})