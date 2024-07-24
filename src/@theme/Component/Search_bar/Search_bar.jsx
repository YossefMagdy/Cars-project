import Button from "../Button/Button";
import style from "./search.module.css"

export default function Search_bar() {
  return (
    <div className={style.Search_bar}>
        <div>
        <i className="fa-solid fa-location-dot fs-4 me-3"></i>
            <input type="text"  className="form-control border-0" placeholder="Search By Name"/>
        </div>
        <Button  buttonName="Search" className="mx-4 btn" buttonStyle={{width:'160px',heigh:'48px',backgroundColor:'#1572d3',color:'white'}}/>
    </div>
  )
}
