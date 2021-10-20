import React from 'react'
import styles from '../Styles/Styles'
import SegmentedControl from '@react-native-segmented-control/segmented-control'
import { Text, View } from 'react-native'

const SegmentInput = ({ subtitle = '', title, options, selected, onChange }) => { 
  return (
    <View style={[styles.section, styles.secondary]}>
      <View style={styles.split}>
        <Text style={[styles.title, styles.secondary]}>{ title }</Text>
        { subtitle !== '' &&
          <Text style={styles.subtitle, styles.secondary}>{ subtitle }</Text>
        }
      </View>
      <View style={styles.split}>
        <SegmentedControl 
          values={ options } 
          selectedIndex={ selected } 
          onValueChange={ onChange } 
          fontStyle={{ color: 'white' }}
          activeFontStyle={{ color: '#F66463' }}
          style={{ paddingVertical: 12, marginTop: 8, flexGrow: 1 }}
        />
      </View>
    </View>
  )
}

export default SegmentInput
