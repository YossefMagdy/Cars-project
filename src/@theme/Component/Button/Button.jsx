
export default function Button({buttonName,buttonStyle,className}) {
    

  return (
    <>
        <button style={buttonStyle} className={`${className}`}>{buttonName}</button>
    </>
  )
}
