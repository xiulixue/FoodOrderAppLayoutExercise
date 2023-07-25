import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Backbtn from "../components/Backbtn";
import { btn1, colors, hr80 } from "../globals/style";

const Placeorder = ({ 
  navigation 
  //,route 
}) => {
  // const {cartdata} = route.params;
  // const [orderdata, setOrderdata] = useState([]);
  // const [totalCost, setTotalCost] = useState('0');

  // useEffect(()=>{
  //     setOrderdata(JSON.parse(cartdata))
  // },[cartdata])
  // console.log(orderdata)

//   useEffect(()=>{
//     if(cartdata != null){
//         const food = JSON.parse(cartdata).cart;
//         console.log(food);
//         let totalfoodprice = 0;
//         food.map((item)=>{
//             const foodprice = parseInt(item.data.foodprice);
//             const foodquantity = parseInt(item.Foodquantity);
//             totalfoodprice += foodprice * foodquantity;
//         });
//         //console.log(totalfoodprice);
//     }
//   },[cartdata])

  // useEffect(()=>{
  // const getUserData = async() => {
  //     const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().currentUser.uid);
  //     docRef.get().then((doc)=>{
  //         if(doc.exists){
  //         //   console.log('data exists')
  //             const data = JSON.stringify(doc.data());
  //             //console.log(data),
  //             setCartdata(data);
  //         } else {
  //         //   console.log(' no such data')

  //         }
  //       }).catch((error)=>{
  //         console.error('error getting data: ', error);
  //       })
  // }
  //},[userloggeduid])

  const placenow = ()=> {
    console.log('pay')
    alert('Order has been sent to Kitchen!')
    navigation.navigate('table')
  }

  const ordercart = 
  {
    orderid: "1001",
    table: "M5",
    orderstatus: "pending",
    orderdate: "2023-05-18 18:00 PM",
    orderwaiter: "Tina",
    ordercost: "20.50",
    orderdata: [
      {
        Foodquantity: "2",
        data: {
          foodName: "Crispy Chicken",
          foodPrice: "7.00",
        },
      },
      {
        Foodquantity: "1",
        data: {
          foodName: "Takoyaki",
          foodPrice: "6.50",
        },
      },
    ],
  }

  return (
    <ScrollView>
      <StatusBar />
      <Backbtn navigation={navigation} redirectPage="usercart" />
      <View style={styles.container}>
        <Text style={styles.head1}>Your Order Summary</Text>
        <FlatList
          style={styles.c1}
          data={ordercart.orderdata}
          renderItem={({ item }) => {
            return (
              <View style={styles.rowout}>
                <View style={styles.row}>
                  <View style={styles.left}>
                    <Text style={styles.qty}>{item.Foodquantity}</Text>
                    <Text style={styles.title}>{item.data.foodName}</Text>
                    <Text style={styles.price}>${item.data.foodPrice}</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.totalprice}>
                        ${parseInt(item.Foodquantity)*parseInt(item.data.foodPrice)}                         
                    </Text>
                  </View>
                </View>
              </View>
             );
          }}
        /> 

        <Text style={hr80}></Text>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.title}>Order Total :</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.totalprice}>${ordercart.ordercost}</Text>
          </View>
        </View>
        <Text style={hr80}></Text>

        <View style={styles.statusout}>
          <Text style={styles.head1}>Order Details</Text>
          <View style={styles.row}>
            <View style={styles.left}>Table:</View>
            <View style={styles.right}>
              <Text style={styles.title}>{ordercart.table}</Text>
            </View>
          </View>          
          <View style={styles.row}>
            <View style={styles.left}>Status:</View>
            <View style={styles.right}>
              <Text style={styles.title}>{ordercart.orderstatus}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.left}>Wait Time:</View>
            <View style={styles.right}>
              <Text style={styles.title}>5 mins</Text>
            </View>
          </View>
        </View>

        <View style={hr80}></View>
        <View>
          <TouchableOpacity style={btn1} onPress={()=>
            placenow()
          }>
            <Text style={styles.btntext}>Proceed to Kitchen</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default Placeorder;

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    alignItems:'center',
  },
  head1:{
    fontSize:30,
    fontWeight: '200',
    color: colors.text1,
    margin:10,
    textAlign:'center',
  },
  c1:{
    width:'95%',
  },
  row: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    justifyContent:'space-between',
  },
  rowout: {
    flexDirection:'column',
    margin:10,
    elevation:10,
    //boxShadow: '2px 2px 5px #888888', //web use
    backgroundColor: colors.col1,
    padding: 5,
    borderRadius: 10,
  },
  left:{
    flexDirection:'row',
    alignItems:'center',
  },
  right:{
    flexDirection:'row',
    alignItems:'center',
  },
  qty: {
    width:40,
    height:30,
    backgroundColor: colors.text1,
    borderRadius:5,
    textAlign:'center',
    // textAlignVertical:'center',
    marginRight:10,
    color: 'white',
    fontSize:17,
    fontWeight:'bold',
  },
  title: {
    fontSize: 17,
    fontWeight:'bold',
    marginRight:10,
  },
  price: {
    fontSize:17,
    fontWeight:'bold',
    marginRight:10,
    color: colors.text1,
  },
  totalprice:{
    fontSize:17,
    fontWeight:'bold',
    borderColor: colors.text1,
    borderRadius:5,
    borderWidth:1,
    padding:5,
  },
  btntext:{
    fontSize:20,
    fontWeight:'bold',
    color: 'white',
    margin:10,
    whiteSpace:'nowrap',
  }
});
