import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { FoodContext } from "../Manager/FoodManager";
import { FlatList } from "react-native";

export default function List({ navigation }) {
  const { Setfooditems } = useContext(FoodContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const grocery = [
    {
      src: require("../assets/BreadFlour.webp"),
      name: "Bread Flour",
      id: 1,
      price: "21",
      brand: "Quality",
    },
    {
      src: require("../assets/ButterBeans.webp"),
      name: "Butter Beans",
      id: 2,
      price: "24",
      brand: "Quality",
    },
    {
      src: require("../assets/Colgate.webp"),
      name: "Colgate",
      id: 3,
      price: "15",
      brand: "Quality",
    },
    {
      src: require("../assets/EllisBrown.webp"),
      name: "Ellis Brown",
      id: 4,
      price: "40",
      brand: "Quality",
    },
    {
      src: require("../assets/Infacare.webp"),
      name: "Infacare",
      id: 5,
      price: "90",
      brand: "Quality",
    },
    {
      src: require("../assets/Purity.webp"),
      name: "Purity prunes",
      id: 6,
      price: "20",
      brand: "Quality",
    },
    {
      src: require("../assets/Steak.webp"),
      name: "Steak n chop",
      id: 7,
      price: "35",
      brand: "Quality",
    },
    {
      src: require("../assets/Sasko.webp"),
      name: "Sasko flour",
      id: 8,
      price: "30",
      brand: "Quality",
    },
    {
      src: require("../assets/PurityP.webp"),
      name: "Purity Pear",
      id: 9,
      price: "20",
      brand: "Quality",
    },
    {
      src: require("../assets/Muffin.webp"),
      name: "Muffin Flour",
      id: 10,
      price: "30",
      brand: "Quality",
    },
    {
      src: require("../assets/Nan.webp"),
      name: "Nan",
      id: 11,
      price: "90",
      brand: "Quality",
    },
    {
      src: require("../assets/Lentils.webp"),
      name: "Ritebrand Lentils",
      id: 12,
      price: "28",
      brand: "Quality",
    },
    {
      src: require("../assets/Nestum.webp"),
      name: "Nestum",
      id: 13,
      price: "30",
      brand: "Quality",
    },
    {
      src: require("../assets/Selati.webp"),
      name: "Selati",
      id: 14,
      price: "38",
      brand: "Quality",
    },
  ];

  const SubmitHandler = (item) => {
    if (selectedOption) {
      const newItem = {
        src: item.src,
        name: selectedOption.name,
        id: item.id,
        price: selectedOption.price,
        brand: selectedOption.brand,
      };

      setSelectedItems([...selectedItems, newItem]);
    } else {

    }
  };

const addToCartHandler = () => {
  Setfooditems(selectedItems);
  navigation.navigate("YourCart", { selectedItems: selectedItems });
};

  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <Text style={{ marginTop: 60, fontSize: 25, fontWeight: "bold", color: "#DDD5F3" }}>
          Smart Shopping List
        </Text>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>Welcome</Text>
      </View>
      <View style={styles.verscroll}>
        <FlatList
          numColumns={2}
          data={grocery}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => SubmitHandler(item)}>
              <View style={styles.itemContainer}>
                <Image source={item.src} style={styles.image} />
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <RNPickerSelect
                  placeholder={{ label: "Select an option...", value: null }}
                  onValueChange={(value) => setSelectedOption(value)}
                  items={[
                    {
                      label: `Name: ${item.name}`,
                      value: {
                        name: item.name,
                        price: item.price,
                        brand: item.brand,
                      },
                    },
                    {
                      label: `Price :R ${item.price}`,
                      value: {
                        name: item.name,
                        price: item.price,
                        brand: item.brand,
                      },
                    },
                    {
                      label: `Brand: ${item.brand}`,
                      value: {
                        name: item.name,
                        price: item.price,
                        brand: item.brand,
                      },
                    },
                  ]}
                  style={pickerSelectStyles}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <TouchableOpacity onPress={addToCartHandler} style={styles.addToCartButton}>
        <Text style={{ textAlign: "center", alignSelf: "center", marginTop: 5, color: "white" }}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  upperview: {
    flex: 3,
    backgroundColor: "white",
    alignItems: "center",
  },
  verscroll: {
    flex: 8,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: "#DDD5F3",
    width: 150,
    height: 220,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 10,
    width: 150,
    height: 100,
    borderWidth: 2,
    borderColor: "#DDD5F3",
    resizeMode: "contain",
  },
  addToCartButton: {
    backgroundColor: "teal",
    width: 150,
    alignSelf: "center",
    height: 30,
    borderRadius: 10,
    marginTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});






