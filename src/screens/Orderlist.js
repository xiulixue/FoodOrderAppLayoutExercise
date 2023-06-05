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
import { colors } from "../globals/style";
import HomeHeadNav from "../components/HomeHeadNav";
import BottomNav from "../components/BottomNav";
import Searchbar from "../components/Searchbar";

const Orderlist = ({ navigation }) => {
  //    const [orders, setOrders] = useState([])
  //    const getOrdersData = async() => {
  //   //   const ordersRef = firebase.firestore().collection('Orders').doc(firebase.auth().currentUser.uid);
  //   //   ordersRef.onSnapshot(snapshot => {
  //   //         setOrders(snapshot.docs.map(doc => doc.data()))
  //   //   })
  //   }
  //   useEffect(()=>{
  //       getOrdersData()
  //   },[])
  //   console.log(orders)

  const orders = [
    {
        orderid: "1001",
        table: "M5",
        orderstatus: "cancelled",
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
    },
    {
        orderid: "1002",
      table: "O2",
      orderstatus: "completed",
      orderdate: "2023-05-18 19:00 PM",
      orderwaiter: "Mark",
      ordercost: "40.00",
      orderdata: [
        {
          Foodquantity: "4",
          data: {
            foodName: "Crispy Chicken",
            foodPrice: "7.00",
          },
        },
        {
          Foodquantity: "2",
          data: {
            foodName: "Takoyaki",
            foodPrice: "6.50",
          },
        },
      ],
    },
    {
        orderid: "1003",
      table: "B9",
      orderstatus: "pending",
      orderdate: "2023-05-18 20:00 PM",
      orderwaiter: "staff2",
      ordercost: "12.00",
      orderdata: [
        {
          Foodquantity: "2",
          data: {
            foodName: "Takoyaki",
            foodPrice: "6.50",
          },
        },
      ],
    },
  ];

  const convertDate = (date) => {
    let newDate = new Date(date.seconds * 1000);
    return newDate.toDateString();
  };
  const cancelOrder = (id) => {};

  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav title={"Order List"} navigation={navigation} />
      <BottomNav navigation={navigation} />
      <Searchbar data={orders} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {orders
          .sort((a, b) => b.orderdata.seconds - a.orderdata.seconds)
          .map((order, item, index) => {
            return (
              <View style={styles.ordercard} key={index}>
                {/* <Text style={styles.orderindex}> {index + 1} </Text> */}
                <Text style={styles.head1}>Order ID: {order.orderid} </Text>
                <Text style={styles.ordertxt2}>
                  order date: {order.orderdate} {/* {convertDate(order.orderdate)} */}
                </Text>
                <Text style={styles.ordertxt2}>
                  order table: -- {order.table} -- {/* {convertDate(order.orderdate)} */}
                </Text>
                <Text style={styles.ordertxt2}>
                  order server: {order.orderwaiter} {/* {convertDate(order.orderdate)} */}
                </Text>
                {order.orderstatus == "ontheway" && (
                  <Text style={styles.orderotw}>order status: on the way</Text>
                )}
                {order.orderstatus == "completed" && (
                  <Text style={styles.ordercompleted}>
                    order status: completed
                  </Text>
                )}
                {order.orderstatus == "cancelled" && (
                  <Text style={styles.ordercancelled}>
                    order status: cancelled
                  </Text>
                )}
                {order.orderstatus == "pending" && (
                  <Text style={styles.orderpending}>order status: pending</Text>
                )}

                <View style={styles.row1}>
                    <FlatList
                    style={styles.c1}
                    data={order.orderdata}
                    renderItem={({ item }) => {
                        return (
                        <View style={styles.rowout}>
                            <View style={styles.row}>
                            <View style={styles.left}>
                                <Text style={styles.qty}>{item.Foodquantity}</Text>
                                <Text style={styles.title}>
                                {item.data.foodName}
                                </Text>
                                <Text style={styles.price}>
                                {" "}
                                AUD{item.data.foodPrice}
                                </Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={styles.totalprice}>
                                {parseInt(item.Foodquantity) *
                                    parseInt(item.data.foodPrice)}
                                </Text>
                            </View>
                            </View>
                            
                        </View>
                        );
                    }}
                    />                  
                </View>
                <Text style={styles.total}>
                    Total: {order.ordercost}
                </Text>

                {/* {order.orderstatus === "completed" ? 
                  <Text style={styles.ordertxt3}>Completed Order</Text>
                 : null}
                {order.orderstatus === "cancelled" ? 
                  <Text style={styles.ordertxt3}>Completed Order</Text>
                 : null} */}
                {order.orderstatus !== "completed" &&
                order.orderstatus !== "cancelled" ? 
                  <TouchableOpacity
                    style={styles.cancelbtn}
                    onPress={() => cancelOrder(order)}
                  >
                    <Text style={styles.cancelbtnin}>Cancel Order</Text>
                  </TouchableOpacity>
                 : null}
              </View>
            );
          })}
      </ScrollView>

      <Text>Orderlist</Text>
    </View>
  );
};

