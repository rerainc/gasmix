import React from 'react'
import { StyleSheet, Modal, Text, TextInput, Button, View } from 'react-native'

const ModalInput = ({ title, visible, value, onChange, onClose }) => { 
  return (
    <Modal animationType='fade' transparent={ true } visible={ visible }>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{ title }</Text>
          <TextInput 
            style={styles.modalInput} 
            keyboardType='numeric' 
            value={ value }
            onChangeText={ onChange }
          />
          <Button title="Ok" onPress={ onClose } />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  modalContainer: {
    width: '70%',
    backgroundColor: 'rgba(255,255,255,.95)',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center'
  },
  modalInput: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8
  }
})

export default ModalInput