/**
 * GasMix
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react'
import type { Node } from 'react'
import styles from './Styles/Styles'
import Logo from './Components/Logo'
import NumericInput from './Components/NumericInput'
import SegmentInput from './Components/SegmentInput'
import ModalInput from './Components/ModalInput'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'

const App: () => Node = () => {
	const [isMetric, setIsMetric] = useState(false)
	const toggleSwitch = () => setIsMetric(previousState => !previousState)
  
  const [modalVisible, setModalVisible] = useState(false)

	const [ratioIndex, setRatioIndex] = useState(3)
	const changeRatioIndex = (value) => setRatioIndex(ratios.indexOf(value))

	const [customRatio, setCustomRatio] = useState('0')
	const changeCustomRatio = (value) => setCustomRatio(value)

  useEffect(() => setModalVisible(isCustom), [ratioIndex])

  const ratios = ['16:1', '32:1', '40:1', '50:1', 'Custom']
  const isCustom = ratioIndex === ratios.length - 1
  const ratio = isCustom ? customRatio : ratios[ratioIndex].slice(0, -2)

	const [fuel, setFuel] = useState('0')
	const changeFuel = (value) => setFuel(value)

	const [oil, setOil] = useState('0')

  useEffect(() => {
    const modifier = isMetric ? 1000 : 128
    const amount = (modifier * fuel) / ratio
    const formatted = (Math.round(amount * 100) / 100)
    const result = isFinite(amount) ? formatted.toString() : ''
    setOil(result)
  }, [fuel, ratioIndex, customRatio, isMetric])

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}
      >
        <NumericInput 
          backgroundColor='#f6f6f6' 
          title='Oil' 
          subtitle={ isMetric ? 'milliliters' : 'ounces' }
          editable={ false }
          icon={ require('./Images/tint-red.png') }
          value={ oil }
        />
        <NumericInput 
          backgroundColor='#e2e2e2' 
          title='Fuel' 
          subtitle={ isMetric ? 'liters' : 'gallons' }
          editable={ true }
          icon={ require('./Images/tachometer-red.png') }
          value={ fuel }
          onChange={ changeFuel }
        />
        <SegmentInput
          title='Mixture Ratio'
          subtitle={ isCustom && ratio }
          options={ ratios }
          selected={ ratioIndex }
          onChange={ changeRatioIndex }
        />
        <SegmentInput
          title='Measurements'
          options={ ['US', 'Metric'] }
          selected={ isMetric }
          onChange={ toggleSwitch }
        />
        <ModalInput
          title='Change Ratio'
          visible={ modalVisible }
          value={ customRatio }
          onChange={ changeCustomRatio }
          onClose={ () => setModalVisible(false) }
        />        
        <Logo />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