export default Orderlist;

const styles = StyleSheet.create({
  container: {
    //marginTop:50,
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.col1,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  ordercard: {
    width:'98%',
    margin:5,
    borderRadius:10,
    boxShadow: "2px 2px 10px #888888", //web use
  },
  orderindex: {
    fontSize:20,
    color:colors.col1,
    backgroundColor: colors.text1,
    textAlign:'center',
    borderRadius:20,
    padding:5,
    width:30,
    position:'absolute',
    top:10,
    left:10,
  },
  orderotw: {
    width:'100%',
    fontSize: 18,
    color:'white',
    padding:5,
    textAlign:'center',
    backgroundColor:'orange',
    textAlign:'center',
    alignSelf:'center',
  },
  ordercompleted: {
    width:'100%',
    fontSize: 18,
    color:'white',
    padding:5,
    textAlign:'center',
    backgroundColor:'blue',
    textAlign:'center',
    alignSelf:'center',
  },
  ordercancelled: {
    width:'100%',
    fontSize: 18,
    color:'white',
    padding:5,
    textAlign:'center',
    backgroundColor:'gray',
    textAlign:'center',
    alignSelf:'center',
  },
  orderpending: {
    width:'100%',
    fontSize: 18,
    color:'white',
    padding:5,
    textAlign:'center',
    backgroundColor:'green',
    textAlign:'center',
    alignSelf:'center',
  },
  order:{
    margin:10,
    boxShadow: "2px 2px 5px #888888", //web use
    backgroundColor:colors.col1,
    padding:10,
    borderRadius:5,
  },
  head1: {
    fontSize: 30,
    fontWeight:'bold',
    color: colors.text1,
    textAlign:'center',
    marginVertical:10,   
  },
  ordertxt1: {
    fontSize: 20,
    color: colors.text1,
    textAlign:'center',
    marginVertical:10,
  },
  ordertxt2: {
    fontSize: 18,
    color: colors.text3,
    textAlign:'center',
    marginVertical:5,
  },
  ordertxt3: {
    fontSize: 18,
    color: colors.text3,
    textAlign:'center',
    marginVertical:5,
    borderColor:colors.text3,
    borderWidth:0.5,
    borderRadius:5,
    padding:5,
  },
  cancelbtn:{
    backgroundColor: colors.text1,
    padding:10,
    borderRadius:5,
    marginVertical:10,
    alignSelf:'center',
  },
  cancelbtnin:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  },
  c1: {
    width:'95%',
  },
  row1: {
    alignItems:'center',
    justifyContent:'center',
    flexDirection: "column",
    margin: 5,
    marginTop:10,
    backgroundColor: colors.col1,
    borderStyle: 'dashed',
    borderWidth:0.5,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-between",
  },
  rowout: {
    flexDirection: "column",
    margin: 5,
    backgroundColor: colors.col1,
    borderRadius: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  qty: {
    width: 40,
    height: 30,
    backgroundColor: colors.text1,
    borderRadius: 5,
    textAlign: "center",
    // textAlignVertical:'center',
    marginRight: 10,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 10,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 10,
    color: colors.text1,
  },
  totalprice: {
    fontSize: 17,
    fontWeight: "bold",
    borderColor: colors.text1,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
  total:{
    fontSize:20,
    color:colors.text3,
    textAlign:'right',
    marginVertical:10,
    marginRight:20,
  },
  btntext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    margin: 10,
    whiteSpace: "nowrap",
  },
});
