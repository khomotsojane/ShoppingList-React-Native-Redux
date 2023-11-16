import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function YourCart({ route }) {
  const { selectedItems } = route.params;
  const [totalprice, setPrice] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 50 }}>Your Cart</Text>
      <FlatList
        data={selectedItems}
        renderItem={({ item }) => (
          <View style={styles.cartItemContainer}>
            <Image source={item.src} style={styles.cartItemImage} />
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>{`Price R: ${item.price}`}</Text>
            <Text>{`Brand: ${item.brand}`}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity>
        <Text>Price {selectedItems.reduce(function (acc, obj) { return parseFloat(acc) + parseFloat(obj.price) }, 0).toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemContainer: {
    backgroundColor: "#DDD5F3",
    width: 300,
    height: 200,
    //marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    //alignContent: "center",
    //alignItems: "center",
  },
  cartItemImage: {
    borderRadius: 10,
    width: 150,
    height: 100,
    borderWidth: 2,
    borderColor: "#DDD5F3",
    resizeMode: "contain",
  },
});
