import Button from "../Button/Button";
import style from "./search.module.css"

export default function Search_bar() {
  return (
    <div className={`${style.Search_bar}`}>
        <div className="">
        <i className="fa-solid d-flex align-items-center justify-content-between fa-location-dot fs-5  border-1 px-3 h-100 border-end"></i>
            <input type="text"  className="form-control border-0 " placeholder="Search By Name"/>
        <Button  buttonName="Search" className=" btn" buttonStyle={{width:'160px',heigh:'48px',backgroundColor:'#1572d3',color:'white'}}/>
        </div>
    </div>
  )
}
