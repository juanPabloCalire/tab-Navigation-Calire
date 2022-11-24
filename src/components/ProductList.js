import { FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { products } from '../../products'
import ProductCard from './ProductCard'


const ProductList = () => {
  return (
    <View>
      <Text>Hola</Text>
      
      <FlatList
        data={products}
        keyExtractor={(products) => products.id}
        renderItem={({ item }) => <ProductCard{...item}/>}
      />

    </View>
    

  )
}

export default ProductList

const styles = StyleSheet.create({})
