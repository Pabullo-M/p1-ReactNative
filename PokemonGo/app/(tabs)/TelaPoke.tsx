import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, Image, View,Text  } from 'react-native';
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';

interface PokemonImage {
    id: number;
    name: string;
    front_default: string;
}

export default function TelaPoke() {
    const [data, setData] = useState([]);
    const [pokemonImages, setPokemonImages] = useState<PokemonImage[]>([]);

    useEffect(() => {
        fetchData();
        getNomeImg()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon-form');
            setData(response.data.results);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const getNomeImg = async () => {
        try {
            const requests = data.map(async (item) => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${item.name}`);
                const pokemonData = response.data;
                const { id, name, sprites } = pokemonData;
                const { front_default } = sprites;
                return { id, name, front_default };
            });

            const results = await Promise.all(requests);
            setPokemonImages(results);
        } catch (error) {
            console.error('Erro ao buscar os dados do Pokémon:', error);
        }
    };


    return (
        <LinearGradient colors={['#FFFFFF','#EBFDE0']}
        style={styles.gradient}>  
        <FlatList
            data={pokemonImages}
            renderItem={({ item }) => (
                <View style={{ marginRight: 10, left:43 }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: item.front_default }}
                    />
                    <Text >{item.name}</Text>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
        />
     </LinearGradient>
    );
}
