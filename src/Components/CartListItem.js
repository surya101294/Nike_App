import React from 'react'
import { View, StyleSheet, FlatList,Text, Image } from 'react-native'



const CartListItem = ({cartItem}) => {
  return (
    <View style={styles.container} >
      <Image source={{uri:cartItem.product.image}} style={styles.image}/>
      
    <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>{cartItem.size}</Text>
    </View>
    <View style={styles.footer}>
<Feather 

/>
    </View>
    </View>
  )
}

export default CartListItem

const styles= StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center',

    },
    image:{
        width:'50%'
    },
    name:{
        fontSize:16,
        fontWeight:400,
    },
    size:{
        fontSize:16,
        fontWeight:400,
    },
})