
export default function Button({buttonName,buttonStyle,className,children,onClick,...props}) {
    

  return (
    <>
        <button {...props} style={buttonStyle} className={`${className}`} onClick={onClick}>{buttonName} {children}</button>
    </>
  )
}
