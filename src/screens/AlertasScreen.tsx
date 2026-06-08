import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import api from "../services/api";

export default function AlertasScreen() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const response = await api.get("/alertas");
      setAlertas(response.data);
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
    <View style={styles.container}>
      <FlatList
        data={alertas}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Nível: {item.nivel}</Text>
            <Text>{item.mensagem}</Text>
          </View>
        )}
      />
    </View></ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    },
  container: {
    flex: 1,
    padding: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
});