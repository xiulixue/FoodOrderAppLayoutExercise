import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Backbtn from "../components/Backbtn";
import BottomNav from "../components/BottomNav";
import { btn2, colors } from "../globals/style";
import crispychicken from "../../assets/crispychicken.webp";
import takoyaki from "../../assets/takoyaki.webp"
import { AntDesign } from "@expo/vector-icons";

const UserCart = ({ navigation }) => {
  const [cartdata, setCartdata] = useState(null);
  const [totalcost, setTotalcost] = useState("0");

  // const getCartData = async() => {
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

  // useEffect(()=>{
  //     getCartData();
  // },[]);

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

// const deleteItem = (item) => {
//     const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().currentUser.uid);
//     docRef.update({
//           cart: firebase.firestore.FieldValue.arrayRemove(item)
//         })
//     getCartData();
// }

  const data = [
    {
      orderId: 1,
      tableId: "M5",
      cart: [
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
      ],
    },
  ];
  //setCartdata(data);

  return (
    <View style={styles.containerout}>
      <Backbtn navigation={navigation} redirectPage={"menu"} />
      <BottomNav navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.head1}>Order Details</Text>
        <Text style={styles.head1}>Table: {data.tableId}</Text>
        {/* {cartdata == null || JSON.parse(cartdata).cart.length == 0 ?
                <Text style={styles.head2}>Your Cart is Empty</Text> 
                :  
                <FlatList style={styles.cardlist} 
                    //data={JSON.parse(cartdata).cart}
                    data={data}
                    renderItem={({item})=>{
                        return(
                            <View style={styles.cartcard}>
                                <Image 
                                    source={crispychicken} //change to orderdetails food item image
                                    style={styles.cartimg}
                                />
                                <View style={styles.cartcardin}>
                                    <View style={styles.c1}>
                                        <Text style={styles.txt1}>{item.foodquantity} X {item.data.foodName} </Text>
                                        <Text style={styles.txt2}>$ {item.data.foodPrice}/each </Text>
                                    </View>
                                    <TouchableOpacity style={styles.c4} onPress={()=>
                                        deleteItem(item)
                                    }>
                                        <Text style={styles.txt1}>Delete</Text>
                                        <AntDesign name="delete" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}                 
                />                
             } */}
        <View style={styles.cardlist}>
          <View style={styles.cartcard}>
            <Image
              source={crispychicken} //change to orderdetails food item image
              style={styles.cartimg}
            />
            <View style={styles.cartcardin}>
              <View style={styles.c1}>
                <Text style={styles.txt1}>Crispy Chicken X 2 </Text>
                <Text style={styles.txt2}>$7.00 ea</Text>
              </View>
              <TouchableOpacity style={styles.c4}>
                <Text style={styles.txt1}>Delete</Text>
                <AntDesign
                  name="delete"
                  size={24}
                  color="black"
                  style={styles.del}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cartcard}>
            <Image
              source={takoyaki} //change to orderdetails food item image
              style={styles.cartimg}
            />
            <View style={styles.cartcardin}>
              <View style={styles.c1}>
                <Text style={styles.txt1}>Takoyaki X 1 </Text>
                <Text style={styles.txt2}>$6.50 ea</Text>
              </View>
              <TouchableOpacity style={styles.c4}>
                <Text style={styles.txt1}>Delete</Text>
                <AntDesign
                  name="delete"
                  size={24}
                  color="black"
                  style={styles.del}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.btncout}>
            <View style={styles.c3}>
                <Text style={styles.txt5}>Total:</Text>
                <Text style={styles.txt6}>$20.5{totalcost}</Text>
            </View>

            <TouchableOpacity style={btn2} onPress={()=>{
                  navigation.navigate('placeorder')
                }}>
                <Text style={styles.btntxt}>Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  containerout: {
    flex: 1,
    width: "100%",
    // alignItems:'center',
    backgroundColor: colors.col1,
    // height:'100%',
  },
  container: {
    flex: 1,
    width: "100%",
    // alignItems:'center',
    backgroundColor: colors.col1,
    // height:'100%',
  },
  head1: {
    fontSize: 20,
    textAlign: "center",
    // fontWeight:'200',
    // marginVertical: 20,
    color: colors.text1,
  },
  head2: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "200",
    marginVertical: 20,
    boxShadow: "2px 2px 10px #888888", //web use
    backgroundColor: colors.col1,
    width: "95%",
    height: "50%",
    alignSelf: "center",
    paddingVertical: "25%",
    borderRadius: 10,
  },
  cardlist: {
    width: "100%",
  },
  cartcard: {
    flexDirection: "row",
    backgroundColor: colors.col1,
    marginVertical: 5,
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    boxShadow: "2px 2px 10px #888888", //web use
  },
  cartimg: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  cartcardin: {
    flexDirection: "column",
    margin: 5,
    width: "58%",
    alignItems: "center",
    justifyContent: "center",
  },
  c1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.col1,
  },
  c2: {
    backgroundColor: "row",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    flexDirection: "row",
  },
  txt1: {
    fontSize: 16,
    color: colors.text1,
    width: "60%",
    fontWeight: "bold",
  },
  txt2: {
    fontSize: 16,
    color: colors.text3,
    fontWeight: "bold",
  },
  txt3: {
    fontSize: 15,
    color: colors.col1,
  },
  del: {
    color: colors.text1,
  },
  c4: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 100,
    borderRadius: 10,
    borderColor: colors.text1,
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  btncout:{
    width:'100%',
    // position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    marginTop:0,
    flexDirection:'row',
    borderTopColor:colors.text3,
    borderTopWidth:0.2,
  },
  btntxt:{
    backgroundColor: colors.text1,
    color: 'white',
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:20,
    borderRadius:10,
    width:'90%',
    textAlign:'center',
  },
  c3: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt5: {
    fontSize: 20,
    color: colors.text3,
    marginVertical:5,
    // fontWeight: "bold",
  },
  txt6: {
    fontSize: 25,
    color: colors.text3,
    marginVertical:5,
    fontWeight: "bold",
  },
});
