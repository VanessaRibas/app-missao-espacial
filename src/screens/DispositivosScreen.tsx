import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import api from "../services/api";

export default function DispositivosScreen() {
  const [dispositivos, setDispositivos] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const response = await api.get("/dispositivos");
      setDispositivos(response.data);
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
        <FlatList
          data={dispositivos}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>Categoria: {item.categoria}</Text>
              <Text>Status: {item.status}</Text>
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

  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
});