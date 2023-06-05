import React from 'react'
import { View, FlatList, Image, useWindowDimensions, ScrollView, Text, StyleSheet, Pressable } from 'react-native'
import products from '../data/products'

const ProductDetails = () => {
    console.log("products", products);
    const product = products[0]
    const width = useWindowDimensions()

    const AddToCart=()=>{
        console.warn("checking");
    }
    return (
        <ScrollView>
            {/* Image  Carousel */}
            <FlatList
                data={product.images}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ width: 300, aspectRatio: 1 }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}> Rs.{product.price}</Text>
                <Text>{product.description}</Text>
                <Text>{product.description}</Text>
            </View>
            <Pressable onPress={AddToCart} style={styles.button}>
                <Text style={styles.buttonText} >Add to Cart</Text>
            </Pressable>
        </ScrollView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    title: {
        lineHeight: 14,
        fontSize: 24,
        paddingTop: 10,
        color: 'black',
        marginVertical: 10,
        fontWeight: 400
    },
    price: {
        lineHeight: 16,
        color: 'black',
        paddingTop: 5
    },
    button: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'black',
        width: '90%',
        margin: 'auto',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 400,
    }
})