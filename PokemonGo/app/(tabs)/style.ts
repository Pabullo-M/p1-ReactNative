import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      gradient: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      singUp:{
        color: '#3F6463',
        fontWeight:"700",
        fontSize:25,
        top: 25,
      },
      imgLogo:{
        top: 50 ,
        width:350 ,
      },
      googleLogo:{
        height: 45,
        right: 85,
        top: 7
      },
      googleButton:{
        backgroundColor: '#FDFFFF',
        bottom: 50,
        width: '60%',
        height:60 ,
        alignItems: 'center',
        borderRadius:5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        
      },
      textoGoogle:{
        bottom: '50%',
        color: '#6A8F8E',
        fontWeight:"400",
        fontSize:20,
        left:10 ,
      },
      botaoLog:{
        backgroundColor: '#FFB863',
        bottom: 130,
        width: '60%',
        height:60 ,
        alignItems: 'center',
        borderRadius:5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      },
      textoLog:{
        top: '27%',
        color: '#FFF',
        fontWeight:"400",
        fontSize:18,
      },
      gradient2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        paddingTop:100
      },
      input: {
        width: '80%',
        height: 40,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      itemContainer: {
        width: '30%',
        alignItems: 'center',
        marginVertical: 10,
      },
      imgPoke: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
      },


})