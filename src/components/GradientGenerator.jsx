import { useState } from 'react'
import { SketchPicker } from 'react-color'

import './GradientGenerator.css'

const GradientGenerator = () => {
  const [firstColor, setFirstColor] = useState('#ff0000')
  const [secondColor, setSecondColor] = useState('#0000ff')
  const [angle, setAngle] = useState(90)
}

export default GradientGenerator
