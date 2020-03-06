import React from "react";


export const FadeComponent = (props) => {
  const [shouldRender, setRender] = React.useState(props.showComponent)
  
  React.useEffect(() => {
    if(props.showComponent) {
      setRender(true)
    }
  }, [props.showComponent])

  const onAnimationEnd = () => {
    if(!props.showComponent) {
      setRender(false)
    }
  }


  return (
    shouldRender ? <div className="heighlited-heading" onAnimationEnd={onAnimationEnd} style={{ animation: `${props.showComponent ? "fadeIn 1s ease 1s forwards" : "fadeOut 1s ease 0s forwards"}` }}>
      {props.children}
    </div> : null
  )
}