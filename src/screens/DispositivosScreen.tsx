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

export default function DispositivosScreen() {
  const [dispositivos, setDispositivos] = useState<any[]>([]);

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

  function alterarStatus(id: number, novoStatus: string) {
    setDispositivos((dispositivosAtuais) =>
      dispositivosAtuais.map((dispositivo) =>
        dispositivo.id === id
          ? { ...dispositivo, status: novoStatus }
          : dispositivo
      )
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/galaxia.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Dispositivos</Text>

        <FlatList
          data={dispositivos}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>

              <Text style={styles.info}>
                Categoria: {item.categoria}
              </Text>

              <Text style={styles.statusAtual}>
                Status Atual: {item.status}
              </Text>

              <View style={styles.botoesContainer}>
                <TouchableOpacity
                  style={[
                    styles.botaoStatus,
                    styles.ativo,
                    item.status === "ativo" &&
                      styles.selecionado,
                  ]}
                  onPress={() =>
                    alterarStatus(item.id, "ativo")
                  }
                >
                  <Text style={styles.textoBotao}>
                    Ativo
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.botaoStatus,
                    styles.inativo,
                    item.status === "inativo" &&
                      styles.selecionado,
                  ]}
                  onPress={() =>
                    alterarStatus(item.id, "inativo")
                  }
                >
                  <Text style={styles.textoBotao}>
                    Inativo
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.botaoStatus,
                    styles.manutencao,
                    item.status === "Em manutencao" &&
                      styles.selecionado,
                  ]}
                  onPress={() =>
                    alterarStatus(
                      item.id,
                      "Em manutencao"
                    )
                  }
                >
                  <Text style={styles.textoBotao}>
                    Manutenção
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

  info: {
    fontSize: 14,
    marginBottom: 5,
  },

  statusAtual: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },

  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  botaoStatus: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 3,
    alignItems: "center",
  },

  ativo: {
    backgroundColor: "#22C55E",
  },

  inativo: {
    backgroundColor: "#DC2626",
  },

  manutencao: {
    backgroundColor: "#EAB308",
  },
  selecionado: {
    borderWidth: 3,
    borderColor: "#FFFFFF",
    transform: [{ scale: 1.01 }],

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
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});