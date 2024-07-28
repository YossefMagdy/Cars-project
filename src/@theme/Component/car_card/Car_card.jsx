import Button from "../Button/Button";
import { card_card } from "./imgAsset";

import carCard from './carCard.module.css';

export default function Car_card({id,card_image,card_title,car_price,showDetailButton}) {
  return (
    <div className="card shadow m-3" id={id} >
        <div className="px-3 py-4">
                <img src={card_image} alt="car"  className="w-100"/>
        </div>

        <div className="p-3">
                <h3 className={carCard.car_title}>{card_title}</h3>
                <div className="d-flex align-items-center my-2">
                        <img src={card_card.star} alt="start"/>
                        <span className="mx-1">4.6</span>
                        <span>(1345 reviews)</span>
                </div>
                <div className="d-flex justify-content-between">
                            <div className="me-1">
                                    <p className="mx-0" style={{whiteSpace:'nowrap'}}><img src={card_card.user} alt="user" /> 2 Passanger</p>
                                    <p className="mx-0" style={{whiteSpace:'nowrap'}}><i className="fa-solid fa-calendar-days ms-1"></i> 2022</p>
                            </div>
                            <div>
                                    <p className="mx-0" style={{whiteSpace:'nowrap'}}><img src={card_card.d8wxke_2_} alt="user" /> Air conditioning</p>
                                    <p className="mx-0" style={{whiteSpace:'nowrap'}}><img src={card_card.Frame} alt="user" />Automatic</p>
                            </div>
                </div>
                <div className="horizontalLine"></div>
                <div className="d-flex justify-content-between">
                    <p>Price</p>
                    <p><strong>{car_price}</strong> <sub>/day</sub></p>
                </div>
                
                <Button onClick={showDetailButton} buttonName="View Details" className="btn btn-primary" buttonStyle={{width:'100%'}} > <i className="fa-solid fa-arrow-right"></i> </Button>
        </div>
    </div>
  )
}
