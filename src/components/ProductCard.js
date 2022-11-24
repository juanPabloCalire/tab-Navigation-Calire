import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'



const ProductCard = ({image, category, title, price, description}) => {
    
    const [count, setCount] = React.useState(1);

    
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image style={styles.imageContainer} source={{uri: image}} />

      </View>
      <Text>{ title}</Text>
      <Text>{ description}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
      
      
      
          
         
    </View>
  )
}

export default ProductCard;

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height:500,
    backgroundColor: 'white',
    margin: 20,
    padding:20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 20,
    shadowOpacity: 6,
    elevation:5
    
  },
  imageContainer: {
    height: 320,
    width: 270,
    borderRadius:10
  }
})