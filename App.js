import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const firePokemon = [
  { name: 'Ninetales', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_38.png' },
  { name: 'Flareon', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_136.png' },
];

const waterPokemon = [
  { name: 'Dewgong', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_87.png' },
  { name: 'Gyarados', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_130.png' },
];

const grassPokemon = [
  { name: 'Venusaur', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_3.png' },
  { name: 'Vileplume', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_45.png' },
];

const App = () => {
  return (
      <ScrollView style={styles.container}>
        <Button
            title="Add Pokemon"
            onPress={() => alert('Add Pokemon button clicked!')}
            color="darkkhaki"
        />

        <View style={styles.spacing} />

        <View style={[styles.sectionHeader, { backgroundColor: 'crimson' }]}>
          <MaterialCommunityIcons name="fire" size={24} color="white" />
          <Text style={styles.sectionHeaderText}>Fire</Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.pokemonName}>{firePokemon[0].name}</Text>
          <Image source={{ uri: firePokemon[0].cardImage }} style={styles.cardImage} />
        </View>

        <View style={styles.listItem}>
          <Text style={styles.pokemonName}>{firePokemon[1].name}</Text>
          <Image source={{ uri: firePokemon[1].cardImage }} style={styles.cardImage} />
        </View>

        <View style={[styles.sectionHeader, { backgroundColor: 'deepskyblue' }]}>
          <MaterialCommunityIcons name="water" size={24} color="white" />
          <Text style={styles.sectionHeaderText}>Water</Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.pokemonName}>{waterPokemon[0].name}</Text>
          <Image source={{ uri: waterPokemon[0].cardImage }} style={styles.cardImage} />
        </View>

        <View style={styles.listItem}>
          <Text style={styles.pokemonName}>{waterPokemon[1].name}</Text>
          <Image source={{ uri: waterPokemon[1].cardImage }} style={styles.cardImage} />
        </View>

        <View style={[styles.sectionHeader, { backgroundColor: 'seagreen' }]}>
          <MaterialCommunityIcons name="leaf" size={24} color="white" />
          <Text style={styles.sectionHeaderText}>Grass</Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.pokemonName}>{grassPokemon[0].name}</Text>
          <Image source={{ uri: grassPokemon[0].cardImage }} style={styles.cardImage} />
        </View>

        <View style={styles.listItem}>
          <Text style={styles.pokemonName}>{grassPokemon[1].name}</Text>
          <Image source={{ uri: grassPokemon[1].cardImage }} style={styles.cardImage} />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'whitesmoke',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  pokemonName: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
  },
  cardImage: {
    width: "50%",
    height: 300,
    marginLeft: 10,
  },
  spacing: {
    marginBottom: 20,
  },
});

export default App;
