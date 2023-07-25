module.exports = {
    colors: {
        col1: 'white',
        text1: 'red',
        text2: 'grey',
        text3: 'black',
    },
    titles: {
        title1: 50,
        btntxt: 20,
    },
    btn1:{
        // width: '80%',
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        marginVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:10, //only android
        //boxShadow: '2px 2px 10px #888888', //web use
        color: 'white',
    },
    btntxt1:{ 
        fontSize:18,
        fontWeight:'bold',
        color: 'white',
        margin:10,
        whiteSpace:'nowrap',
    },
    btn2:{
        width: 150,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:10, //only android
        //boxShadow: '2px 2px 10px #888888', //web use
        color: 'white',
    },

    hr80:{
        width: '80%',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    veg: {
        backgroundColor: 'green',
        width: 20,
        height: 20,
        borderRadius: 5
    },
    nonveg:{
        backgroundColor: 'red',
        width: 20,
        height:20,
        borderRadius: 5,
    },
    navbtnin:{
        color:'white',
    },
    navbtn:{
        backgroundColor:'red',
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        //boxShadow: '2px 2px 10px #888888', //web use
        borderRadius:10,
        borderLeftRadius:0,
    },
    navbtnout:{
        position:'absolute',
        top:0,
        left:0,
        zIndex:10,
    },
    incdecbtn:{
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        elevation: 10,
        //boxShadow: '2px 2px 10px #888888', //web use
        width:25,
        // height:30,
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        padding:5,
    },
    incdecinput:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent: 'center',
        elevation:10,
        //boxShadow: '2px 2px 10px #888888', //web use
        padding:10,
        width:30,
        marginHorizontal:10,
        fontSize:20,
    },
    incdecout: {
        flexDirection: 'row',
        alignItems: 'center',
        margin:10,
    }
}