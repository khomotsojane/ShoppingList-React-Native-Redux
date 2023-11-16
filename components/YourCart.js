import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function YourCart({ route }) {
  const { selectedItems } = route.params;
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(selectedItems));

  const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
    setTotalPrice(calculateTotalPrice(updatedItems));
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 50 }}>Your Cart</Text>
      <FlatList
        data={selectedItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
            <View style={styles.cartItemContainer}>
              <Image source={item.src} style={styles.cartItemImage} />
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>{`Price R: ${item.price}`}</Text>
              <Text>{`Brand: ${item.brand}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text>Total Price: {totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemContainer: {
    backgroundColor: "#DDD5F3",
    width: 300,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
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
