import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("../../assets/galaxia.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Mission Control</Text>
        <Text style={styles.subtitulo}>
          Painel de Monitoramento Espacial
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Dispositivos")}
        >
          <Text style={styles.botaoTexto}>Dispositivos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Sensores")}
        >
          <Text style={styles.botaoTexto}>Sensores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Alertas")}
        >
          <Text style={styles.botaoTexto}>Alertas</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },

  botao: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  botaoTexto: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#1E3A8A",
  },
});