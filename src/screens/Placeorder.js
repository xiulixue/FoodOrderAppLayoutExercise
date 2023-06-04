import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Backbtn from "../components/Backbtn";
import { btn1, colors, hr80 } from "../globals/style";

const Placeorder = ({ navigation, route }) => {
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

  const placenow= ()=> {
    console.log('pay')
    alert('Order has been sent to Kitchen!')
  }

  return (
    <ScrollView>
      <Backbtn navigation={navigation} redirectPage="usercart" />
      <View style={styles.container}>
        <Text style={styles.head1}>Your Order Summary</Text>
        {/* <FlatList
          style={styles.c1}
          data={orderdata.cart}
          renderItem={({ item }) => {
            return ( */}
              <View style={styles.rowout}>
                <View style={styles.row}>
                  <View style={styles.left}>
                    <Text style={styles.qty}>2</Text>
                    <Text style={styles.title}>Crispy chicken</Text>
                    <Text style={styles.price}>$7.00</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.totalprice}>
                        {/* ${parseInt(item.Foodquantity)*parseInt(item.data.foodPrice)} */}
                        $20.50
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.left}>
                    <Text style={styles.qty}>1</Text>
                    <Text style={styles.title}>Takoyaki</Text>
                    <Text style={styles.price}>$6.50</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.totalprice}>
                        {/* ${parseInt(item.Foodquantity)*parseInt(item.data.foodPrice)} */}
                        $6.50
                    </Text>
                  </View>
                </View>
              </View>
            {/* );
          }}
        /> */}

        <Text style={hr80}></Text>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.title}>Order Total :</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.totalprice}>$20.50</Text>
          </View>
        </View>
        <Text style={hr80}></Text>

        <View style={styles.statusout}>
          <Text style={styles.head1}>Order Status</Text>
          <View style={styles.row}>
            <View style={styles.left}>Table:</View>
            <View style={styles.right}>
              <Text style={styles.title}>M5</Text>
            </View>
          </View>
          
          <View style={styles.row}>
            <View style={styles.left}>Status:</View>
            <View style={styles.right}>
              <Text style={styles.title}>Meals Cooking</Text>
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
  row: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    justifyContent:'space-between',
  },
  rowout: {
    flexDirection:'column',
    margin:10,
    boxShadow: '2px 2px 10px #888888', //web use
    backgroundColor: colors.col1,
    padding: 10,
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
