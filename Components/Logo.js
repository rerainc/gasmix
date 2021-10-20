 import React from 'react'
 import { Text, View } from 'react-native'
 
 const Logo = () => { 
   return (
    <View style={{ flexDirection: 'row', marginRight: 24, marginTop: 48 }}>
      <View style={{ flexGrow: 1 }} />
      <Text style={{ color: 'white', fontSize: 72, fontWeight: '100' }}>Gas</Text>
      <Text style={{ color: 'white', fontSize: 72, fontWeight: '300' }}>Mix</Text>
    </View>
   )
 }
 
 export default Logo
 