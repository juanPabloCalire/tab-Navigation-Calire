 import { StyleSheet, Text, View, Button } from 'react-native'
 import React from 'react'
 
 const BreadDetailScreen = () => {
   return (
     <View style={styles.container}>
       <Text style={styles.title}>Bread Detail Screen</Text>
       <Button title='Go to Bread' onPress={()=> navigation.navigate('Bread')}/>
     </View>
   )
 }
 
export default BreadDetailScreen
 
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FF724C',
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    fontFamily:'ComfortaaBold',
  }
})