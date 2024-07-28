import { NavLink } from "react-router-dom";
import notFound from '../../assets/not-found/404-not-found.png'


export default function NotFound() {
  return (
    
    <>
    
    <div className="container justify-content-center d-flex align-items-center py-4">
    <div className="text-center">
     <img className="pagebuilder-mobile-only w-75" src={notFound} />

     <button    className="btn btn-primary mt-4 d-block mx-auto"><NavLink className='nav-link' to='/home'>Home</NavLink></button>
    </div>
    </div>
    </>
  )
}
