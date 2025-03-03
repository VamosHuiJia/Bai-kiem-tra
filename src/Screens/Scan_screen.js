import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/orange_juice.png")} style={styles.image}>
        {/* Nút quay lại */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Thông tin sản phẩm */}
        <View style={styles.overlay}>
          <Text style={styles.label}>Lauren’s Orange Juice</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end", // Đưa nội dung xuống dưới
  },
  backButton: { position: "absolute", top: 50, left: 20 },
  overlay: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Làm mờ nền
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  label: { fontSize: 18, marginRight: 10 },
  addButton: { backgroundColor: "#6B7FDB", padding: 10, borderRadius: 10 },
});

export default ScanScreen;
