import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';

interface PokemonImage {
  id: number;
  name: string;
  front_default: string;
  favorito:boolean;
}

export default function TelaPoke() {
  const [data, setData] = useState([]);
  const [pokemonImages, setPokemonImages] = useState<PokemonImage[]>([]);
  const [itemPesquisa, setItemPesquisa] = useState('');
  const [pesquisa, setPesquisa] = useState<PokemonImage[]>([]);
  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon-form');
      setData(response.data.results);
      getNomeImg(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  const getNomeImg = async (results: any) => {
    try {
      const requests = results.map(async (item: any) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${item.name}`);
        const pokemonData = response.data;
        const { id, name, sprites } = pokemonData;
        const { front_default } = sprites;
        return { id, name, front_default };
      });

      const pokemonResults = await Promise.all(requests);
      setPokemonImages(pokemonResults);
    } catch (error) {
      console.error('Erro ao buscar os dados do Pokémon:', error);
    }
  };

  const handlePesquisa = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${itemPesquisa}`);
      const pokemonData = response.data;
      const { id, name, sprites } = pokemonData;
      const { front_default } = sprites;
      const result = { id, name, front_default };
      setPesquisa([result]);
    } catch (error) {
      Alert.alert('Pokémon não encontrado');
      console.error('Erro ao buscar os dados do Pokémon:', error);
    }
  };
  const handlePress = (i: number) => {
    setPokemonImages((itens) =>
      itens.map((item: PokemonImage, index) =>
        index === i ? { ...item, favorito: !item.favorito} : item
      )
    );}
  return (
    <LinearGradient
      colors={['#FFFFFF', '#EBFDE0']}
      style={styles.gradient2}
    >
      <View style={styles.containerTabTop}>
        <Text style={styles.titulosTexto}>TAGS</Text>
        <Text style={styles.titulosTexto}>POKÉMONS</Text>
        <Text style={styles.titulosTexto}>EGGS</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon..."
        value={itemPesquisa}
        onChangeText={(text) => setItemPesquisa(text)}
        onSubmitEditing={handlePesquisa}
      />
      
      <View>
      <FlatList
        data={itemPesquisa != '' ? pesquisa : pokemonImages}
        renderItem={({ item,index }) => (
          <View style={styles.itemContainer}>
            <Text>Nr. {item.id}</Text>
            <TouchableOpacity onPress={()=>{handlePress(index)}}>
              <Ionicons style={styles.estrela} name={item.favorito ? 'star' : 'star-outline'} size={20} color={item.favorito ? 'gold' : 'gold'} />
              </TouchableOpacity>
            <Image
              style={styles.imgPoke}
              source={{ uri: item.front_default }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
        </View>
    </LinearGradient>
  );
}