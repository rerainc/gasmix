 import React from 'react'
 import styles from '../Styles/Styles'
 import { Text, View, TextInput, Image } from 'react-native'
 
 const NumericInput = ({ backgroundColor, title, subtitle, editable, icon, value, onChange = () => {} }) => { 
   return (
    <View style={[styles.section, { backgroundColor: backgroundColor }]}>
      <View style={styles.split}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.subtitle}>{ subtitle }</Text>
      </View>
      <View style={[styles.input, { borderBottomWidth: (editable ? 1 : 0) }]}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={ icon } />
        </View>
        <TextInput 
          style={[styles.text, { color: (editable ? 'black' : '#888') }]} 
          keyboardType='numeric' 
          value={ value }
          editable={ editable }
          onChangeText={ onChange }
        />
      </View>
    </View>
   )
 }
 
 export default NumericInput
