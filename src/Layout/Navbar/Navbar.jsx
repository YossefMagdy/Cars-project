import Button from '../../@theme/Component/Button/Button'
import logo from  '../../assets/nav/logo.png'
import style from  './navbar.module.css'

export default function Navbar() {
  return (
    <>
    <nav className={`navbar ${style.navbar_fixed} navbar-expand-lg py-4`}>
  <div className="container">
    <img src={logo} alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto">
        <li className="nav-item">
          <a className="nav-link " >Become a renter</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Rental deals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">How it work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Why choose us</a>
        </li> 



      </ul>

      <div className='ms-5'>
        <Button buttonName="Sign In" className="btn" />
        <Button buttonName="Sign Up" className="btn" buttonStyle={{backgroundColor:'#1572d3', width:'100px',color:'white'}}/>
      </div>
      
    </div>
  </div>
</nav>
    
    </>
)
}
