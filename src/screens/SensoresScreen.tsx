import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import api from "../services/api";

export default function SensoresScreen() {
  const [sensores, setSensores] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const response = await api.get("/sensores");
      setSensores(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/galaxia.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Sensores</Text>

        <FlatList
          data={sensores}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>Tipo: {item.tipo}</Text>
              <Text>Leitura: {item.valorLeitura}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});