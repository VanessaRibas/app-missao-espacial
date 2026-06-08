import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import api from "../services/api";

export default function AlertasScreen() {
  const [alertas, setAlertas] = useState<any[]>([]);

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

  function alterarNivel(id: number, novoNivel: string) {
    setAlertas((alertasAtuais) =>
      alertasAtuais.map((alerta) =>
        alerta.id === id
          ? { ...alerta, nivel: novoNivel }
          : alerta
      )
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/galaxia.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Alertas</Text>

        <FlatList
          data={alertas}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>

              <Text style={styles.info}>
                Nível Atual: {item.nivel}
              </Text>

              <Text style={styles.info}>
                {item.mensagem}
              </Text>

              <View style={styles.botoesContainer}>
                <TouchableOpacity
                  style={[
                    styles.botaoNivel,
                    styles.baixo,
                    item.nivel === "BAIXO" &&
                      styles.selecionado,
                  ]}
                  onPress={() =>
                    alterarNivel(item.id, "BAIXO")
                  }
                >
                  <Text style={styles.textoBotao}>
                    Baixo
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.botaoNivel,
                    styles.medio,
                    item.nivel === "MEDIO" &&
                      styles.selecionado,
                  ]}
                  onPress={() =>
                    alterarNivel(item.id, "MEDIO")
                  }
                >
                  <Text style={styles.textoBotao}>
                    Médio
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.botaoNivel,
                    styles.alto,
                    item.nivel === "ALTO" &&
                      styles.selecionado,
                  ]}
                  onPress={() =>
                    alterarNivel(item.id, "ALTO")
                  }
                >
                  <Text style={styles.textoBotao}>
                    Alto
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.botaoNivel,
                    styles.critico,
                    item.nivel === "CRITICO" &&
                      styles.selecionado,
                  ]}
                  onPress={() =>
                    alterarNivel(item.id, "CRITICO")
                  }
                >
                  <Text style={styles.textoBotao}>
                    Crítico
                  </Text>
                </TouchableOpacity>
              </View>
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

  container: {
    flex: 1,
    padding: 15,
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
    marginBottom: 8,
  },

  info: {
    fontSize: 14,
    marginBottom: 5,
  },

  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  botaoNivel: {
    width: "23%",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  baixo: {
    backgroundColor: "#22C55E",
  },

  medio: {
    backgroundColor: "#EAB308",
  },

  alto: {
    backgroundColor: "#F97316",
  },

  critico: {
    backgroundColor: "#DC2626",
    },
  selecionado: {
    borderWidth: 3,
    borderColor: "#FFFFFF",
    transform: [{ scale: 1.08 }],

    shadowColor: "#a1a2a2",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 8,
    },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});