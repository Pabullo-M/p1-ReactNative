import {View, Image, StyleSheet, Platform, Text, TouchableOpacity, StatusBar } from 'react-native';
import logo from '../../assets/images/logo.png'
import google from '../../assets/images/google.png'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <StatusBar hidden={false} />
      <LinearGradient colors={['#FFFFFF','#EBFDE0']}
        style={styles.gradient}>
        <Image 
          source={logo}
          style={styles.imgLogo}
          />
        <Text style={styles.singUp}>
          Sign up with
        </Text>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('TelaPoke')}}
          style={styles.googleButton}
        >
          <Image 
            source={google}
            style={styles.googleLogo}
            resizeMode="contain"
            />
          <Text style={styles.textoGoogle}>GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('TelaPoke')}}
          style={styles.botaoLog}
        >
          <Text style={styles.textoLog}>POKEMON TRAINER CLUB</Text>
        </TouchableOpacity>
          
        
      </LinearGradient>
    </View>
  )
}

export default HomeScreen;
