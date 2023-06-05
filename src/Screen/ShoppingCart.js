import React from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../Components/CartListItem'

const ShoppingCart = () => {
    
  return (
    <ScrollView>
      <FlatList 
      data={cart}
      renderItem={({item})=>  <CartListItem cartItem={item} /> }
      />
    </ScrollView>
  )
}

export default ShoppingCart

const styles= StyleSheet.create({

})