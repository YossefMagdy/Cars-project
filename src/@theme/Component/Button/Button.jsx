
export default function Button({buttonName,buttonStyle,className,children}) {
    

  return (
    <>
        <button style={buttonStyle} className={`${className}`}>{buttonName} {children}</button>
    </>
  )
}
