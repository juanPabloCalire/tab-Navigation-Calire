import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductList from '../components/ProductList'
import { SafeAreaView } from 'react-native-safe-area-context'

const CategoriesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Categories Screen</Text>
      <Button title='Go to Bread' onPress={() => navigation.navigate('Bread')} />
      <View>
        <ProductList/>

      </View>
      
    </SafeAreaView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    fontFamily:'ComfortaaBold',
  }

})