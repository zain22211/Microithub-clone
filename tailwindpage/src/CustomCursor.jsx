
import AnimatedCursor from 'react-animated-cursor'
const CustomCursor = () => {
  return (
    <>
    <AnimatedCursor
    innerSize={8}
    outerSize={30}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    innerStyle={{
      backgroundColor: "#1c1c1c"
    }}
    outerStyle={{
      border: "1px solid #1c1c1c"
    }}
  />
  
    </>
  )
}

export default CustomCursor