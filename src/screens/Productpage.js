import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { navbtnout,navbtn, navbtnin, colors,btn2, hr80, incdecbtn, incdecinput,incdecout } from '../globals/style';
import Backbtn from '../components/Backbtn';
import crispychicken from '../../assets/crispychicken.webp';
import { TextInput } from 'react-native-web';
import HomeHeadNav from '../components/HomeHeadNav';

const Productpage = ({navigation
  //,route
}) => {
  // const data = route.params;
  // console.log( "prodoct page data", data)
  // if(route.params === undefined){
  //   navigation.navigate('menu')
  // }

  const[quantity, setQuantity] = useState('1');
  const addtocart = ()=>{
    //console.log('add to cart')
    //const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().currentUser.uid);
    //const data1 = {data, Addonquantity: addonquantity, Foodquantity: quantity}
    const data1 = {Foodquantity: quantity}
    
    //console.log('data1', data1)
    //   docRef.get().then((doc)=>{
    //     if(doc.exists){
    //       docRef.update({
    //         cart: firebase.firestore.FieldValue.arrayUnion(data1)
    //       })
    //       alert('Added to cart')
    //     } else {
    //       docRef.set({cart: [data1],})
    //       alert('Added to cart')
    //     }
    //   })
    }
  
    const increaseQuantity = () => {
      setQuantity((parseInt(quantity)+1).toString())
    }
    const decreaseQuantity = () => {
      if(parseInt(quantity)>1){
        setQuantity((parseInt(quantity) - 1).toString())
      }
    }
  
  //console.log(data.foodAddonPrice);

  return (
    <View style={styles.containerout}>
    <StatusBar />
      <HomeHeadNav title="Order for: M5"/*{data.tableId}*/ navigation={navigation}/>
      <Backbtn navigation={navigation} redirectPage='menu'/>
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image
            source={crispychicken}
            style= {styles.cardimgin}
          />
        </View>
        <View style={styles.s2}>
          <View style={styles.s2in}>
            <Text style={styles.head1}>Name: </Text>
            <Text style={styles.head2}>Price: </Text>
          </View>
        </View>
        <View style={styles.s3}>
          <Text style={styles.head3}>About Food</Text>
          <Text style={styles.head4}>Descriptions: balabalabala...</Text>
          <View style={styles.s3in}>
            <Text>content </Text>
          </View>
        </View>

        <View style={styles.container3}>
            <View style={hr80}></View>
            <Text style={styles.txt5}>Food Quantity</Text>
            <View style={incdecout}>
              <Text style={incdecbtn} onPress={()=>increaseQuantity()}>+</Text>
              <TextInput style={incdecinput} value={quantity} />
              <Text style={incdecbtn} onPress={()=>decreaseQuantity()}>-</Text>
          </View>
          <View style={hr80}></View>
        </View>

        <View style={styles.container4}>
            <View style={styles.c4in}>
              <Text style={styles.txt2}>Total Price:</Text>
                <Text style={styles.txt6}> $ 
                {(parseInt(/*data.Price*/'7.00') * parseInt(quantity)).toString()}
                </Text>
            </View>
            <View style={hr80}></View>
        </View>
        <View style={styles.btnout}> 
            <TouchableOpacity style = {btn2} title="AddtoCart" onPress={(e) => 
                //signOutFromApp()
                navigation.navigate('usercart')
              }>
                <Text style = {styles.btntxt}>Add to Cart</Text>
            </TouchableOpacity>            
            <TouchableOpacity style = {btn2} title="BuyNow" onPress={() => 
                navigation.navigate("placeorder")
              }>
                <Text style = {styles.btntxt}>Buy Now</Text>
            </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    //alignItem:'center',
    width:"100%",
  },
  container1:{
    //position:'absolute',
    top:5,
    flex:1,
    backgroundColor:"#fff",
    alignItem:'center',
    justifyContent:'center',
  },
  s1:{
    width:'100%',
    height:300,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  cardimgin:{
    width:'100%',
    height:'100%',
  },
  s2:{
    width:'100%',
    padding:20,
  },
  s2in:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
  },
  head1:{
    fontSize:20,
    fontWeight:'500',
    color:colors.text1,
    width:220,
    marginRight:10,
  },
  head2:{
    fontSize:20,
    fontWeight:'200',
    color:colors.text3,
  },
  s3:{
    width:'95%',
    backgroundColor: colors.text1,
    padding:20,
    borderRadius:10,
    marginLeft:'2.5%',
  },
  head3:{
    fontSize:30,
    fontWeight:'200',
    color:colors.col1,
  },
  head4:{
    marginVertical:10,
    fontSize:20,
    fontWeight:'400',
    color: colors.col1,
  },
  s3in:{
    backgroundColor: 'white',
    padding:10,
    borderRadius:10,
    width:100,
    flexDirection:'row',
    justifyContent:'center',
    alignItem:'center',
  },
  head5:{
    color: colors.text3,
    fontSize:20,
    fontWeight: '200',
    marginLeft:10,
  },
  btnout:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    // marginTop:10,
    flexDirection:'row',
  },
  btntxt:{
    color: 'white',
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:20,
    borderRadius:10,
    width:'90%',
    textAlign:'center',
  },
  container2:{
    width: '90%',
    backgroundColor: colors.col1,
    padding:20,
    borderRadius:20,
    alignSelf: 'center',
    marginVertical:5,
    elevation:10,
    alignItems:'center',
  },
  txt1:{
    color: colors.text1,
    fontSize:20,
    fontWeight:'200',
  },
  txt2:{
    color: colors.text3,
    fontSize:30,
    fontWeight:'200',
    marginVertical:10,
  },
  container2in:{
    flexDirection:'row',
    alignItems: 'center',
  },
  txt3:{
    color: 'red',
    fontSize:16,
    width:'30%',
    textAlign: 'center',
  },
  dash:{
    width:1,
    height:20,
    backgroundColor: colors.text1,
    marginHorizontal:10,
  },
  container3:{
    width:'100%',
    alignItems:'center',
    // justifyContent:'center',
  },
  txt5:{
    color: 'red',
    fontSize:18,
    // width:'30%',
    textAlign: 'center',
  },
  container4:{
    width:'90%',
    alignSelf:'center',
    alignItems:'center',
  },
  c4in:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:'100%',
    alignItems:'center',
  },
  txt6:{
    color: 'red',
    fontSize:25,
    // width:'30%',
    textAlign: 'center',
  },
})


export default Productpage
