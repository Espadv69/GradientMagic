import { useState } from 'react'
import { SketchPicker } from 'react-color'

import './GradientGenerator.css'

const GradientGenerator = () => {
  const [firstColor, setFirstColor] = useState('#ff0000')
  const [secondColor, setSecondColor] = useState('#0000ff')
  const [angle, setAngle] = useState(90)

  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${firstColor}, ${secondColor})`,
    width: '100%',
    height: '200px',
    marginTop: '.8rem',
  }

  return (
    <section className="gradient-generator">
      <h1>Gradient Generator</h1>
      <header>
        <div className="first-color">
          <h4>Pick First Color:</h4>
          <SketchPicker
            color={firstColor}
            onChange={(c) => setFirstColor(c.hex)}
          />
        </div>

        <div className="second-color">
          <h4>Pick Second Color:</h4>
          <SketchPicker
            color={secondColor}
            onChange={(c) => setSecondColor(c.hex)}
          />
        </div>

        <div className="angle">
          <h4>Adjust Angle: {angle}°</h4>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
          />
        </div>
      </header>
      <footer>
        <div style={gradientStyle}></div>
        <p>Css Code:</p>
        <code>
          background: linear-gradient({angle}deg, {firstColor}, {secondColor});
        </code>
      </footer>
    </section>
  )
}

export default GradientGenerator
