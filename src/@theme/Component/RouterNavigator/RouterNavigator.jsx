import { NavLink } from "react-router-dom";


export default function RouterNavigator({Router}) {


  return (
    <>
    <div className="d-flex flex-wrap">
      {Router.map((router, index) => (
        <div key={index}>
          {router.ActiveLink ? (
            <NavLink to={router.NavLink} className="text-uppercase" > {router.navTitle} </NavLink>
          ) : (
            <p className="text-uppercase d-inline-block" >{router.navTitle}</p>
          )}
          {Router[index + 1] && <span className="mx-2">/</span>}
        </div>
      ))}
    </div>
  </>
  )
}
